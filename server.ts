import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory bookings store for quote requests and tracking
interface BookingRecord {
  id: string;
  name: string;
  phone: string;
  email?: string;
  fromCity: string;
  toCity: string;
  moveType: string;
  moveDate: string;
  estimatedCost?: number;
  itemsSummary?: string;
  specialNotes?: string;
  status: "SURVEY_SCHEDULED" | "PACKING_SCHEDULED" | "IN_TRANSIT" | "DELIVERED_ASSEMBLED";
  createdAt: string;
}

const mockBookings: BookingRecord[] = [
  {
    id: "SAAD-JED-8421",
    name: "Tariq Al-Ghamdi",
    phone: "+966 50 123 4567",
    fromCity: "Jeddah (Al Rawdah)",
    toCity: "Riyadh (Al Malqa)",
    moveType: "3 BHK Villa",
    moveDate: "2026-08-28",
    estimatedCost: 2850,
    itemsSummary: "Full villa furniture, 4 ACs, 2 Master bedroom sets, Kitchen appliances",
    status: "IN_TRANSIT",
    createdAt: "2026-08-24T14:20:00Z"
  },
  {
    id: "SAAD-JED-7932",
    name: "Mohammed Khan",
    phone: "+966 55 987 6543",
    fromCity: "Jeddah (Al Hamra)",
    toCity: "Jeddah (Al Shatie)",
    moveType: "2 BHK Apartment",
    moveDate: "2026-08-26",
    estimatedCost: 1100,
    itemsSummary: "Living room, 2 bedrooms, Dining set, Fridge & Washing Machine",
    status: "PACKING_SCHEDULED",
    createdAt: "2026-08-25T09:10:00Z"
  },
  {
    id: "SAAD-RYD-9104",
    name: "Fahad Al-Shehri",
    phone: "+966 54 321 8765",
    fromCity: "Jeddah (Al Safa)",
    toCity: "Dammam (Al Khobar)",
    moveType: "Corporate Office (15 Workstations)",
    moveDate: "2026-08-30",
    estimatedCost: 4500,
    itemsSummary: "15 Desks, Server rack, Meeting table, 20 Ergonomic chairs",
    status: "SURVEY_SCHEDULED",
    createdAt: "2026-08-25T07:45:00Z"
  }
];

// Lazy initialization of Gemini API
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Health Check API
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Saad Packers & Movers API", timestamp: new Date().toISOString() });
});

// Bookings API - Create Quote / Inspection Request
app.post("/api/bookings", (req, res) => {
  try {
    const { name, phone, email, fromCity, toCity, moveType, moveDate, estimatedCost, itemsSummary, specialNotes } = req.body;
    
    if (!name || !phone || !fromCity || !toCity) {
      return res.status(400).json({ error: "Missing required booking details." });
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const cityCode = fromCity.toLowerCase().includes("jeddah") || fromCity.toLowerCase().includes("جدة") ? "JED" : "KSA";
    const id = `SAAD-${cityCode}-${randomNum}`;

    const newBooking: BookingRecord = {
      id,
      name,
      phone,
      email: email || "",
      fromCity,
      toCity,
      moveType: moveType || "Home Shifting",
      moveDate: moveDate || new Date().toISOString().split("T")[0],
      estimatedCost: estimatedCost || 0,
      itemsSummary: itemsSummary || "Standard household inventory",
      specialNotes: specialNotes || "",
      status: "SURVEY_SCHEDULED",
      createdAt: new Date().toISOString(),
    };

    mockBookings.unshift(newBooking);

    res.json({
      success: true,
      message: "Quote request & survey booking registered successfully!",
      booking: newBooking,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Failed to process booking" });
  }
});

// Track Booking API
app.get("/api/bookings/track/:idOrPhone", (req, res) => {
  const query = req.params.idOrPhone.trim().toLowerCase();
  const found = mockBookings.find(
    (b) =>
      b.id.toLowerCase() === query ||
      b.phone.replace(/\s+/g, "").includes(query.replace(/\s+/g, ""))
  );

  if (!found) {
    return res.status(404).json({ error: "No booking found with this reference code or phone number." });
  }

  res.json({ success: true, booking: found });
});

// Gemini AI Moving & Packing Advisor Endpoint
app.post("/api/gemini/moving-advisor", async (req, res) => {
  try {
    const { userPrompt, language = "en", moveDetails } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      // Graceful fallback response if API key is not configured yet
      return res.json({
        advice: language === "ar"
          ? "نصيحة سعد لنقل العفش: يُفضل البدء في تغليف الأغراض الحساسة قبل يومين من النقل واستخدام كراتين مخصصة 5 طبقات مع الترقيم لكل غرفة. فريقنا في جدة يوفر سيارات دينا مغلقة ومجهزة لنقل آمن لجميع مدن المملكة."
          : "Saad Packers & Movers Advice: We recommend packing delicate items in 5-layer heavy bubble wrap 2 days ahead of moving. Our covered Dyna trucks and skilled carpenters ensure scratch-free transit across Jeddah and all Saudi Arabia.",
        recommendedTruck: "Dyna 4.5-Ton (Covered / دينا مغلقة ومبطنة)",
        packingMaterials: [
          "Heavy Duty 5-Ply Corrugated Boxes (كراتين 5 طبقات)",
          "Bubble Wrap 80 Micron (بابلز هوائي سميك)",
          "Stretch Film & Foam Rolls (ستريتش نايلون وفوم عازل)",
          "Wardrobe Hanging Boxes (صناديق تعليق الملابس)"
        ],
        tips: [
          "Label all boxes by destination room (kitchen, master bedroom, etc.)",
          "Ensure electronics and ACs are properly handled by certified technicians",
          "Book high-floor crane hoist for oversized sofas or glass tables in Jeddah high-rises"
        ]
      });
    }

    const systemPrompt = `You are the chief logistics and moving consultant at "Saad Packers & Movers" (سعد لنقل وتغليف الأثاث), the premier relocation company operating across Jeddah and the entire Kingdom of Saudi Arabia (Riyadh, Dammam, Mecca, Medina, Khobar, Jubail, Yanbu, Taif, Tabuk, etc.).
Your mission is to provide expert moving advice, truck size recommendations (e.g., Single Dyna 4.5T, Double Dyna, 10-Ton Lorry), required packing materials, carpenter dismantling requirements (غرف نوم، مطابخ، ستائر، مكيفات سبليت), and climate-adapted tips for Saudi Arabia (protecting against heat, dust, and long transit).

Output format: Respond in valid JSON with the following structure:
{
  "advice": "Clear, professional relocation summary and step-by-step strategy tailored to the customer",
  "recommendedTruck": "Vehicle specification (e.g. 1x Dyna 4.5-Ton or 2x Dyna Trucks or Closed Container)",
  "estimatedTransitTime": "Expected transit time (e.g., Same-day for Jeddah local, 24-48 hours for Jeddah to Riyadh/Dammam)",
  "packingMaterials": ["Material 1", "Material 2", "Material 3", "Material 4"],
  "carpenterWorkRequired": ["Specific furniture assembly/disassembly requirements"],
  "tips": ["Practical relocation tip 1", "Practical relocation tip 2", "Practical relocation tip 3"]
}

Respond in the language requested: ${language === "ar" ? "Arabic (العربية بلهجة مهنية واضحة ومطمئنة)" : "English (Professional and clear)"}.`;

    const userMessage = `Customer Relocation Request:
Prompt: ${userPrompt || "General home move guidance"}
Details: ${JSON.stringify(moveDetails || {})}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: userMessage,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
      },
    });

    const text = response.text || "{}";
    try {
      const parsed = JSON.parse(text);
      res.json(parsed);
    } catch {
      res.json({
        advice: text,
        recommendedTruck: "Dyna 4.5-Ton Covered",
        packingMaterials: ["Heavy bubble wrap", "5-ply corrugated boxes", "Stretch film", "Foam padding"],
        tips: ["Label boxes carefully", "Keep valuables with you", "Use specialized furniture blankets"]
      });
    }
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({
      error: "Failed to generate AI relocation advice",
      fallback: "Our relocation supervisors are available 24/7 on WhatsApp (+966 50 000 0000) for instant customized quotes and truck allocations."
    });
  }
});

// Vite middleware configuration
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Saad Packers & Movers Server is running on port ${PORT}`);
  });
}

startServer();

import { CityLocation, ServiceItem, InventoryCategory, Testimonial, PackingMaterial, FaqItem } from '../types';

export const KSA_CITIES: CityLocation[] = [
  {
    id: 'jeddah',
    nameEn: 'Jeddah (Primary Hub & HQ)',
    nameAr: 'جدة (المركز الرئيسي والفرع العام)',
    regionEn: 'Makkah Province (Western Region)',
    regionAr: 'منطقة مكة المكرمة (المنطقة الغربية)',
    distanceFromJeddahKm: 0,
    estTransitHours: 'Same-day (2-4 hrs)',
    isMainHub: true,
    popularDistrictsEn: ['Al Rawdah', 'Al Hamra', 'Al Shatie', 'Al Zahra', 'Al Salamah', 'Al Safa', 'Al Mohammadiyyah', 'Al Andalus', 'Obhur Al Shamaliyah'],
    popularDistrictsAr: ['الروضة', 'الحمراء', 'الشاطئ', 'الزهراء', 'السلامة', 'الصفا', 'المحمدية', 'الأندلس', 'أبحر الشمالية']
  },
  {
    id: 'makkah',
    nameEn: 'Mecca (Makkah Al-Mukarramah)',
    nameAr: 'مكة المكرمة',
    regionEn: 'Makkah Province',
    regionAr: 'منطقة مكة المكرمة',
    distanceFromJeddahKm: 85,
    estTransitHours: 'Same-day (3-5 hrs)',
    isMainHub: true,
    popularDistrictsEn: ['Al Aziziyah', 'Al Shawqiyyah', 'Al Naseem', 'Al Awali', 'Al Rusayfah'],
    popularDistrictsAr: ['العزيزية', 'الشوقية', 'النسيم', 'العوالي', 'الرصيفة']
  },
  {
    id: 'madinah',
    nameEn: 'Medina (Al-Madinah Al-Munawwarah)',
    nameAr: 'المدينة المنورة',
    regionEn: 'Madinah Province',
    regionAr: 'منطقة المدينة المنورة',
    distanceFromJeddahKm: 420,
    estTransitHours: '24 Hours Express',
    isMainHub: true,
    popularDistrictsEn: ['Al Qiblatayn', 'Al Aridh', 'King Fahd', 'Al Khalidiyyah'],
    popularDistrictsAr: ['القبلتين', 'العريض', 'حي الملك فهد', 'الخالدية']
  },
  {
    id: 'riyadh',
    nameEn: 'Riyadh (Capital City Hub)',
    nameAr: 'الرياض (العاصمة والمنطقة الوسطى)',
    regionEn: 'Riyadh Province (Central Region)',
    regionAr: 'منطقة الرياض (المنطقة الوسطى)',
    distanceFromJeddahKm: 950,
    estTransitHours: '24-48 Hours Express Transit',
    isMainHub: true,
    popularDistrictsEn: ['Al Malqa', 'Al Olaya', 'Al Yasmin', 'Al Narjis', 'Al Nakheel', 'Al Sahafa', 'Al Sulaimaniyah'],
    popularDistrictsAr: ['الملقا', 'العليا', 'الياسمين', 'النرجس', 'النخيل', 'الصحافة', 'السليمانية']
  },
  {
    id: 'dammam',
    nameEn: 'Dammam',
    nameAr: 'الدمام',
    regionEn: 'Eastern Province',
    regionAr: 'المنطقة الشرقية',
    distanceFromJeddahKm: 1350,
    estTransitHours: '48 Hours Express Transit',
    isMainHub: true,
    popularDistrictsEn: ['Al Faisaliyah', 'Al Shatee', 'Al Jalawiyah', 'Al Mubarakiyah'],
    popularDistrictsAr: ['الفيصلية', 'الشاطئ', 'الجلوية', 'المباركية']
  },
  {
    id: 'khobar',
    nameEn: 'Al Khobar & Dhahran',
    nameAr: 'الخبر والظهران',
    regionEn: 'Eastern Province',
    regionAr: 'المنطقة الشرقية',
    distanceFromJeddahKm: 1370,
    estTransitHours: '48 Hours Express Transit',
    isMainHub: true,
    popularDistrictsEn: ['Al Hizam Al Thahabi', 'Al Ulaya', 'Al Rakah', 'Corniche'],
    popularDistrictsAr: ['الحزام الذهبي', 'العليا', 'الراكة', 'الكورنيش']
  },
  {
    id: 'taif',
    nameEn: 'Taif',
    nameAr: 'الطائف',
    regionEn: 'Makkah Province',
    regionAr: 'منطقة مكة المكرمة',
    distanceFromJeddahKm: 170,
    estTransitHours: 'Same-day (4-6 hrs)',
    isMainHub: false
  },
  {
    id: 'yanbu',
    nameEn: 'Yanbu (Industrial & Royal Commission)',
    nameAr: 'ينبع (ينبع الصناعية والبحر)',
    regionEn: 'Madinah Province',
    regionAr: 'منطقة المدينة المنورة',
    distanceFromJeddahKm: 330,
    estTransitHours: '24 Hours Express',
    isMainHub: false
  },
  {
    id: 'jubail',
    nameEn: 'Jubail Industrial City',
    nameAr: 'الجبيل الصناعية',
    regionEn: 'Eastern Province',
    regionAr: 'المنطقة الشرقية',
    distanceFromJeddahKm: 1420,
    estTransitHours: '48 Hours Express',
    isMainHub: false
  },
  {
    id: 'tabuk',
    nameEn: 'Tabuk & NEOM Region',
    nameAr: 'تبوك ومنطقة نيوم',
    regionEn: 'Tabuk Province (North-Western Region)',
    regionAr: 'منطقة تبوك',
    distanceFromJeddahKm: 1020,
    estTransitHours: '36-48 Hours Express',
    isMainHub: true
  },
  {
    id: 'khamis_abha',
    nameEn: 'Abha & Khamis Mushait',
    nameAr: 'أبها وخميس مشيط',
    regionEn: 'Asir Province (Southern Region)',
    regionAr: 'منطقة عسير (المنطقة الجنوبية)',
    distanceFromJeddahKm: 650,
    estTransitHours: '24-36 Hours Express',
    isMainHub: true
  },
  {
    id: 'qassim',
    nameEn: 'Al Qassim (Buraidah & Unaizah)',
    nameAr: 'القصيم (بريدة وعنيزة)',
    regionEn: 'Al Qassim Province',
    regionAr: 'منطقة القصيم',
    distanceFromJeddahKm: 820,
    estTransitHours: '24-36 Hours Express',
    isMainHub: false
  },
  {
    id: 'hail',
    nameEn: 'Hail',
    nameAr: 'حائل',
    regionEn: 'Hail Province',
    regionAr: 'منطقة حائل',
    distanceFromJeddahKm: 780,
    estTransitHours: '24-36 Hours Express',
    isMainHub: false
  },
  {
    id: 'jizan',
    nameEn: 'Jizan (Jazan)',
    nameAr: 'جازان',
    regionEn: 'Jazan Province',
    regionAr: 'منطقة جازان',
    distanceFromJeddahKm: 710,
    estTransitHours: '24-36 Hours Express',
    isMainHub: false
  },
  {
    id: 'ahsa',
    nameEn: 'Al Ahsa (Hofuf)',
    nameAr: 'الأحساء (الهفوف والمبرز)',
    regionEn: 'Eastern Province',
    regionAr: 'المنطقة الشرقية',
    distanceFromJeddahKm: 1250,
    estTransitHours: '48 Hours Express',
    isMainHub: false
  }
];

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: 'home-shifting',
    titleEn: 'Home & Villa Relocation',
    titleAr: 'نقل عفش المنازل والفلل',
    shortDescEn: 'Complete residential moving with zero-scratch guarantee, room-by-room labeling, and clean floor protection.',
    shortDescAr: 'نقل كامل للمنازل والفلل والشقق مع ضمان عدم الخدش، وترقيم الكراتين، وحماية الأرضيات والممرات.',
    fullDescEn: 'Our residential moving team provides seamless end-to-end relocation for apartments, duplexes, and luxury villas. We bring dedicated covered Dyna trucks, professional handling staff, and heavy furniture blankets to ensure every sofa, television, mattress, and wardrobe arrives in mint condition.',
    fullDescAr: 'فريقنا المتخصص في نقل المنازل يقدم خدمة شاملة من الباب إلى الباب للشقق والفلل والقصور. نستخدم شاحنات دينا مغلقة ومجهزة بمفروشات عازلة مع فريق عمل مدرب ومحترف لنقل غرف النوم والمجالس والمطابخ والأجهزة الكهربائية بأعلى معايير الأمان.',
    iconName: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    badgeEn: 'Most Popular in Jeddah',
    badgeAr: 'الأكثر طلباً في جدة',
    featuresEn: [
      'Comprehensive floor & doorframe scratch shielding',
      'Disassembly & bubble wrapping of luxury bedroom sets',
      'Hanging wardrobe boxes for designer clothing',
      'Curtain, chandelier & wall decor unmounting/remounting',
      'Placement & positioning at your new home'
    ],
    featuresAr: [
      'حماية كاملة للأرضيات وإطارات الأبواب أثناء النقل',
      'فك وتغليف غرف النوم الفاخرة بالبابلز والكرتون المقوى',
      'صناديق كرتونية مخصصة لتعليق الملابس والبدل والفساتين',
      'فك وتركيب الستائر والنجف والديكورات الجدارية',
      'إعادة ترتيب وتوزيع الأثاث بالكامل في المنزل الجديد'
    ]
  },
  {
    id: 'carpenter-services',
    titleEn: 'Master Carpenter (Najjar) Services',
    titleAr: 'خدمات النجارين المحترفين (فك وتركيب)',
    shortDescEn: 'Expert carpenters for IKEA, Italian, Turkish, and custom bedroom sets, kitchens, and modular cabinets.',
    shortDescAr: 'نجارون محترفون لفك وتركيب جميع أنواع غرف النوم (ايكيا، إيطالي، تركي، صيني) والمطابخ وخزائن الملابس.',
    fullDescEn: 'Precision furniture dismantling and reassembly done by seasoned master carpenters. We ensure all bolts, screws, and hinges are cataloged in coded bags, preventing missing parts or structural wobbling during re-assembly.',
    fullDescAr: 'فريق نجارين خبراء يمتلكون أحدث المعدات لفك وتركيب كافة أنواع الأثاث الخشبي والمعدني بدقة متناهية، مع حفظ المسامير والبراولا في أكياس مخصصة ومرقمة لضمان عودة الأثاث كما كان دون أي ارتخاء أو ميلان.',
    iconName: 'Wrench',
    imageUrl: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80',
    badgeEn: '100% Fit Guarantee',
    badgeAr: 'ضمان دقة التركيب 100%',
    featuresEn: [
      'IKEA, Home Centre, and luxury Italian furniture experts',
      'Custom kitchen cabinet resizing and installation',
      'Sliding wardrobe alignment & track adjustment',
      'TV wall-mount bracket dismantling & re-installation',
      'All structural hardware securely bagged and tagged'
    ],
    featuresAr: [
      'خبرة متخصصة في أثاث ايكيا وهوم سنتر والمستورد الإيطالي والتركي',
      'فك وتعديل وتركيب دواليب المطابخ ورخام المطبخ',
      'ضبط مجاري الأبواب السحابة لخزائن الملابس',
      'فك وتركيب حوامل الشاشات الجدارية بدقة وأمان',
      'ترقيم وتغليف كافة الإكسسوارات والمسامير بدقة'
    ]
  },
  {
    id: 'office-relocation',
    titleEn: 'Office & Corporate Relocation',
    titleAr: 'نقل المكاتب والشركات والمؤسسات',
    shortDescEn: 'Minimal business downtime, dedicated IT equipment crating, server rack handling, and organized archive moving.',
    shortDescAr: 'نقل سريع بدون تعطيل لسير العمل، مع تغليف مخصص للأجهزة الإلكترونية وخوادم السيرفر والأرشيف الإداري.',
    fullDescEn: 'Engineered for seamless corporate transitions across Jeddah, Riyadh, and KSA. We handle sensitive electronics, multi-user workstations, executive conference suites, and confidential documentation boxes with tamper-evident seals.',
    fullDescAr: 'حلول لوجستية متطورة للشركات والمصارف والمؤسسات الحكومية والخاصة في جدة وكافة مدن المملكة. ننقل محطات العمل، خوادم الشبكات، قاعات الاجتماعات، وأرشيف الملفات مع ملصقات سرية وأكواد جرد دقيقة.',
    iconName: 'Briefcase',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    badgeEn: 'Weekend & Overnight Available',
    badgeAr: 'متاح عطلات نهاية الأسبوع ومساءً',
    featuresEn: [
      'Anti-static bubble wrap for PCs, monitors, and servers',
      'Color-coded department tagging & floor plan mapping',
      'Heavy safe and fireproof filing cabinet moving',
      'Flexible weekend and overnight execution for zero downtime',
      'Dedicated project manager and detailed inventory manifest'
    ],
    featuresAr: [
      'تغليف مضاد للشحنات الكهربائية لشاشات الكمبيوتر والخوادم',
      'نظام ألوان مرمز للأقسام لتفريغ سريع وفق المخطط المكتبي',
      'نقل الخزائن الحديدية الثقيلة وخزائن الملفات المصفحة',
      'تنفيذ العمل في عطلة نهاية الأسبوع لتجنب توقف نشاط الشركة',
      'مشرف مشروع مخصص مع كشوفات جرد دقيقة وموثقة'
    ]
  },
  {
    id: 'professional-packing',
    titleEn: '5-Layer Professional Packing',
    titleAr: 'تغليف احترافي 5 طبقات شامل المواد',
    shortDescEn: 'Military-grade packing with shockproof bubble rolls, 5-ply cartons, shrink wrap, and custom wooden crating.',
    shortDescAr: 'تغليف متقدم بمواد عالية الجودة: بابلز سميك، كراتين 5 طبقات، نايلون ستريتش حراري، وتفصيل صناديق خشبية.',
    fullDescEn: 'We treat packing as an exact science. From fragile crystal chandeliers and fine china to 85-inch OLED TVs, our multi-layer cushioning creates an impenetrable barrier against transit vibration, dust, and Saudi desert heat.',
    fullDescAr: 'نعتبر التغليف خط الدفاع الأول لحماية مقتنياتك. من أطقم الصيني والكريستال والتحف إلى شاشات التلفزيون الكبيرة، نوفر تغليفاً متعدد الطبقات يمتص الصدمات ويحمي تماماً من الغبار ورطوبة وحرارة الطريق.',
    iconName: 'Package',
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    badgeEn: 'Zero Breakage Guarantee',
    badgeAr: 'ضمان عدم الكسر',
    featuresEn: [
      'Heavy-duty 5-ply double-wall corrugated moving boxes',
      '80-micron high-density air bubble wrap',
      'Industrial shrink film against moisture & desert dust',
      'Custom wooden crating for delicate glass, art & marble',
      'Acid-free packing paper for dishes and kitchenware'
    ],
    featuresAr: [
      'كراتين كرتون مقوى 5 طبقات مضاعفة لتحمل الأوزان العالية',
      'بابلز هوائي سميك 80 ميكرون لامتصاص أعلى درجات الصدمات',
      'رولات نايلون ستريتش صناعي محكم لعزل الغبار والرطوبة',
      'صناديق خشبية مفصلة للرخام واللوحات الفنية والزجاج الحساس',
      'ورق تغليف ناعم خاص بأواني المطبخ والأطقم الفخارية'
    ]
  },
  {
    id: 'intercity-ksa-moving',
    titleEn: 'Kingdom-Wide Intercity Moving (All KSA)',
    titleAr: 'نقل عفش بين جميع مدن المملكة',
    shortDescEn: 'Daily covered Dyna and heavy trailer routes connecting Jeddah to Riyadh, Dammam, Madinah, Makkah, Tabuk & more.',
    shortDescAr: 'رحلات يومية بشاحنات دينا وتريلات مغلقة تربط جدة بالرياض، الدمام، المدينة، مكة، تبوك، والجنوب.',
    fullDescEn: 'Relocating to another city in Saudi Arabia? Our fleet of GPS-tracked, insulated long-haul Dyna trucks and high-capacity trailers provides express, climate-shielded transit from Jeddah to any destination in the Kingdom.',
    fullDescAr: 'هل تنتقل إلى مدينة أخرى داخل المملكة؟ أسطولنا من شاحنات الدينا المغلقة والتريلات المجهزة بنظام التتبع والبطانة الداخلية ينقل أثاثك بسرعة وأمان تام من جدة إلى الرياض، الدمام، القصيم، تبوك، وأبها.',
    iconName: 'Truck',
    imageUrl: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
    badgeEn: 'GPS Tracked Fleet',
    badgeAr: 'أسطول مجهز بأنظمة GPS',
    featuresEn: [
      'Insulated closed trucks protecting against highway heat',
      'Fast 24-48 hour delivery to Riyadh and Eastern Province',
      'Comprehensive cargo security and tied-down lashing straps',
      'Full dismantling in Jeddah and complete assembly at destination',
      'Transparent milestone updates via SMS & WhatsApp'
    ],
    featuresAr: [
      'شاحنات مغلقة ومبطنة تحمي الأثاث من حرارة وغبار الطرق السريعة',
      'توصيل سريع خلال 24 إلى 48 ساعة للرياض والمنطقة الشرقية',
      'تثبيت محكم بحبال وأحزمة أمان لمنع أي حركة أثناء القيادة',
      'فك كامل وتغليف في جدة مع إعادة التركيب الشامل في مدينة الوصول',
      'تحديثات فورية لموقع الشحنة عبر الواتساب والرسائل'
    ]
  },
  {
    id: 'crane-storage-solutions',
    titleEn: 'Hydraulic Winch Hoisting & Safe Storage',
    titleAr: 'أوناش رفع الأثاث والمستودعات المكيفة',
    shortDescEn: 'Hydraulic exterior cranes for high towers + secure, pest-controlled climate storage facilities in Jeddah.',
    shortDescAr: 'أوناش هيدروليكية لرفع وإنزال الأثاث الثقيل للأدوار العليا + مستودعات تخزين مكيفة ومحمية 24/7.',
    fullDescEn: 'For tight staircases and towering Jeddah apartment buildings, our hydraulic crane lifts elevate heavy sofas, grand pianos, and large glass tables directly through balconies. Plus, we offer flexible short and long-term secure warehousing.',
    fullDescAr: 'للمباني الشاهقة والسلالم الضيقة في عمارات وأبراج جدة، نوفر أوناش رفع هيدروليكية خارجية تصل حتى الدور 15 لرفع الكنب الكبير والأجهزة الحساسة عبر النوافذ والشرفات، بالإضافة لمستودعات تخزين آمنة ومكيفة.',
    iconName: 'ShieldCheck',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    badgeEn: 'Up to 15th Floor Reach',
    badgeAr: 'وصول حتى الدور الـ 15',
    featuresEn: [
      'High-capacity hydraulic external crane lifting',
      'Safe window & balcony intake by certified riggers',
      'Clean, dust-free & air-conditioned storage units in Jeddah',
      '24/7 CCTV surveillance and pest-controlled environment',
      'Flexible daily, monthly, or yearly storage contracts'
    ],
    featuresAr: [
      'أوناش هيدروليكية حديثة للأدوار العليا بأعلى معايير السلامة',
      'إنزال ورفع آمن للأثاث الضخم والرخام عبر الواجهات والشرفات',
      'مستودعات تخزين نظيفة، معقمة، ومكيفة لحماية الأخشاب والمفروشات',
      'حراسة ومراقبة بالكاميرات على مدار 24 ساعة ومكافحة حشرات دورية',
      'عقود تخزين مرنة (أسبوعي، شهري، سنوي) بأسعار تنافسية'
    ]
  }
];

export const INVENTORY_CATEGORIES: InventoryCategory[] = [
  {
    id: 'living_room',
    nameEn: 'Living Room & Majlis',
    nameAr: 'غرفة المعيشة والمجلس',
    icon: 'Sofa',
    items: [
      { id: 'sofa_3_seater', nameEn: '3-Seater Sofa / كنب ثلاثي', nameAr: 'كنب ثلاثي', volumeCbm: 1.5, requiresDisassembly: false, defaultPackingType: 'heavy_blanket' },
      { id: 'sofa_2_seater', nameEn: '2-Seater Sofa / كنب ثنائي', nameAr: 'كنب ثنائي', volumeCbm: 1.0, requiresDisassembly: false, defaultPackingType: 'heavy_blanket' },
      { id: 'armchair', nameEn: 'Single Armchair / كنب مفرد', nameAr: 'كرسي كنب مفرد', volumeCbm: 0.6, requiresDisassembly: false, defaultPackingType: 'heavy_blanket' },
      { id: 'l_shape_sofa', nameEn: 'L-Shaped Sectional / كنب زاوية L', nameAr: 'طقم كنب زاوية L', volumeCbm: 3.2, requiresDisassembly: true, defaultPackingType: 'heavy_blanket' },
      { id: 'arabic_majlis_set', nameEn: 'Full Arabic Majlis Set / مجلس عربي كامل', nameAr: 'طقم مجلس عربي كامل مع المساند', volumeCbm: 4.0, requiresDisassembly: false, defaultPackingType: 'heavy_blanket' },
      { id: 'tv_unit', nameEn: 'TV Console Unit / طاولة شاشة ومكتبة', nameAr: 'طاولة تلفزيون ووحدة أرفف', volumeCbm: 0.8, requiresDisassembly: true, defaultPackingType: 'standard' },
      { id: 'coffee_table', nameEn: 'Coffee / Center Table / طاولة وسط', nameAr: 'طاولة وسط زجاجية أو خشبية', volumeCbm: 0.5, requiresDisassembly: false, defaultPackingType: 'fragile' },
      { id: 'carpet_large', nameEn: 'Large Area Rug / سجادة كبيرة', nameAr: 'سجادة كبيرة فاخرة', volumeCbm: 0.4, requiresDisassembly: false, defaultPackingType: 'standard' }
    ]
  },
  {
    id: 'bedroom',
    nameEn: 'Bedrooms',
    nameAr: 'غرف النوم',
    icon: 'Bed',
    items: [
      { id: 'king_bed_set', nameEn: 'King Master Bed + Mattress / سرير ماستر مع مرتبة', nameAr: 'سرير ماستر كينج مع المرتبة', volumeCbm: 2.2, requiresDisassembly: true, defaultPackingType: 'heavy_blanket' },
      { id: 'queen_bed', nameEn: 'Queen / Single Bed / سرير مفرد', nameAr: 'سرير مفرد أو كوين مع المرتبة', volumeCbm: 1.4, requiresDisassembly: true, defaultPackingType: 'heavy_blanket' },
      { id: 'wardrobe_6_door', nameEn: '6-Door Wardrobe / دولاب ملابس 6 أبواب', nameAr: 'دولاب ملابس كبير 6 درف', volumeCbm: 3.5, requiresDisassembly: true, defaultPackingType: 'heavy_blanket' },
      { id: 'wardrobe_4_door', nameEn: '4-Door Wardrobe / دولاب ملابس 4 أبواب', nameAr: 'دولاب ملابس 4 درف', volumeCbm: 2.4, requiresDisassembly: true, defaultPackingType: 'heavy_blanket' },
      { id: 'dresser_mirror', nameEn: 'Dresser with Mirror / تسريحة مع مرايا', nameAr: 'تسريحة غرفة نوم مع مرآة', volumeCbm: 1.2, requiresDisassembly: true, defaultPackingType: 'fragile' },
      { id: 'nightstand', nameEn: 'Nightstand / كومودينو', nameAr: 'طاولة جانبية (كومودينو)', volumeCbm: 0.25, requiresDisassembly: false, defaultPackingType: 'standard' },
      { id: 'kids_bunk_bed', nameEn: 'Kids Bunk Bed / سرير أطفال دورين', nameAr: 'سرير أطفال طابقين خشب/حديد', volumeCbm: 2.8, requiresDisassembly: true, defaultPackingType: 'standard' }
    ]
  },
  {
    id: 'dining_kitchen',
    nameEn: 'Dining & Kitchen',
    nameAr: 'السفرة والمطبخ',
    icon: 'Utensils',
    items: [
      { id: 'dining_table_8', nameEn: '8-Chair Dining Table / طاولة طعام 8 كراسي', nameAr: 'طاولة طعام 8 مقاعد', volumeCbm: 2.6, requiresDisassembly: true, defaultPackingType: 'heavy_blanket' },
      { id: 'dining_table_6', nameEn: '6-Chair Dining Table / طاولة طعام 6 كراسي', nameAr: 'طاولة طعام 6 مقاعد', volumeCbm: 1.8, requiresDisassembly: true, defaultPackingType: 'heavy_blanket' },
      { id: 'china_cabinet', nameEn: 'Glass Buffet / دولاب بوفيه زجاجي', nameAr: 'بوفيه سفرة بواجهات زجاجية', volumeCbm: 1.8, requiresDisassembly: true, defaultPackingType: 'fragile' },
      { id: 'large_fridge', nameEn: 'Double Door Refrigerator / ثلاجة كبيرة', nameAr: 'ثلاجة كبيرة بابين', volumeCbm: 1.5, requiresDisassembly: false, defaultPackingType: 'heavy_blanket' },
      { id: 'cooking_range', nameEn: 'Cooking Range / Gas Oven / فرن غاز/كهرباء', nameAr: 'فرن غاز أو كهربائي كبير', volumeCbm: 0.8, requiresDisassembly: false, defaultPackingType: 'standard' },
      { id: 'washing_machine', nameEn: 'Washing Machine / غسالة ملابس', nameAr: 'غسالة ملابس أوتوماتيك', volumeCbm: 0.6, requiresDisassembly: false, defaultPackingType: 'standard' },
      { id: 'kitchen_cabinets', nameEn: 'Modular Kitchen Cabinets (Meter) / مطبخ جاهز (بالمتر)', nameAr: 'دواليب مطبخ تفصيل أو جاهز', volumeCbm: 3.0, requiresDisassembly: true, defaultPackingType: 'standard' }
    ]
  },
  {
    id: 'electronics_ac',
    nameEn: 'Electronics & ACs',
    nameAr: 'الأجهزة والمكيفات',
    icon: 'Tv',
    items: [
      { id: 'tv_75_plus', nameEn: 'Large 65-85" OLED TV / شاشة ذكية 65-85 بوصة', nameAr: 'شاشة تلفزيون 65-85 بوصة', volumeCbm: 0.6, requiresDisassembly: true, defaultPackingType: 'fragile' },
      { id: 'tv_55', nameEn: '50-55" TV / شاشة 50-55 بوصة', nameAr: 'شاشة تلفزيون 50-55 بوصة', volumeCbm: 0.4, requiresDisassembly: true, defaultPackingType: 'fragile' },
      { id: 'split_ac', nameEn: 'Split AC (Indoor + Outdoor) / مكيف سبليت', nameAr: 'مكيف سبليت (وحدة داخلية وخارجية)', volumeCbm: 0.8, requiresDisassembly: true, defaultPackingType: 'heavy_blanket' },
      { id: 'window_ac', nameEn: 'Window AC / مكيف شباك', nameAr: 'مكيف شباك', volumeCbm: 0.4, requiresDisassembly: true, defaultPackingType: 'standard' },
      { id: 'sound_system', nameEn: 'Home Theater / ساوند بار ومكبرات', nameAr: 'نظام مسرح منزلي وساوند بار', volumeCbm: 0.3, requiresDisassembly: false, defaultPackingType: 'fragile' }
    ]
  },
  {
    id: 'boxes_miscellaneous',
    nameEn: 'Cartons & Fragiles',
    nameAr: 'الصناديق والكراتين والأغراض الشخصية',
    icon: 'Package',
    items: [
      { id: 'kitchenware_box', nameEn: 'Fragile Kitchenware Box / كرتون أواني وصيني', nameAr: 'كرتون أواني مطبخ وأطقم زجاجية', volumeCbm: 0.12, requiresDisassembly: false, defaultPackingType: 'fragile' },
      { id: 'clothes_box', nameEn: 'Standard Clothes Carton / كرتون ملابس وبياضات', nameAr: 'كرتون ملابس ومفروشات', volumeCbm: 0.15, requiresDisassembly: false, defaultPackingType: 'box' },
      { id: 'wardrobe_hanging_box', nameEn: 'Wardrobe Hanging Box / صندوق تعليق ملابس', nameAr: 'صندوق كرتوني مخصص لتعليق الملابس', volumeCbm: 0.4, requiresDisassembly: false, defaultPackingType: 'box' },
      { id: 'chandelier', nameEn: 'Crystal Chandelier / ثريا كريستال فاخرة', nameAr: 'نجفة أو ثريا كريستال', volumeCbm: 0.5, requiresDisassembly: true, defaultPackingType: 'fragile' }
    ]
  }
];

export const PACKING_MATERIALS: PackingMaterial[] = [
  {
    id: 'bubble-wrap',
    nameEn: '80-Micron Heavy Bubble Wrap',
    nameAr: 'بابلز هوائي سميك 80 ميكرون',
    purposeEn: 'Impact absorption for glass, TV screens, luxury polished wood, and delicate chandeliers.',
    purposeAr: 'امتصاص الصدمات للشاشات، الزجاج، الخشب المصقول، والتحف الكريستالية.',
    specificationEn: 'Double-cushion air bubbles, puncture-resistant, antistatic coating.',
    specificationAr: 'فقاعات هوائية مزدوجة، مقاوم للتمزق، ومعالج ضد الشحنات الساكنة.',
    icon: 'Shield',
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80',
    badgeEn: 'Zero-Scratch Protection',
    badgeAr: 'حماية فائقة من الخدوش'
  },
  {
    id: '5-ply-carton',
    nameEn: 'Heavy Duty 5-Ply Corrugated Cartons',
    nameAr: 'كراتين مضلعة مقواة 5 طبقات',
    purposeEn: 'Load-bearing strength for heavy books, kitchen crockery, electronics, and archives.',
    purposeAr: 'تحمل الأوزان الثقيلة للأواني، الكتب، الأجهزة، والملفات دون انحناء.',
    specificationEn: 'Export grade 200 GSM kraft liner, stackable up to 6 units high.',
    specificationAr: 'ورق كرافت عالي الكثافة 200 جرام، قابل للرص حتى 6 مستويات بأمان.',
    icon: 'Box',
    imageUrl: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80',
    badgeEn: 'Export Quality',
    badgeAr: 'جودة تصدير معتمدة'
  },
  {
    id: 'stretch-film',
    nameEn: 'Industrial Stretch Film & Shrink Wrap',
    nameAr: 'نايلون ستريتش صناعي حراري',
    purposeEn: 'Moisture, rain, humidity, and fine Saudi sand/dust barrier during highway transit.',
    purposeAr: 'عزل تام للغبار والأتربة ورطوبة الطرق السريعة والأمطار.',
    specificationEn: '23-micron high tensile elasticity with self-adhesive cling.',
    specificationAr: 'مطاطية عالية 23 ميكرون والتصاق ذاتي محكم بدون ترك أثر غراء.',
    icon: 'Layers',
    imageUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=600&q=80',
    badgeEn: 'Dust & Humidity Proof',
    badgeAr: 'عازل للغبار والرطوبة'
  },
  {
    id: 'moving-blankets',
    nameEn: 'Quilted Padded Furniture Blankets',
    nameAr: 'بطانيات ومفروشات تبطين سميكة',
    purposeEn: 'Full envelope wrapping for sofas, wardrobes, dining chairs, and polished tables.',
    purposeAr: 'تغليف وتوسيد كنب المجالس والدواليب وطاولات الطعام أثناء التحميل والتنزيل.',
    specificationEn: 'Thick non-woven padded cotton fabric with double zig-zag stitching.',
    specificationAr: 'قماش قطني مبطن سميك بخياطة متينة متعددة الطبقات.',
    icon: 'Feather',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
    badgeEn: 'Damage Free Transit',
    badgeAr: 'حماية الأثاث الحساس'
  },
  {
    id: 'custom-crates',
    nameEn: 'Custom Wooden Crating',
    nameAr: 'صناديق وتطويق خشبي مخصص',
    purposeEn: 'Reinforced wood frame casing for natural marble slabs, fragile art, and 85"+ TVs.',
    purposeAr: 'حماية قصوى لطاولات الرخام الطبيعي، اللوحات الفنية الكبيرة، والشاشات العملاقة.',
    specificationEn: 'Heat-treated timber, foam-lined inner perimeter, screw-fastened.',
    specificationAr: 'خشب معالج حرارياً ومبطن بالفوم الداخلي ومثبت بمسامير أمان.',
    icon: 'Hammer',
    imageUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80',
    badgeEn: 'Ultimate Fragile Security',
    badgeAr: 'أقصى درجات الأمان'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    nameEn: 'Eng. Khalid Al-Otaibi',
    nameAr: 'م. خالد العتيبي',
    roleEn: 'Villa Owner',
    roleAr: 'مالك فيلا',
    locationEn: 'Jeddah (Al Rawdah) to Riyadh (Al Malqa)',
    locationAr: 'من جدة (حي الروضة) إلى الرياض (حي الملقا)',
    serviceTypeEn: 'Intercity Villa Relocation + Carpenter Service',
    serviceTypeAr: 'نقل فيلا بالكامل مع فك وتركيب نجارين',
    rating: 5,
    commentEn: 'Exceptional service! Moved our 5-bedroom villa from Jeddah to Riyadh. The carpenters disassembled our Italian bedroom sets and rebuilt them flawlessly. The closed Dyna trucks arrived right on schedule in Riyadh with zero damage.',
    commentAr: 'خدمة احترافية ترفع الرأس! تم نقل فيلا كاملة 5 غرف نوم من جدة للرياض. النجارون قاموا بفك وتركيب غرف النوم الإيطالية بدقة متناهية، والسيارات الدينا المغلقة وصلت في موعدها تماماً بدون أي خدش.',
    date: 'August 2026',
    verified: true,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-2',
    nameEn: 'Dr. Sarah Mansoor',
    nameAr: 'د. سارة منصور',
    roleEn: 'Consultant',
    roleAr: 'طبيبة استشارية',
    locationEn: 'Jeddah (Al Shatie) to Jeddah (Al Hamra)',
    locationAr: 'داخل جدة: من حي الشاطئ إلى حي الحمراء',
    serviceTypeEn: 'Apartment Move + 5-Layer Packing',
    serviceTypeAr: 'نقل شقة مع تغليف احترافي 5 طبقات',
    rating: 5,
    commentEn: 'Their 5-layer packing is incredible. All my crystal dining sets, glassware, and 75-inch OLED TV were packed with extreme care. The team arrived on time at 8:00 AM with clean trucks and polite staff. Highly recommended in Jeddah!',
    commentAr: 'التغليف عندهم صراحة مستوى عالمي. كل الأواني الكريستالية وأطقم الصيني وشاشة التلفزيون 75 بوصة غلفوها ببابلز وكراتين مقواة ولا انكسر أي شيء. الفريق وصل في وقته بالضبط وأخلاقهم ممتازة.',
    date: 'August 2026',
    verified: true,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-3',
    nameEn: 'Faisal Al-Zahrani',
    nameAr: 'فيصل الزهراني',
    roleEn: 'Operations Director',
    roleAr: 'مدير عمليات',
    locationEn: 'Jeddah to Dammam (Eastern Province)',
    locationAr: 'من جدة إلى الدمام والخبر',
    serviceTypeEn: 'Corporate Office Relocation (24 Workstations)',
    serviceTypeAr: 'نقل مقر شركة ومكاتب إدارية',
    rating: 5,
    commentEn: 'Relocated our entire regional office over the weekend. They tagged every server, monitor, and employee desk with coded labels. Everything was set up by Sunday morning with zero business downtime. Saad Packers are top tier in KSA.',
    commentAr: 'نقلنا مقر شركتنا خلال عطلة نهاية الأسبوع من جدة للدمام. تم ترقيم كافة الأجهزة وشاشات الكمبيوتر ومكاتب الموظفين بالألوان ووصلت ورُكبت بالكامل قبل بداية دوام الأحد بدون أي توقف للعمل.',
    date: 'July 2026',
    verified: true,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'pricing',
    questionEn: 'How are moving quotations and logistics planned in Jeddah and across KSA?',
    questionAr: 'كيف يتم تحديد خطة النقل وتقديم عروض الأسعار في جدة وكافة مدن المملكة؟',
    answerEn: 'We provide 100% custom, transparent quotations based on: 1) Volume of furniture and truck allocation (Dyna 4.5-Ton / heavy trailers), 2) Route distance between cities, 3) Floor levels & elevator access (or hydraulic winch crane if needed), and 4) Tailored services including master carpenter disassembly, AC technicians, and multi-layer packing materials.',
    answerAr: 'نقدم عروض أسعار وخطط نقل مخصصة وشفافة 100% بناءً على: 1) حجم الأثاث ونوع الشاحنات المطلوبة (دينا 4.5 طن أو تريلات شحن كبرى)، 2) مسافة الطريق بين المدن، 3) رقم الدور وتوفر المصعد أو الحاجة لـ ونش هيدروليكي، 4) الخدمات المطلوبة مثل فك وتركيب المطابخ والمكيفات ونوعية مواد التغليف الخماسي.'
  },
  {
    id: 'faq-2',
    category: 'packing',
    questionEn: 'Do you provide professional carpenters (Najjar) for bedrooms and kitchens?',
    questionAr: 'هل توفرون نجارين وفنيين متخصصين لفك وتركيب غرف النوم والمطابخ؟',
    answerEn: 'Yes! We have certified, highly skilled master carpenters experienced with all furniture brands including IKEA, Home Centre, Italian luxury suites, Turkish modular designs, Chinese bedrooms, and custom modular kitchens. We also provide AC technicians for split and window units.',
    answerAr: 'نعم بالتأكيد! نوفر نجارين محترفين ذوي خبرة طويلة في فك وتركيب جميع موديلات غرف النوم (ايكيا، تركي، إيطالي، صيني، وطني) ودواليب المطابخ وتعديل الرخام، بالإضافة لفنيين لفك وتركيب مكيفات السبليت والشباك.'
  },
  {
    id: 'faq-3',
    category: 'intercity',
    questionEn: 'How long does transit take from Jeddah to Riyadh, Dammam, or other cities?',
    questionAr: 'كم يستغرق نقل الأثاث من جدة إلى الرياض أو الدمام أو المدن الأخرى؟',
    answerEn: 'For moves within Jeddah and nearby Makkah, transit is completed same-day within 3 to 6 hours. For intercity moves like Jeddah to Riyadh or Medina, we offer 24-hour express delivery. For Jeddah to Dammam / Eastern Province or Tabuk, transit takes 36 to 48 hours in our closed, insulated long-haul trucks.',
    answerAr: 'داخل جدة ومكة المكرمة يتم النقل في نفس اليوم خلال 3 إلى 6 ساعات. أما النقل بين المدن (مثل من جدة إلى الرياض أو المدينة المنورة) فيتم التوصيل خلال 24 ساعة. وإلى الدمام والمنطقة الشرقية وتبوك يستغرق النقل بين 36 إلى 48 ساعة بشاحناتنا المغلقة والمجهزة.'
  },
  {
    id: 'faq-4',
    category: 'safety',
    questionEn: 'What guarantees do you offer against scratches or accidental damage?',
    questionAr: 'ما هي الضمانات التي تقدمونها ضد الخدوش أو التلفيات؟',
    answerEn: 'We provide a 100% Zero-Damage guarantee. We wrap fragile items in 5 layers (bubble wrap + foam + corrugated carton + shrink film), use padded blankets for all wooden furniture, and transport everything in fully enclosed, padded Dyna trucks secured with heavy-duty cargo straps.',
    answerAr: 'نقدم ضماناً شاملاً لسلامة المنقولات 100%. نستخدم التغليف الخماسي للقطع الحساسة، وبطانيات التوسيد لجميع قطع الخشب والمجالس، وشاحنات دينا مغلقة ومبطنة مزودة بأحزمة تثبيت لمنع أي احتكاك أثناء حركة السيارة على الطريق.'
  },
  {
    id: 'faq-5',
    category: 'pricing',
    questionEn: 'Do you offer a free on-site survey / inspection in Jeddah?',
    questionAr: 'هل توفرون معاينة مجانية للمنزل أو المكتب في جدة قبل النقل؟',
    answerEn: 'Yes! We offer 100% free, no-obligation inspection visits by our logistics supervisor anywhere in Jeddah, or an instant virtual video quote via WhatsApp to inspect items and provide a tailored, accurate quote with no hidden fees.',
    answerAr: 'نعم! نوفر خدمة المعاينة المجانية في أي مكان داخل مدينة جدة بدون أي التزام، أو معاينة فورية عبر تصوير الفيديو على الواتساب لتقييم حجم الأثاث وتقديم خطة وعرض دقيق وشامل لكافة الاحتياجات بدون أي رسوم خفية.'
  }
];

export const COMPANY_CONTACTS = {
  nameEn: 'Saad Packers & Movers KSA',
  nameAr: 'سعد لنقل وتغليف الأثاث - المملكة العربية السعودية',
  taglineEn: 'Premier Home Shifting, Furniture Moving & Professional Packing across Jeddah and All KSA',
  taglineAr: 'رواد نقل العفش المنزلي، الأثاث المكتبي، والتغليف الاحترافي في جدة وكافة مدن المملكة',
  phoneDisplay: '0575771358',
  phoneCall: '+966575771358',
  whatsappNumber: '966575771358',
  whatsappLink: 'https://wa.me/966575771358?text=Hello%20Saad%20Packers%20Movers,%20I%20would%20like%20to%20get%20a%20moving%20survey%20and%20quote.',
  whatsappLinkAr: 'https://wa.me/966575771358?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%B3%D8%B9%D8%AF%20%D9%84%D9%86%D9%82%D9%84%20%D8%A7%D9%84%D8%B9%D9%81%D8%B4%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%B7%D9%84%D8%A8%20%D9%85%D8%B9%D8%A7%D9%8A%D9%86%D8%A9%20%D9%88%D8%B9%D8%B1%D8%B6%20%D8%B3%D8%B9%D8%B1%20%D9%86%D9%82%D9%84%20%D9%88%D8%AA%D8%BA%D9%84%D9%8A%D9%81',
  email: 'info@saadpackersksa.com',
  headquartersAddressEn: 'Al Rawdah District, Prince Mohammed Bin Abdulaziz (Tahlia) St, Jeddah, Saudi Arabia',
  headquartersAddressAr: 'حي الروضة، طريق الأمير محمد بن عبدالعزيز (التحلية)، جدة، المملكة العربية السعودية',
  riyadhBranchEn: 'Al Olaya District, King Fahd Road, Riyadh',
  riyadhBranchAr: 'حي العليا، طريق الملك فهد، الرياض',
  dammamBranchEn: 'Al Faisaliyah District, King Abdulaziz St, Dammam',
  dammamBranchAr: 'حي الفيصلية، طريق الملك عبدالعزيز، الدمام',
  crNumber: 'CR 4030281944 (Saudi Ministry of Commerce Licensed)',
  crNumberAr: 'سجل تجاري رقم 4030281944 - معتمد ومرخص من وزارة التجارة',
  workingHoursEn: '24/7 Service & Emergency Relocation Hotline',
  workingHoursAr: 'خدمة متواصلة على مدار 24 ساعة طوال أيام الأسبوع'
};

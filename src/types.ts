export type Language = 'en' | 'ar';

export interface CityLocation {
  id: string;
  nameEn: string;
  nameAr: string;
  regionEn: string;
  regionAr: string;
  distanceFromJeddahKm: number;
  estTransitHours: string;
  isMainHub: boolean;
  popularDistrictsEn?: string[];
  popularDistrictsAr?: string[];
}

export interface ServiceItem {
  id: string;
  titleEn: string;
  titleAr: string;
  shortDescEn: string;
  shortDescAr: string;
  fullDescEn: string;
  fullDescAr: string;
  iconName: string;
  imageUrl?: string;
  featuresEn: string[];
  featuresAr: string[];
  badgeEn?: string;
  badgeAr?: string;
}

export interface InventoryCategory {
  id: string;
  nameEn: string;
  nameAr: string;
  icon: string;
  items: {
    id: string;
    nameEn: string;
    nameAr: string;
    volumeCbm: number;
    requiresDisassembly: boolean;
    defaultPackingType: 'standard' | 'fragile' | 'heavy_blanket' | 'box';
  }[];
}

export interface Testimonial {
  id: string;
  nameEn: string;
  nameAr: string;
  roleEn: string;
  roleAr: string;
  locationEn: string;
  locationAr: string;
  serviceTypeEn: string;
  serviceTypeAr: string;
  rating: number;
  commentEn: string;
  commentAr: string;
  date: string;
  verified: boolean;
  avatarUrl?: string;
}

export interface PackingMaterial {
  id: string;
  nameEn: string;
  nameAr: string;
  purposeEn: string;
  purposeAr: string;
  specificationEn: string;
  specificationAr: string;
  icon: string;
  imageUrl?: string;
  badgeEn: string;
  badgeAr: string;
}

export interface FaqItem {
  id: string;
  questionEn: string;
  questionAr: string;
  answerEn: string;
  answerAr: string;
  category: 'pricing' | 'packing' | 'intercity' | 'safety';
}

export interface BookingRecord {
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
  status: 'SURVEY_SCHEDULED' | 'PACKING_SCHEDULED' | 'IN_TRANSIT' | 'DELIVERED_ASSEMBLED';
  createdAt: string;
}

export interface QuoteCalculationResult {
  basePrice: number;
  distanceKm: number;
  transitCost: number;
  carpenterCost: number;
  packingCost: number;
  acTechnicianCost: number;
  storageCost: number;
  craneLiftCost: number;
  totalEstimatedMin: number;
  totalEstimatedMax: number;
  recommendedTruckEn: string;
  recommendedTruckAr: string;
  estDurationEn: string;
  estDurationAr: string;
}

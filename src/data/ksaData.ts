import { CityLocation, ServiceItem, InventoryCategory, Testimonial, PackingMaterial, FaqItem } from '../types';
import { WORK_IMAGES } from '../assets/images';

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
    titleEn: 'Home Shifting',
    titleAr: 'نقل العفش المنزلي والسكني',
    shortDescEn: 'Complete household moves across town or between cities — packed, transported, and unpacked with care.',
    shortDescAr: 'نقل كامل للمنازل والفلل والشقق داخل جدة وبين المدن — تغليف احترافي ونقل وتركيب بعناية فائقة.',
    fullDescEn: 'Complete household moves across town or between cities — packed, transported, and unpacked with care. Our residential team brings specialized covered Dyna trucks, heavy furniture blankets, and careful hands to ensure your whole home is moved smoothly.',
    fullDescAr: 'نقل كامل للمنازل والفلل والشقق داخل جدة وبين مدن المملكة مع ضمان عدم الخدش، وترقيم الكراتين، وحماية شاملة للأثاث والمفروشات.',
    iconName: 'Home',
    imageUrl: WORK_IMAGES.residentialHomeShifting,
    badgeEn: 'Popular Choice',
    badgeAr: 'الخيار الأكثر طلباً',
    featuresEn: [
      'Disassembly & assembly of all bedroom furniture',
      'Protective bubble & carton wrapping',
      'Covered and cushioned Dyna trucks',
      'Clean placement in your new home'
    ],
    featuresAr: [
      'فك وتركيب كافة غرف النوم والأثاث',
      'تغليف بالبابلز والكرتون المقوى',
      'شاحنات دينا مغلقة ومبطنة',
      'إعادة ترتيب الأثاث في المنزل الجديد'
    ]
  },
  {
    id: 'office-relocation',
    titleEn: 'Office Relocation',
    titleAr: 'نقل المكاتب والشركات',
    shortDescEn: 'Minimal-downtime office moves: workstations, files, and IT relocated while your team stays focused.',
    shortDescAr: 'نقل مكاتب وشركات بدون تعطيل للعمل: محطات العمل، الملفات، والأجهزة الإلكترونية مع الحفاظ على تركيز فريقك.',
    fullDescEn: 'Minimal-downtime corporate and commercial moves: workstations, confidential files, server units, and IT gear safely transported and set up, allowing your business to operate without interruption.',
    fullDescAr: 'نقل سريع واحترافي للشركات والمؤسسات والمكاتب الإدارية في جدة وكافة أنحاء المملكة مع الحفاظ على سرية الملفات وسلامة الحواسيب وشبكات السيرفر.',
    iconName: 'Briefcase',
    imageUrl: WORK_IMAGES.officeRelocation,
    badgeEn: 'Zero Downtime',
    badgeAr: 'بدون تعطيل للعمل',
    featuresEn: [
      'Anti-static packing for IT equipment & screens',
      'Organized department and desk labeling',
      'Weekend and overnight scheduling options',
      'Filing cabinet and heavy safe transport'
    ],
    featuresAr: [
      'تغليف مخصص للإلكترونيات والشاشات',
      'ترقيم دقيق لكل مكتب وقسم إداري',
      'مواعيد مرنة في عطلة نهاية الأسبوع',
      'نقل الخزائن الحديدية والملفات'
    ]
  },
  {
    id: 'dabbab-dyna-local-transport',
    titleEn: 'Dabbab & Dyna Local Transport (24/7 Service)',
    titleAr: 'دباب ودينا لنقل العفش والتوصيل المحلي (خدمة 24/7)',
    shortDescEn: 'Dabbab & Dyna available for local transport — call me anytime 24/7 service for local transport across all Jeddah districts.',
    shortDescAr: 'دباب ودينا متوفر لنقل وتوصيل العفش والبضائع محلياً — اتصل بنا في أي وقت على مدار 24/7 لنقل سريع وآمن.',
    fullDescEn: 'Fast and flexible Dabbab mini-trucks and closed Dyna vehicles on standby 24/7 for swift local furniture transport, single items, urgent appliance delivery, bedroom sets, and quick city shifting anywhere across Jeddah. Call me anytime day or night for immediate dispatch.',
    fullDescAr: 'أسطول دباب ودينا جاهز ومتاح على مدار 24 ساعة طوال أيام الأسبوع للنقل والتوصيل المحلي السريع داخل جدة. مثالي لنقل الغرف الفردية، الأجهزة الكهربائية، الأثاث المنزلي، والبضائع مع إمكانية توفير عمالة تحميل وتنزيل وتغليف حسب الطلب. اتصل بنا في أي وقت.',
    iconName: 'Truck',
    imageUrl: WORK_IMAGES.dabbabDynaLocal,
    badgeEn: '24/7 Fast Transport',
    badgeAr: 'خدمة سريعة 24/7',
    featuresEn: [
      'Dabbab & Dyna available for local transport immediately',
      '24/7 Service — call me anytime day or night',
      'Ideal for single furniture pieces, rooms, boxes & urgent shifting',
      'Fast doorstep pickup & careful local delivery across Jeddah'
    ],
    featuresAr: [
      'دباب ودينا متوفر فوراً للنقل والتوصيل المحلي',
      'خدمة متاحة 24/7 — اتصل بنا في أي وقت ليلاً أو نهاراً',
      'مثالي لنقل الغرف الفردية، الكراتين، الأجهزة والنقل المستعجل',
      'وصول سريع عند بابك ونقل آمن إلى أي حي في جدة'
    ]
  },
  {
    id: 'furniture-moving-relocation-ksa',
    titleEn: 'Furniture Moving & Relocation (Local & All Over KSA)',
    titleAr: 'خدمات نقل وترحيل الأثاث (محلياً وفي كافة أنحاء المملكة)',
    shortDescEn: 'Comprehensive furniture moving and relocation services across Jeddah and all cities in Saudi Arabia — careful dismantling, secure loading, and doorstep delivery.',
    shortDescAr: 'خدمات متكاملة لنقل وترحيل الأثاث والعفش محلياً في جدة ولكافة مدن ومناطق المملكة — فك وتركيب وتغليف احترافي وتسليم مباشر عند بابك.',
    fullDescEn: 'Specialized furniture moving and relocation services tailored for local city moves in Jeddah and intercity routes across Saudi Arabia (Riyadh, Makkah, Madinah, Dammam, Khobar, Taif, Yanbu, Abha). Our certified moving crews handle delicate antiques, heavy luxury bedroom sets, majlis, dining tables, and large home furnishings using shock-absorbent multi-layer packing, modern covered Dyna trucks, and careful hands.',
    fullDescAr: 'خدمات متخصصة في نقل وترحيل الأثاث والعفش المنزلي والمكتبي داخل جدة وكافة أنحاء المملكة العربية السعودية (الرياض، مكة، المدينة، الدمام، الخبر، الطائف، ينبع، أبها). يتولى فريقنا المحترف فك وتركيب الأثاث الفاخر، غرف النوم، المجالس، والأجهزة الحساسة مع التغليف الحراري الخماسي واستخدام شاحنات دينا مغلقة ومبطنة تضمن وصول كل قطعة بأمان تام.',
    iconName: 'Truck',
    imageUrl: WORK_IMAGES.furnitureRelocationKsa,
    badgeEn: 'Local & All Over KSA',
    badgeAr: 'محلياً وكافة أنحاء المملكة',
    featuresEn: [
      'Local moves across all Jeddah districts & neighborhoods',
      'Express intercity routes to Riyadh, Dammam, Mecca & all KSA',
      'Full dismantling, wrapping & precision reassembly',
      '100% Damage-free transit & insurance coverage'
    ],
    featuresAr: [
      'تغطية محلية شاملة لكافة أحياء ومخططات جدة',
      'رحلات منتظمة وسريعة إلى الرياض، الشرقية، مكة وجميع مناطق المملكة',
      'فك وتغليف وتركيب دقيق لجميع أنواع الأثاث والمفروشات',
      'ضمان شامل بنسبة 100% ضد الخدوش والكسور'
    ]
  },
  {
    id: 'furniture-moving',
    titleEn: 'Furniture Moving',
    titleAr: 'نقل الأثاث والعفش الثقيل',
    shortDescEn: 'Heavy and fragile furniture moved safely with protective wrapping, the right equipment, and skilled hands.',
    shortDescAr: 'نقل الأثاث الثقيل والحساس بأمان تام مع التغليف الواقي والمعدات المناسبة والأيدي المدربة.',
    fullDescEn: 'Heavy and fragile furniture moved safely with protective wrapping, the right equipment, and skilled hands. From sofas, luxury dining tables, and marble pieces to heavy consoles.',
    fullDescAr: 'نقل الأثاث الثقيل والقطع الحساسة كالمجالس الكبيرة وطاولات الطعام الرخامية والزجاجية باستخدام بطانيات التوسيد وأحزمة الرفع المتينة.',
    iconName: 'Truck',
    imageUrl: WORK_IMAGES.furnitureWrapping,
    badgeEn: 'Careful Handling',
    badgeAr: 'عناية فائقة',
    featuresEn: [
      'Heavy padded moving blankets',
      'Corner guards and stretch film seals',
      'Straps and hydraulic equipment for heavy items',
      'Precise room-to-room positioning'
    ],
    featuresAr: [
      'بطانيات تبطين سميكة لحماية الخشب',
      'حماية زوايا الأثاث بالنايلون الحراري',
      'أحزمة ومعدات خاصة للأوزان الثقيلة',
      'وضع كل قطعة في مكانها المحدد'
    ]
  },
  {
    id: 'professional-packing',
    titleEn: 'Professional Packing',
    titleAr: 'التغليف الاحترافي الشامل',
    shortDescEn: 'Industry-grade boxes, bubble wrap, and custom crating for glassware, art, electronics, and valuables.',
    shortDescAr: 'كراتين مضلعة عالية الجودة، بابلز هوائي سميك، وصناديق مخصصة للزجاجيات واللوحات الفنية والإلكترونيات.',
    fullDescEn: 'Industry-grade boxes, bubble wrap, and custom crating for glassware, art, electronics, and valuables. Multi-barrier protection engineered to prevent any scratches or transit damage.',
    fullDescAr: 'تغليف احترافي عالي الجودة بكراتين 5 طبقات، رولات بابلز هوائية، وورق تغليف للأواني والصيني لضمان حماية 100% ضد الكسر والخدش.',
    iconName: 'Package',
    imageUrl: WORK_IMAGES.fragilePacking,
    badgeEn: 'Zero Breakage',
    badgeAr: 'ضمان عدم الكسر',
    featuresEn: [
      'Heavy-duty 5-ply corrugated carton boxes',
      'High-density shockproof air bubble wrap',
      'Shrink wrap protection against dust and humidity',
      'Custom protection for art, mirrors & chandeliers'
    ],
    featuresAr: [
      'كراتين مقواة 5 طبقات مضاعفة',
      'بابلز هوائي سميك لامتصاص الصدمات',
      'نايلون ستريتش لعزل الأتربة والرطوبة',
      'تغليف خاص للتحف والثريات والمرايا'
    ]
  },
  {
    id: 'loading-unloading',
    titleEn: 'Loading & Unloading',
    titleAr: 'التحميل والتنزيل بالعمالة المدربة',
    shortDescEn: 'A trained crew with trolleys, ramps, and straps loads and unloads your goods without a scratch.',
    shortDescAr: 'طاقم عمل مدرب مع عربات ترولي ومزالق وأحزمة تحميل ينقل وينزل عفشك بدون أي خدش.',
    fullDescEn: 'A trained moving crew equipped with heavy-duty trolleys, ramps, and lashing straps loads and unloads your goods with utmost care, navigating narrow staircases and elevators effortlessly.',
    fullDescAr: 'عمالة متخصصة ومحترفة في رفع وتنزيل وترتيب العفش داخل الشاحنات بأمان تام وباستخدام أحدث معدات المناولة والرافعات.',
    iconName: 'ShieldCheck',
    imageUrl: WORK_IMAGES.hero,
    badgeEn: 'Trained Movers',
    badgeAr: 'عمالة ماهرة',
    featuresEn: [
      'Heavy-duty transport trolleys and dollies',
      'Secure truck loading & weight balance',
      'Safe stair and elevator navigation',
      'Zero scuffs on walls or doorframes'
    ],
    featuresAr: [
      'عربات نقل حديثة وأحزمة تثبيت قوية',
      'ترتيب حمولة الشاحنة بتوازن هندسي',
      'حماية جدران ومصاعد المبنى من الاحتكاك',
      'تنزيل وترتيب منظم وسريع'
    ]
  },
  {
    id: 'intercity-transport',
    titleEn: 'Intercity Transport',
    titleAr: 'نقل العفش بين مدن المملكة',
    shortDescEn: 'Reliable long-distance transport with careful route planning, secure loads, and on-time delivery.',
    shortDescAr: 'نقل موثوق لمسافات طويلة بين كافة المدن مع تخطيط دقيق للطريق وتأمين الحمولة والالتزام بالوقت.',
    fullDescEn: 'Reliable long-distance transport with careful route planning, secure loads, and on-time delivery across Jeddah, Mecca, Medina, Riyadh, Dammam, Al Khobar, Taif, Yanbu, Abha, and all over KSA.',
    fullDescAr: 'رحلات منتظمة وسريعة بشاحنات دينا وتريلات مغلقة تربط جدة بالرياض، الدمام، مكة، المدينة، تبوك، والمنطقة الجنوبية مع التوصيل بالموعد المحدد.',
    iconName: 'Truck',
    imageUrl: WORK_IMAGES.intercityTransport,
    badgeEn: 'All Over KSA',
    badgeAr: 'كافة مدن المملكة',
    featuresEn: [
      'Insulated closed trucks against highway dust & heat',
      'Express 24-48 hour intercity transit schedules',
      'Tight tied-down straps & cargo anchoring',
      'Full dismantling in origin & assembly at destination'
    ],
    featuresAr: [
      'شاحنات مبطنة ومعزولة ضد حرارة وغبار الطريق',
      'توصيل سريع خلال 24 إلى 48 ساعة بين المدن',
      'تثبيت محكم للبضائع بأحزمة أمان متينة',
      'فك الأثاث في مدينة الانطلاق وتركيبه عند الوصول'
    ]
  },
  {
    id: 'wardrobe-uninstall-refix',
    titleEn: 'Wardrobe Uninstall & Refix',
    titleAr: 'فك وتركيب وتعديل الدواليب والخزائن',
    shortDescEn: 'Cupboards and wardrobes carefully dismantled, moved, and refitted in your new place — doors, rails, and shelves exactly where they should be.',
    shortDescAr: 'فك دواليب وخزائن الملابس بعناية ونقلها وإعادة تركيبها في منزلك الجديد — الأبواب والمجاري والأرفف في مكانها الصحيح تماماً.',
    fullDescEn: 'Cupboards, wardrobes, and closets carefully dismantled, moved, and refitted in your new place — sliding doors, guide rails, hinges, and shelves adjusted and aligned exactly where they should be by professional carpenters.',
    fullDescAr: 'نجارون محترفون لفك وتركيب وضبط دواليب الملابس الكبيرة والسحابة وخزائن ايكيا والمطابخ مع ضبط المفصلات والمجاري والأرفف لتعود كالجديدة تماماً.',
    iconName: 'Wrench',
    imageUrl: WORK_IMAGES.wardrobeAssembly,
    badgeEn: 'Expert Carpenters',
    badgeAr: 'نجارون خبراء',
    featuresEn: [
      'IKEA, Home Centre, and luxury Italian wardrobe specialists',
      'Sliding door alignment and track recalibration',
      'All screws and hardware labeled in secure pouches',
      'Custom shelf and cupboard adjustments'
    ],
    featuresAr: [
      'خبرة في دواليب ايكيا وهوم سنتر والمستورد',
      'وزن وضبط الأبواب السحابة ومجاري الأدراج',
      'حفظ وترقيم كافة المسامير والإكسسوارات',
      'تعديل وتثبيت الأرفف بدقة متناهية'
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
    imageUrl: WORK_IMAGES.fragilePacking,
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
    imageUrl: WORK_IMAGES.residentialHomeShifting,
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
    imageUrl: WORK_IMAGES.furnitureWrapping,
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
    imageUrl: WORK_IMAGES.furnitureWrapping,
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
    imageUrl: WORK_IMAGES.wardrobeAssembly,
    badgeEn: 'Ultimate Fragile Security',
    badgeAr: 'أقصى درجات الأمان'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    nameEn: 'Ahmad Al-Harbi',
    nameAr: 'أحمد الحربي',
    roleEn: 'Home Shifting · Jeddah',
    roleAr: 'نقل عفش منزلي · جدة',
    locationEn: 'Jeddah to Riyadh',
    locationAr: 'من جدة إلى الرياض',
    serviceTypeEn: 'Home Shifting',
    serviceTypeAr: 'نقل عفش منزلي',
    rating: 5,
    commentEn: 'The team packed our whole flat in Jeddah in a day and everything arrived safely in Riyadh. Genuinely stress-free from start to finish.',
    commentAr: 'الفريق قام بتغليف ونقل كامل شقتنا في جدة خلال يوم واحد ووصل كل شيء بأمان إلى الرياض. تجربة مريحة وخالية من التوتر من البداية للنهاية.',
    date: 'August 2026',
    verified: true
  },
  {
    id: 'test-2',
    nameEn: 'Salem Al-Otaibi',
    nameAr: 'سالم العتيبي',
    roleEn: 'Office Relocation · Riyadh',
    roleAr: 'نقل مكاتب · الرياض',
    locationEn: 'Corporate Move · Riyadh',
    locationAr: 'نقل مقر شركة · الرياض',
    serviceTypeEn: 'Office Relocation',
    serviceTypeAr: 'نقل مكاتب وشركات',
    rating: 5,
    commentEn: 'They moved our office over a weekend without a single day of downtime. Professional, punctual, and well-organised throughout.',
    commentAr: 'نقلوا مكتبنا بالكامل خلال عطلة نهاية الأسبوع دون أي يوم توقف للعمل. احترافية والتزام دقيق بالمواعيد وتنظيم ممتاز طوال الوقت.',
    date: 'August 2026',
    verified: true
  },
  {
    id: 'test-3',
    nameEn: 'Noura Al-Ghamdi',
    nameAr: 'نورة الغامدي',
    roleEn: 'Furniture Moving · Jeddah',
    roleAr: 'نقل أثاث · جدة',
    locationEn: 'Jeddah Local Move',
    locationAr: 'نقل محلي داخل جدة',
    serviceTypeEn: 'Furniture Moving',
    serviceTypeAr: 'نقل أثاث ومقتنيات',
    rating: 5,
    commentEn: 'Fragile items, the piano, everything handled with real care right here in Jeddah. A fair price and right on time — we’d book them again without a second thought.',
    commentAr: 'القطع الزجاجية والبيانو وكل الأثاث تم التعامل معه بعناية فائقة في جدة. سعر عادل ووصول بالموعد — سنحجز معهم مرة أخرى بالتأكيد.',
    date: 'July 2026',
    verified: true
  },
  {
    id: 'test-4',
    nameEn: 'Fahad Al-Zahrani',
    nameAr: 'فهد الزهراني',
    roleEn: 'Intercity Transport · Mecca',
    roleAr: 'نقل بين المدن · مكة المكرمة',
    locationEn: 'Jeddah to Mecca',
    locationAr: 'من جدة إلى مكة المكرمة',
    serviceTypeEn: 'Intercity Transport',
    serviceTypeAr: 'نقل بين المدن',
    rating: 5,
    commentEn: 'Moved our whole family home from Jeddah to Mecca in one smooth day. The crew was polite, quick, and nothing was so much as scratched.',
    commentAr: 'نقلوا منزل عائلتنا بالكامل من جدة إلى مكة المكرمة في يوم واحد سلس. الطاقم خلوق وسريع ولم يتعرض أي شيء لأي خدش.',
    date: 'July 2026',
    verified: true
  },
  {
    id: 'test-5',
    nameEn: 'Reem Al-Shehri',
    nameAr: 'ريم الشهري',
    roleEn: 'Home Shifting · Dammam',
    roleAr: 'نقل منزلي · الدمام',
    locationEn: 'Jeddah to Dammam',
    locationAr: 'من جدة إلى الدمام',
    serviceTypeEn: 'Home Shifting',
    serviceTypeAr: 'نقل منزلي وتغليف',
    rating: 5,
    commentEn: 'From the first call to the last box, everything went exactly as promised. Clear pricing, careful packing, and the furniture placed exactly where we wanted.',
    commentAr: 'من أول مكالمة وحتى آخر كرتون، تم كل شيء كما وُعد بالضبط. أسعار واضحة وتغليف دقيق وترتيب الأثاث في المكان الذي طلبناه بالضبط.',
    date: 'June 2026',
    verified: true
  },
  {
    id: 'test-6',
    nameEn: 'Khalid Al-Qahtani',
    nameAr: 'خالد القحطاني',
    roleEn: 'Professional Packing · Yanbu',
    roleAr: 'تغليف احترافي · ينبع',
    locationEn: 'Jeddah to Yanbu',
    locationAr: 'من جدة إلى ينبع',
    serviceTypeEn: 'Professional Packing',
    serviceTypeAr: 'تغليف احترافي',
    rating: 5,
    commentEn: 'I’ve never seen packing like this. Delicate electronics and glass arrived in perfect condition all the way to Yanbu. Worth every riyal.',
    commentAr: 'لم أشاهد تغليفاً بهذه الجودة من قبل. الأجهزة الحساسة والزجاج وصلت بحالة ممتازة حتى ينبع. يستحق كل ريال.',
    date: 'June 2026',
    verified: true
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'pricing',
    questionEn: 'How are moving quotations and logistics planned in Jeddah and across KSA?',
    questionAr: 'كيف يتم تحديد خطة النقل وتقديم عروض الأسعار في جدة وكافة مدن المملكة؟',
    answerEn: 'We provide 100% custom, transparent quotations based on: 1) Volume of furniture and truck allocation, 2) Route distance between cities, 3) Floor levels & elevator access, and 4) Tailored services including master carpenter disassembly, AC technicians, and multi-layer packing materials.',
    answerAr: 'نقدم عروض أسعار وخطط نقل مخصصة وشفافة 100% بناءً على: 1) حجم الأثاث ونوع الشاحنات المطلوبة، 2) مسافة الطريق بين المدن، 3) رقم الدور وتوفر المصعد، 4) الخدمات المطلوبة مثل فك وتركيب المطابخ والمكيفات ونوعية مواد التغليف.'
  },
  {
    id: 'faq-2',
    category: 'packing',
    questionEn: 'Do you provide professional carpenters for wardrobes, bedrooms and kitchens?',
    questionAr: 'هل توفرون نجارين وفنيين متخصصين لفك وتركيب الدواليب والمطابخ؟',
    answerEn: 'Yes! We have certified, highly skilled master carpenters experienced with all furniture brands including IKEA, Home Centre, Italian luxury suites, Turkish modular designs, Chinese bedrooms, and custom modular kitchens.',
    answerAr: 'نعم بالتأكيد! نوفر نجارين محترفين ذوي خبرة طويلة في فك وتركيب جميع موديلات غرف النوم (ايكيا، تركي، إيطالي، صيني، وطني) ودواليب المطابخ وتعديل الرخام.'
  },
  {
    id: 'faq-3',
    category: 'intercity',
    questionEn: 'How long does transit take from Jeddah to Riyadh, Dammam, or other cities?',
    questionAr: 'كم يستغرق نقل الأثاث من جدة إلى الرياض أو الدمام أو المدن الأخرى؟',
    answerEn: 'For moves within Jeddah and nearby Makkah, transit is completed same-day within 3 to 6 hours. For intercity moves like Jeddah to Riyadh or Medina, we offer 24-hour express delivery. For Jeddah to Dammam or Yanbu, transit takes 24 to 48 hours.',
    answerAr: 'داخل جدة ومكة المكرمة يتم النقل في نفس اليوم خلال 3 إلى 6 ساعات. أما النقل بين المدن (مثل من جدة إلى الرياض أو المدينة المنورة أو ينبع) فيتم التوصيل خلال 24 إلى 48 ساعة.'
  },
  {
    id: 'faq-4',
    category: 'safety',
    questionEn: 'What guarantees do you offer against scratches or accidental damage?',
    questionAr: 'ما هي الضمانات التي تقدمونها ضد الخدوش أو التلفيات؟',
    answerEn: 'We provide a comprehensive safety guarantee. We wrap fragile items in multi-layer cushioning, use padded blankets for all furniture, and transport everything in fully enclosed, padded Dyna trucks secured with heavy-duty cargo straps.',
    answerAr: 'نقدم ضماناً شاملاً لسلامة المنقولات. نستخدم التغليف متعدد الطبقات للقطع الحساسة، وبطانيات التوسيد لجميع قطع الخشب والمجالس، وشاحنات دينا مغلقة ومبطنة مزودة بأحزمة تثبيت.'
  },
  {
    id: 'faq-5',
    category: 'pricing',
    questionEn: 'Do you offer a free on-site survey / inspection in Jeddah?',
    questionAr: 'هل توفرون معاينة مجانية للمنزل أو المكتب في جدة قبل النقل؟',
    answerEn: 'Yes! We offer free, no-obligation inspection visits anywhere in Jeddah, or an instant virtual video quote via WhatsApp to inspect items and provide a clear estimate with no hidden costs.',
    answerAr: 'نعم! نوفر خدمة المعاينة المجانية في أي مكان داخل مدينة جدة بدون أي التزام، أو معاينة فورية عبر تصوير الفيديو على الواتساب لتقييم حجم الأثاث وتقديم خطة وعرض دقيق بدون أي رسوم خفية.'
  }
];

export const COMPANY_CONTACTS = {
  nameEn: 'SAAD Packers & Movers',
  nameAr: 'شركة سعد لنقل وتغليف الأثاث',
  taglineEn: 'Jeddah\'s trusted moving & relocation service — Moving made safe & simple.',
  taglineAr: 'خدمة نقل وترحيل موثوقة في جدة — نقل آمن وبسيط.',
  phoneDisplay: '+966 57 577 1358',
  phoneCall: '+966575771358',
  whatsappNumber: '966575771358',
  whatsappLink: 'https://wa.me/966575771358?text=Hello%20Saad%20Packers%20%26%20Movers,%20I%20would%20like%20to%20get%20a%20free%20quote.',
  whatsappLinkAr: 'https://wa.me/966575771358?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%B3%D8%B9%D8%AF%20%D9%84%D9%86%D9%82%D9%84%20%D8%A7%D9%84%D8%B9%D9%81%D8%B4%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%B7%D9%84%D8%A8%20%D8%B9%D8%B1%D8%B6%20%D8%B3%D8%B9%D8%B1%20%D9%85%D8%AC%D8%A7%D9%86%D9%8A.',
  email: 'info@saadpackersmovers.com',
  website: 'https://saadmovingcompanyjeddah.com/',
  headquartersAddressEn: 'Jeddah, Saudi Arabia',
  headquartersAddressAr: 'جدة، المملكة العربية السعودية',
  workingHoursEn: 'Sat – Thu · 9:00 AM – 9:00 PM',
  workingHoursAr: 'السبت – الخميس · 9:00 صباحاً – 9:00 مساءً',
  crNumber: 'Licensed & Insured Moving Service',
  crNumberAr: 'خدمة نقل أثاث مرخصة ومؤمنة بالكامل'
};

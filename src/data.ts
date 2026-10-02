export const BASE_PHOTO_URL = 'https://raw.githubusercontent.com/monzer369/TAJ_9876737/main/public/photo/';

export const IMAGES = {
  logo: `${BASE_PHOTO_URL}high-resolution-color-logo-removebg-preview.png`,
  monogram: `${BASE_PHOTO_URL}color-monogram-circle-layout.png`,
  
  // 1. Pool Covers (9 photos)
  poolCovers: [
    `${BASE_PHOTO_URL}Automatic_or_manual_pool_cover_with_side_opening_supports_people_made_of_WPC_and_iron.png`,
    `${BASE_PHOTO_URL}Automatic_or_manual_pool_cover_with_side_opening_supports_people_made_of_WPC_and_iron_2.png`,
    `${BASE_PHOTO_URL}Automatic_or_manual_pool_cover_with_side_opening_supports_people_made_of_WPC_and_iron_3.png`,
    `${BASE_PHOTO_URL}Automatic_or_manual_pool_cover_with_side_opening_supports_people_made_of_WPC_and_iron_4.png`,
    `${BASE_PHOTO_URL}Low-profile_pool_cover_made_of_iron_and_plexiglass_automatic_and_manual_sliding.png`,
    `${BASE_PHOTO_URL}Low-profile_pool_cover_made_of_iron_and_plexiglass_automatic_and_manual_sliding_1.png`,
    `${BASE_PHOTO_URL}high_3_meters_profile_pool_cover_made_of_iron_and_plexiglass_automatic_and_manual_sliding_3.png`,
    `${BASE_PHOTO_URL}high_3_meters_profile_pool_cover_made_of_iron_and_plexiglass_automatic_and_manual_sliding_4.png`,
    `${BASE_PHOTO_URL}Villa-Swimming-Pool-Swimming-Pool-Cover-Electric-Lift-Cover-Block-Out-the-Sun-Endless-Pool-Swim-Spa-Cover.jpg.png`,
  ],

  // 2. Canopies and Pergolas (7 photos)
  canopies: [
    `${BASE_PHOTO_URL}car-canopy.png`,
    `${BASE_PHOTO_URL}car-canopy2.png`,
    `${BASE_PHOTO_URL}car-canopy_3.png`,
    `${BASE_PHOTO_URL}car-canopy_4.png`,
    `${BASE_PHOTO_URL}car-canopy_5.png`,
    `${BASE_PHOTO_URL}car-canopy_7.png`,
    `${BASE_PHOTO_URL}car-canopy_8.png`,
  ],

  // 3. Spiral Stairs (3 photos) - Spiral_staircase_3 is well-proportioned for landscape/square, Spiral_staircase is full vertical
  spiralStairs: [
    `${BASE_PHOTO_URL}Spiral_staircase_3.png`,
    `${BASE_PHOTO_URL}Spiral_staircase_2.png`,
    `${BASE_PHOTO_URL}Spiral_staircase.png`,
  ],

  // 4. Doors and Gates (5 photos)
  doors: [
    `${BASE_PHOTO_URL}An_ornate_door_a%20prime_example_of_exquisite_ironwork.png`,
    `${BASE_PHOTO_URL}Image_of_a_door_clad_in_WPC_wood_alternative.png`,
    `${BASE_PHOTO_URL}Modern_exterior_door_clad_in_wood-alternative_mater_al_weather-resistant_durable_%20and_resistant_to_water_and_heat.png`,
    `${BASE_PHOTO_URL}Modern_exterior_door_clad_in_wood-alternative_mater_al_weather-resistant_durable_%20and_resistant_to_water_and_heat_1.png`,
    `${BASE_PHOTO_URL}WPC_Wood_Alternative_Clad_Door.png`,
  ],

  // 5. Outdoor Seating (5 photos)
  seating: [
    `${BASE_PHOTO_URL}Outdoor_villa_seating_area.png`,
    `${BASE_PHOTO_URL}An_outdoor_seating_area_separate_from_the_villa_serving_as_a_space_for_video_games_and_family_gatherings.png`,
    `${BASE_PHOTO_URL}Facade_for_an_outdoor_seating_area_made_of_iron_and_Plexiglass.png`,
    `${BASE_PHOTO_URL}Glass-enclosed_outdoor_seating_area.png`,
    `${BASE_PHOTO_URL}The_villa_front_features_a_seating_area_made_of_iron_and_Plexiglass.png`,
  ],

  // 6. Decorative Frames and Panels (4 photos)
  decor: [
    `${BASE_PHOTO_URL}Decorative_inner_frame.png`,
    `${BASE_PHOTO_URL}Decorative_inner_frame_1.png`,
    `${BASE_PHOTO_URL}Decorative_inner_frame_2.png`,
    `${BASE_PHOTO_URL}Decorative_inner_frame_3.png`,
  ],
} as const;

export const CONTACT_INFO = {
  phoneDisplay: '+971 54 446 5689',
  phoneRaw: '+971544465689',
  whatsappRaw: '971544465689',
  location: 'دبي، الإمارات العربية المتحدة',
  facebook: 'https://www.facebook.com/share/1KJ8UbN5vR/',
  instagram: 'https://www.instagram.com/taj__llc',
  snapchat: 'https://www.snapchat.com/add/tajsteel_llc',
} as const;

export const REQUEST_OPTIONS = [
  'أغطية مسابح',
  'أدراج حلزونية',
  'أدراج مستقيمة',
  'درابزين حديدي',
  'درابزين شرفات',
  'بوابات حديد',
  'أسوار',
  'مظلات',
  'جلسات خارجية',
  'أبواب حديدية',
  'ديكورات معدنية',
  'استفسار آخر',
] as const;

export const UAE_CITIES = [
  'دبي',
  'أبوظبي',
  'الشارقة',
  'عجمان',
  'رأس الخيمة',
  'الفجيرة',
  'أم القيوين',
  'العين',
] as const;

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  images: string[]; // All available authentic photos for this service
  features: string[];
  specs: {
    materials: string;
    durability: string;
    application: string;
  };
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'pool-covers',
    title: 'أغطية مسابح هندسية متطورة',
    category: 'مسابح',
    shortDesc: 'أنظمة فتح أوتوماتيكية ويدوية متينة تدعم أوزان الأشخاص مصنعة من حديد معالج وخشب بلاستيكي WPC وبلكسي جلاس.',
    fullDesc: 'نقدم حلولاً هندسية استثنائية لتغطية المسابح المنزلية في الفلل الراقية بالإمارات. تتوفر بتصاميم متعددة: مسطحة تدعم المشاة بألواح WPC، منخفضة الارتفاع (Low-profile) ببلكسي جلاس، ومرتفعة بارتفاع 3 أمتار تتيح السباحة بداخلها مع حماية تامة ومحركات سحب كهربائية ويدوية.',
    images: [...IMAGES.poolCovers],
    features: [
      'تتحمل أوزان المشاة والحفلات العائلية بأمان تام',
      'هيكل حديدي مجلفن عالي القوة ومقاوم للصدأ والكلور والرطوبة',
      'ألواح WPC فاخرة أو بلكسي جلاس عازل للأشعة فوق البنفسجية',
      'آلية فتح وإغلاق هادئة وانسيابية (أوتوماتيكية أو يدوية بمحركات)'
    ],
    specs: {
      materials: 'حديد صلب مجلفن + WPC بلجيكي/ألماني أو بلكسي جلاس معالج للأشعة فوق البنفسجية',
      durability: 'مصممة للعمل الشاق والمناخ الإماراتي الرطب والحار',
      application: 'الفلل السكنية الفاخرة، القصور، المسابح الخاصة'
    }
  },
  {
    id: 'car-canopies',
    title: 'برجولات ومظلات سيارات عصرية',
    category: 'برجولات',
    shortDesc: 'مظلات هندسية صلبة وتصاميم معمارية فريدة لحماية المركبات والمساحات المفتوحة من الشمس والحرارة.',
    fullDesc: 'تجمع مظلات TAJ بين البنية الهندسية القوية والخطوط الجمالية المعاصرة. نصنع مظلات سيارات وبرجولات حديدية مخصصة بتصاميم وأشكال هندسية متعددة، تتحمل سرعات الرياح وتوفر عزلاً حرارياً فائقاً مع دهان بودرة حراري يدوم طويلاً.',
    images: [...IMAGES.canopies],
    features: [
      'هياكل فولاذية مصممة هندسياً لتحمل أعلى سرعات الرياح',
      'تغطيات عازلة للأشعة فوق البنفسجية والحرارة بنسبة 98%',
      'دهانات بودرة إلكتروستاتيكية مقاومة للخدش والتغير اللوني',
      'تشكيلات تصميم متعددة تتناسب مع مساحة المدخل ومحيط الفيلا'
    ],
    specs: {
      materials: 'مقاطع حديدية سميكة مجلفنة + طلاء كهروسكوني مقاوم للأملاح',
      durability: 'مقاومة تامة للتآكل والتقشير في الأجواء الساحلية والصحراوية',
      application: 'مواقف الفلل، المداخل الرئيسية، الساحات والحدائق الخارجية'
    }
  },
  {
    id: 'spiral-stairs',
    title: 'أدراج حلزونية ودائرية معمارية',
    category: 'أدراج',
    shortDesc: 'تحف إنشائية تجمع بين دقة الحسابات الهندسية والأناقة المعمارية للفلل والقصور.',
    fullDesc: 'نصمم وننفذ أدراجاً حلزونية ودائرية بمقاييس هندسية متناهية الدقة، محققة توازناً مثالياً بين الراحة الإنشائية في الصعود والجاذبية البصرية الفريدة. تشكل هذه الأدراج عنصراً معمارياً محورياً يبرز فخامة التصميم الداخلي أو الخارجي.',
    images: [...IMAGES.spiralStairs],
    features: [
      'حسابات هندسية دقيقة لقطر الدوران وارتفاع الدرجات للراحة التامة',
      'لحام ميكانيكي غير مرئي وتشطيبات ناعمة متناهية الدقة',
      'إمكانية دمج خامات الخشب الطبيعي أو الزجاج مع الفولاذ',
      'قدرة إنشائية فائقة على تحمل الأحمال الثقيلة وثبات خالي من الاهتزاز'
    ],
    specs: {
      materials: 'فولاذ كربوني عالي الصلابة + تشطيبات طلاء فاخرة',
      durability: 'ثبات إنشائي مضمون ومقاومة للاهتزاز والتآكل',
      application: 'بهو الفلل، البنتهاوس، مداخل التراسات والأسطح'
    }
  },
  {
    id: 'ornate-doors',
    title: 'أبواب وبوابات حديدية وخشب WPC فاخرة',
    category: 'أبواب',
    shortDesc: 'بوابات رئيسية وأبواب مصفحة بتطريز معدني متقن وتكسيات خشب بديل مقاوم للمياه والحرارة.',
    fullDesc: 'مدخل الفيلا هو عنوان فخامتها. تقدم TAJ خيارات متعددة تشمل الأبواب المزخرفة يدوياً بالحديد المطروق، والأبواب المودرن المكسوة بمواد WPC البديلة للخشب والمقاومة للعوامل الجوية، مزودة بأنظمة إقفال متقدمة تلبي متطلبات الأمان والخصوصية مع مظهر ملكي أنيق.',
    images: [...IMAGES.doors],
    features: [
      'تشكيلات حديدية زخرفية كلاسيكية ومودرن بتكسيات WPC عصرية',
      'معالجة غلفنة على الساخن لضمان منع الصدأ نهائياً',
      'عزل حراري وصوتي داخلي متطور ومقاوم لحرارة الصيف',
      'تجهيز كامل للأنظمة الذكية والمحركات الكهربائية والمفصلات الثقيلة'
    ],
    specs: {
      materials: 'حديد صلب مجلفن + WPC خشب بديل + زجاج عاكس مصفح',
      durability: 'حماية كاملة من الرطوبة والحرارة العالية دون أي تقشر أو التواء',
      application: 'المداخل الرئيسية للفلل، بوابات الأسوار، الأبواب الخارجية والجانبية'
    }
  },
  {
    id: 'outdoor-seating',
    title: 'جلسات خارجية معدنية ومغلقة بالبلكسي جلاس',
    category: 'جلسات',
    shortDesc: 'مساحات ضيافة خارجية متكاملة مصممة بأسلوب هندسي راقٍ للتجمعات العائلية وألعاب الفيديو والراحة.',
    fullDesc: 'تضفي جلسات TAJ الخارجية طابعاً أنيقاً يجمع بين الراحة الاستثنائية والصلابة المتناهية. نصنع إطارات الجلسات المفتوحة والعرائش المغلقة بالبلكسي جلاس والزجاج المقاوم للصدمات، مع تجهيزها لتكون ملاذاً عائلياً خاصاً مستقلاً عن مبنى الفيلا.',
    images: [...IMAGES.seating],
    features: [
      'هياكل حديدية قوية لا تتأثر بالحرارة أو الرطوبة المرتفعة',
      'خيارات واجهات مغلقة بالبلكسي جلاس أو مفتوحة مع مظلات علوية',
      'مساحات فسيحة مخصصة للجلسات العائلية وقاعات الترفيه التابعة للفيلا',
      'طلاء حماية متطور يحافظ على رونق اللون ومقاومة الصدأ لسنوات طويلة'
    ],
    specs: {
      materials: 'فولاذ مجلفن مع طلاء ميكرو-حراري وبلكسي جلاس شفاف عالي العزل',
      durability: 'مصممة لتحمل الهواء الخارجي والرطوبة والرياح',
      application: 'حدائق الفلل، التراسات، محيط المسابح، مناطق الترفيه العائلي'
    }
  },
  {
    id: 'decorative-frames',
    title: 'ديكورات وفواصل معدنية هندسية',
    category: 'ديكورات',
    shortDesc: 'قواطع جدارية وإطارات فنية مخصصة تمنح المساحات السكنية عمقاً بصرياً وفخامة معمارية لا مثيل لها.',
    fullDesc: 'فواصل وديكورات TAJ المعدنية تصنع بأحدث تقنيات القص والتفريغ الهندسي بدقة متناهية. نبتكر إطارات داخلية وخارجية للصالات والمداخل والواجهات الجدارية تضمن الخصوصية وتضفي لمسة فنية راقية تتناغم مع الديكور الفاخر للفلل.',
    images: [...IMAGES.decor],
    features: [
      'قص هندسي فائق الدقة بتفريغات وزخارف معمارية مخصصة',
      'أبعاد وارتفاعات تفصيلية حسب رغبة العميل والمخطط الهندسي',
      'تشطيبات دهان مات أو ميتاليك عاكسة للفخامة العصرية',
      'تثبيت أمني غير مرئي ومخفي للمحافظة على نقاء المظهر'
    ],
    specs: {
      materials: 'صفائح حديد معالج أو ألومنيوم معزز بسمكات عالية',
      durability: 'ثبات لوني واستقرار إنشائي خالي من الانحناءات',
      application: 'الفواصل بين المجالس والصالات، الواجهات الجدارية، شاشات الخصوصية'
    }
  },
  {
    id: 'balcony-railings',
    title: 'درابزينات حديد وشرفات معمارية',
    category: 'درابزين',
    shortDesc: 'حواجز ودرابزينات مدروسة هندسياً لتأمين الشرفات والسلالم بتصاميم تفيض بالرقي والصلابة.',
    fullDesc: 'نوفر حلول الدرابزين الداخلي والخارجي للفلل والمباني الراقية، حيث نجمع بين معايير السلامة الإنشائية الصارمة والمظهر الجمالي المترف، مع إمكانية التنسيق المباشر مع أرضيات الرخام والخشب وزجاج السيكوريت.',
    images: [], // لا توجد صور جاهزة - تنفيذ مخصص حسب مخططات الفيلا
    features: [
      'ارتفاعات وحسابات أحمال تلبي أعلى معايير السلامة السكنية',
      'تشطيبات ناعمة الملمس مع لحام دقيق ومخفي تماماً',
      'مقاومة تامة للاهتزاز مع قواعد تثبيت فولاذية مخفية',
      'خيارات تصميم مودرن نيو-كلاسيك أو خطوط هندسية بسيطة'
    ],
    specs: {
      materials: 'حديد صلب مجلفن + دهانات حرارية مضادة للأملاح والرطوبة',
      durability: 'عمر افتراضي طويل بدون تآكل أو حاجة لصيانة متكررة',
      application: 'شرفات الفلل، درابزين السلالم الداخلية والخارجية، الأسوار الزجاجية'
    }
  },
  {
    id: 'perimeter-fences',
    title: 'أسوار وحواجز أمنية سكنية',
    category: 'أسوار',
    shortDesc: 'أسوار حديدية متينة تحيط بالفيلا وتمنحها حماية متكاملة وهيبة معمارية تعكس تميز المسكن.',
    fullDesc: 'تضفي أسوار TAJ السكنية لمسة متفردة من الحماية والأناقة لمحيط الفيلا أو القصر. ننفذ أسواراً مصممة لمقاومة أصعب العوامل الجوية مع الحفاظ على تناغم المظهر الخارجي وتوفير الخصوصية التامة لسكان الفيلا.',
    images: [], // لا توجد صور جاهزة - تنفيذ مخصص حسب مخططات الفيلا
    features: [
      'حواجز فولاذية صلبة مقاومة للضغط ومحاولات الاختراق',
      'معالجة ضد التآكل والأكسدة بمراحل جلفنة ودهان متطورة',
      'توافق انسيابي مع بوابات الدخول ومحركات التحكم عن بعد',
      'خيارات حجب رؤية مدروسة تضمن خصوصية الحديقة والمسبح'
    ],
    specs: {
      materials: 'قطاعات حديدية ثقيلة مجلفنة على الساخن',
      durability: 'صمود استثنائي أمام رياح الصحراء والغبار والشمس الحارقة',
      application: 'محيط الفلل والقصور، الحواجز الفاصلة، أسوار المسابح والحدائق'
    }
  }
];

export interface ProjectWork {
  id: string;
  title: string;
  category: 'مسابح' | 'برجولات' | 'أدراج' | 'أبواب' | 'جلسات' | 'ديكورات';
  categoryLabel: string;
  image: string;
  location: string;
  description: string;
  highlights: string[];
}

export const PORTFOLIO_WORKS: ProjectWork[] = [
  // 1. Pool covers works
  {
    id: 'work-pool-1',
    title: 'غطاء مسبح أوتوماتيكي متحرك مع سطح WPC',
    category: 'مسابح',
    categoryLabel: 'أغطية مسابح',
    image: IMAGES.poolCovers[0],
    location: 'فيلا سكنية فاخرة - دبي',
    description: 'تنفيذ نظام غطاء مسبح ذكي يتحمل أوزان المشاة بالكامل، يفتح جانبياً بسلاسة ويوفر أقصى حماية للأطفال مع مضاعفة مساحة الجلوس.',
    highlights: ['تحمل أوزان المشاة', 'هيكل حديد مجلفن', 'ألواح WPC مقاومة للمياه', 'فتح وإغلاق جانبي انسيابي']
  },
  {
    id: 'work-pool-2',
    title: 'غطاء مسبح منخفض الانزلاق حديد وبلكسي جلاس',
    category: 'مسابح',
    categoryLabel: 'أغطية مسابح',
    image: IMAGES.poolCovers[4],
    location: 'فيلا مستقلة - أبوظبي',
    description: 'نظام تغطية منخفض الارتفاع مصنوع من قطاعات حديد مجلفن مع ألواح بلكسي جلاس الشفافة العازلة للغبار وأشعة الشمس الحارقة.',
    highlights: ['نظام انزلاق خفيف', 'بلكسي جلاس عازل', 'حماية من الأتربة', 'تشغيل يدوي وأوتوماتيكي']
  },
  {
    id: 'work-pool-3',
    title: 'قبة مسبح متحركة بارتفاع 3 أمتار',
    category: 'مسابح',
    categoryLabel: 'أغطية مسابح',
    image: IMAGES.poolCovers[6],
    location: 'قصر سكني - الشارقة',
    description: 'هيكل حديدي مرتفع يتيح السباحة والمشي داخل حوض المسبح في كافة فصول السنة مع نظام تهوية وعزل حراري متطور.',
    highlights: ['ارتفاع 3 أمتار', 'إمكانية السباحة والمسبح مغلق', 'هيكل فولاذي مجلفن', 'مقاوم للرطوبة والكلور']
  },
  
  // 2. Canopies works
  {
    id: 'work-pergola-1',
    title: 'مظلة سيارات هندسية بتصميم معماري معلق',
    category: 'برجولات',
    categoryLabel: 'برجولات ومظلات',
    image: IMAGES.canopies[0],
    location: 'مجمع فلل خاص - أبوظبي',
    description: 'تصميم وتنفيذ مظلة سيارات بمقاطع حديدية متينة وطلاء حراري أسود فحمي عالي الجودة ومقاوم لأشعة الشمس والحرارة.',
    highlights: ['مقاومة للرياح والحرارة', 'دهان كهروسكوني مضاد للأكسدة', 'عزل للأشعة فوق البنفسجية', 'أبعاد مخصصة']
  },
  {
    id: 'work-pergola-2',
    title: 'مظلة سيارات بقطاعات فولاذية مزدوجة',
    category: 'برجولات',
    categoryLabel: 'برجولات ومظلات',
    image: IMAGES.canopies[1],
    location: 'فيلا خاصة - دبي',
    description: 'مظلة سيارات تجمع بين المتانة الفائقة والخطوط العصرية لتوفير تغطية كاملة لمركبات الفيلا مع ثبات إنشائي مضمون.',
    highlights: ['هيكل فولاذي متين', 'تصميم عصري متناسق مع الواجهة', 'مقاوم للصدأ', 'ضمان 10 سنوات']
  },
  {
    id: 'work-pergola-3',
    title: 'برجولا حديقة ومواقف سيارات معمارية',
    category: 'برجولات',
    categoryLabel: 'برجولات ومظلات',
    image: IMAGES.canopies[2],
    location: 'فيلا عصرية - العين',
    description: 'تنفيذ مظلة حديدية بلمسات هندسية حديثة توفر حماية وعزل حراري كامل لساحة الفيلا الخارجية.',
    highlights: ['تغطية عازلة', 'دهان حراري إلكتروستاتيكي', 'تثبيت مخفي', 'حماية من الأشعة فوق البنفسجية']
  },

  // 3. Spiral Stairs works
  {
    id: 'work-stairs-1',
    title: 'درج حلزوني معماري ذو ثبات إنشائي فائق',
    category: 'أدراج',
    categoryLabel: 'أدراج حلزونية',
    image: IMAGES.spiralStairs[0],
    location: 'فيلا مستقلة - دبي',
    description: 'تصميم وتنفيذ درج حلزوني فولاذي يجمع بين دقة المركزية الحسابية والمظهر الهندسي الفخم الذي يتوسط بهو الفيلا.',
    highlights: ['حسابات هندسية دقيقة', 'لحام غير مرئي', 'طلاء أسود صناعي راقٍ', 'ثبات بدون اهتزاز']
  },
  {
    id: 'work-stairs-2',
    title: 'سلم حلزوني خارجي مع درابزين أمان فولاذي',
    category: 'أدراج',
    categoryLabel: 'أدراج حلزونية',
    image: IMAGES.spiralStairs[1],
    location: 'فيلا - رأس الخيمة',
    description: 'درج حلزوني خارجي يصل التراس بالحديقة مصنع من حديد مجلفن ومقاوم للرطوبة والأملاح.',
    highlights: ['جلفنة كاملة', 'ثبات وأمان عالي', 'درجات مانعة للانزلاق', 'تصميم حلزوني مدمج']
  },
  {
    id: 'work-stairs-3',
    title: 'درج حلزوني فولاذي متكامل بكامل الارتفاع',
    category: 'أدراج',
    categoryLabel: 'أدراج حلزونية',
    image: IMAGES.spiralStairs[2],
    location: 'فيلا خاصة - دبي',
    description: 'تنفيذ درج حلزوني بكامل الارتفاع يربط الأدوار بأسلوب معماري انسيابي مصنع من قطاعات فولاذية دقيقة.',
    highlights: ['كامل الارتفاع المعماري', 'درجات فولاذية مدعمة', 'ثبات فائق', 'ضمان 10 سنوات']
  },

  // 4. Doors works
  {
    id: 'work-doors-1',
    title: 'بوابة رئيسية فاخرة بأعمال حديد مطروق متقنة',
    category: 'أبواب',
    categoryLabel: 'أبواب وبوابات',
    image: IMAGES.doors[0],
    location: 'قصر سكني - الشارقة',
    description: 'تنفيذ باب رئيسي فاخر مزخرف بنقوش حديدية كلاسيكية مدمجة ومحصنة بأنظمة إقفال متينة وجلفنة حارة مانعة للصدأ.',
    highlights: ['أعمال حديد مطروق يدوي', 'حماية مطلقة وغلفنة حارة', 'مفصلات فولاذية ثقيلة', 'نقوش فنية هندسية']
  },
  {
    id: 'work-doors-2',
    title: 'باب خارجي مودرن بتكسية خشب WPC بديل',
    category: 'أبواب',
    categoryLabel: 'أبواب وبوابات',
    image: IMAGES.doors[1],
    location: 'فيلا راقية - دبي',
    description: 'باب مدخل فيلا عصري يدمج الفولاذ الصلب مع ألواح WPC المقاومة للشمس والرطوبة ليعطي دفء الخشب مع صلابة الفولاذ.',
    highlights: ['مقاوم للشمس والرطوبة', 'ألواح WPC فاخرة', 'تصميم مودرن معاصر', 'أمان وحماية تامة']
  },
  {
    id: 'work-doors-3',
    title: 'باب فيلا مصفح مقاوم للعوامل الجوية والحرارة',
    category: 'أبواب',
    categoryLabel: 'أبواب وبوابات',
    image: IMAGES.doors[2],
    location: 'فيلا خاصة - أبوظبي',
    description: 'باب مدخل رئيسي بتصميم هندسي أفقي متناسق ومزود بعوازل حرارية ومقاومة فائقة للحرارة والماء.',
    highlights: ['عزل حراري', 'تصفيح فولاذي', 'مظهر معماري أنيق', 'أنظمة قفل ذكية']
  },

  // 5. Seating works
  {
    id: 'work-seating-1',
    title: 'منطقة جلوس خارجية مظللة بإطار حديدي متين',
    category: 'جلسات',
    categoryLabel: 'جلسات خارجية',
    image: IMAGES.seating[0],
    location: 'حديقة فيلا راقية - دبي',
    description: 'تنفيذ جلسة حديقة خارجية تجمع بين الهيكل الحديدي المعالج ومقاعد الراحة الفسيحة والمصممة لتلائم الأجواء الخارجية في الإمارات.',
    highlights: ['حديد معالج ضد الرطوبة', 'تصميم متناغم مع الطبيعة', 'متانة ضد الرياح', 'طلاء ناعم يدوم طويلاً']
  },
  {
    id: 'work-seating-2',
    title: 'جلسة خارجية عائلية مستقلة لألعاب الفيديو والضيافة',
    category: 'جلسات',
    categoryLabel: 'جلسات خارجية',
    image: IMAGES.seating[1],
    location: 'فيلا سكنية - دبي',
    description: 'غرفة ضيافة وجلسة عائلية خارجية مصنعة من مقاطع حديدية وزجاج وبلكسي جلاس مجهزة بالكامل للترفيه واللقاءات الخاصة.',
    highlights: ['مستقلة عن الفيلا', 'عزل صوتي وحراري', 'هيكل فولاذي أنيق', 'إضاءات مخفية']
  },
  {
    id: 'work-seating-3',
    title: 'واجهة جلسة خارجية من الحديد والبلكسي جلاس',
    category: 'جلسات',
    categoryLabel: 'جلسات خارجية',
    image: IMAGES.seating[2],
    location: 'فيلا خاصة - عجمان',
    description: 'واجهة معمارية حديدية متناسقة مع بلكسي جلاس شفاف تمنح الجلسة إطلالة بانورامية على الحديقة والمسبح.',
    highlights: ['بلكسي جلاس شفاف', 'إطارات حديد مجلفن', 'حماية من الغبار والحرارة', 'إطلالة بانورامية']
  },

  // 6. Decor works
  {
    id: 'work-decor-1',
    title: 'إطار وقاطع ديكوري داخلي فخم ومصقول',
    category: 'ديكورات',
    categoryLabel: 'ديكورات وفواصل',
    image: IMAGES.decor[0],
    location: 'فيلا عصرية - رأس الخيمة',
    description: 'تنفيذ فواصل جدارية وإطارات حديدية فنية تمنح البهو لمسة معمارية فاخرة بتفاصيل دقيقة وتشطيب ميتاليك متطور.',
    highlights: ['قص ليزري فائق الدقة', 'تشطيب كهروسكوني', 'أبعاد مخصصة', 'تثبيت مخفي بدون تشويه']
  },
  {
    id: 'work-decor-2',
    title: 'فاصل جداري داخلي بقواطع هندسية معاصرة',
    category: 'ديكورات',
    categoryLabel: 'ديكورات وفواصل',
    image: IMAGES.decor[1],
    location: 'فيلا - دبي',
    description: 'قاطع ديكوري يفصل بين الصالونات والمجالس بأسلوب هندسي مفتوح يمرر الإضاءة ويمنح المكان لمسة أناقة متميزة.',
    highlights: ['فواصل هندسية دقيقة', 'دهان ميتاليك فاخر', 'مقاوم للخدش', 'تنفيذ حسب المقاس']
  }
];

export const WHY_TAJ = [
  {
    title: 'دقة هندسية وصناعية متناهية',
    desc: 'دراسة إنشائية مسبقة لكل قطعة ومقاس لضمان التركيب الدقيق والمتانة الإنشائية الصلبة في كافة المشاريع السكنية.',
    iconName: 'Compass'
  },
  {
    title: 'مواد مجلفنة وخامات فائقة الجودة',
    desc: 'استخدام قطاعات فولاذية ثقيلة مع جلفنة متقدمة ودهانات حرارية مخصصة لتحمل الرطوبة الشديدة وحرارة الصيف الإماراتي.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'تصنيع مخصص حسب الطلب (Custom Tailored)',
    desc: 'لا نعتمد النماذج الجاهزة؛ بل ننفذ حلولاً مطابقة لرؤية المالك والمهندس المعماري بالمقاييس والمواصفات المطلوبة.',
    iconName: 'Wrench'
  },
  {
    title: 'ضمان حقيقي لمدة 10 سنوات',
    desc: 'نمنح عملاءنا في الإمارات ضماناً إنشائياً موثوقاً لمدة 10 سنوات على ثبات الهياكل المعدنية ومقاومتها للأكسدة والتآكل.',
    iconName: 'Award'
  }
];

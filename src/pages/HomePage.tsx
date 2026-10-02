import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  Compass, 
  Award, 
  ChevronLeft, 
  CheckCircle2, 
  Phone, 
  Sparkles,
  MessageCircle,
  Eye,
  Images,
  ArrowUpRight
} from 'lucide-react';
import { PageId } from '../components/Navbar';
import { IMAGES, SERVICES, PORTFOLIO_WORKS, WHY_TAJ, CONTACT_INFO, ServiceItem } from '../data';
import { WarrantyBadge } from '../components/WarrantyBadge';
import { AutoServiceImageSlider } from '../components/AutoServiceImageSlider';

interface HomePageProps {
  onNavigate: (page: PageId, preselectedRequest?: string) => void;
  onOpenProjectModal: (work: any) => void;
  onOpenServiceGallery: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
  onNavigate, 
  onOpenProjectModal,
  onOpenServiceGallery
}) => {
  // Active selected service on the homepage
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];
  const activeServiceImages = activeService.images || [];

  const handleSelectService = (serviceId: string) => {
    setActiveServiceId(serviceId);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section */}
      <section className="relative min-h-[75vh] flex items-center pt-6 overflow-hidden">
        {/* Subtle grid and ambient luxury glows */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"></div>
        <div className="absolute top-1/4 -right-16 w-80 h-80 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#84CC16]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Text & CTA (7 cols) */}
            <div className="lg:col-span-7 space-y-4 text-right">
              {/* Luxury Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1527] border border-blue-500/25 text-xs font-semibold text-slate-200 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse"></span>
                <span className="text-[#84CC16] font-bold">Industrial Luxury</span>
                <span className="text-slate-600">|</span>
                <span>أعمال حديدية وحلول هندسية مخصصة للفلل في الإمارات</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-snug tracking-tight">
                أعمال حديدية فاخرة تجمع بين{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#2563EB]">
                  الدقة الهندسية
                </span>{' '}
                والفخامة الإنشائية
              </h1>

              {/* Sub-text */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                شركة <span className="text-white font-bold">TAJ</span> متخصصة في تصنيع وتنفيذ أغطية المسابح الذكية والمتحملة للأوزان، المظلات والبرجولات، الأدراج الحلزونية، والأبواب الفولاذية المخصصة للفلل والقصور الراقية في دولة الإمارات مع ضمان 10 سنوات.
              </p>

              {/* Guarantees pills */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-200 bg-[#0E1628] border border-slate-800 px-3 py-1.5 rounded-lg shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#84CC16]" />
                  <span>ضمان 10 سنوات على كافة الهياكل</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-200 bg-[#0E1628] border border-slate-800 px-3 py-1.5 rounded-lg shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>تنفيذ مخصص حسب الطلب (Custom Tailored)</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-600 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#2563EB]/25 border border-blue-400/30 transition-all"
                >
                  <span>طلب استشارة وعرض سعر</span>
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('portfolio')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0D1527] hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-bold text-xs sm:text-sm transition-all"
                >
                  <span>استعراض معرض الأعمال</span>
                </button>
              </div>

              {/* Fast Direct WhatsApp */}
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                <span>تواصل هندسي سريع:</span>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent('مرحباً TAJ، أود الاستفسار عن تفاصيل المشاريع والأسعار.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#84CC16] hover:underline flex items-center gap-1 font-bold font-mono"
                  dir="ltr"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-[#84CC16]" />
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Visual Hero Showcase with Autoplay (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <AutoServiceImageSlider
                  images={SERVICES[0].images}
                  category={SERVICES[0].category}
                  serviceTitle={SERVICES[0].title}
                  onOpenGallery={() => onOpenServiceGallery(SERVICES[0])}
                  aspectClass="aspect-[4/3]"
                  showThumbnails={false}
                />

                {/* Floating micro card for spiral stairs */}
                <div 
                  onClick={() => onOpenServiceGallery(SERVICES[2])}
                  className="cursor-pointer absolute -bottom-4 -left-3 p-2.5 rounded-xl bg-[#0B101D]/95 backdrop-blur-md border border-slate-700/90 shadow-2xl flex items-center gap-2.5 max-w-[220px] hover:border-[#84CC16]/60 transition-all z-30"
                >
                  <img
                    src={IMAGES.spiralStairs[0]}
                    alt="درج حلزوني"
                    className="w-10 h-10 rounded-lg object-contain bg-slate-950 border border-slate-800 shrink-0 p-0.5"
                  />
                  <div className="text-right">
                    <span className="block text-xs font-bold text-white">أدراج حلزونية</span>
                    <span className="block text-[10px] text-[#84CC16] font-semibold">3 صور متوفرة ←</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Services & Multi-Image Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-right max-w-2xl mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-xs font-bold text-blue-400">
            <Sparkles className="w-3.5 h-3.5 text-[#84CC16]" />
            <span>عرض تفاعلي مباشر مع تنقل أوتوماتيكي ويدوي</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            خدمات TAJ الهندسية الـ 8 (انقر للاستعراض والتنقل الفوري بين الصور)
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            الصور تنتقل أوتوماتيكياً ويمكنك التدخل يدوياً بالنقر على أي صورة أو أسهم التنقل لمشاهدة التفاصيل:
          </p>
        </div>

        {/* Interactive Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Services List (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SERVICES.map((service, index) => {
              const isSelected = activeService.id === service.id;
              const imgCount = service.images.length;

              return (
                <div
                  key={service.id}
                  onClick={() => handleSelectService(service.id)}
                  className={`cursor-pointer p-4 rounded-xl border text-right transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#0E1628] border-blue-500 shadow-xl shadow-blue-500/10 translate-y-[-2px] ring-1 ring-blue-500/40'
                      : 'bg-[#0B101D] border-slate-800 hover:border-slate-700 hover:bg-[#0E1628]/60'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-slate-500">
                        0{index + 1}
                      </span>
                      {imgCount > 0 ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-[#84CC16]/15 text-[#84CC16] border border-[#84CC16]/30">
                          <Images className="w-3 h-3" />
                          <span>{imgCount} صور</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-400 border border-slate-700">
                          <span>تصنيع حسب المخطط</span>
                        </span>
                      )}
                    </div>

                    <h3 className={`text-sm font-bold transition-colors ${isSelected ? 'text-[#84CC16]' : 'text-white'}`}>
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 mt-3 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-400">
                      {service.category}
                    </span>

                    {/* Direct action button: opens gallery if images exist, or specs */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (imgCount > 0) {
                          onOpenServiceGallery(service);
                        } else {
                          handleSelectService(service.id);
                        }
                      }}
                      className="px-2.5 py-1 rounded-md bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white font-bold flex items-center gap-1 text-[11px] transition-colors"
                    >
                      {imgCount > 0 ? (
                        <>
                          <Images className="w-3 h-3 text-[#84CC16]" />
                          <span>استعراض الصور ({imgCount})</span>
                        </>
                      ) : (
                        <span>المواصفات ←</span>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Multi-Image Viewport (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-20 bg-[#0B101D] border border-slate-800/90 rounded-2xl overflow-hidden shadow-2xl p-5 flex flex-col justify-between min-h-[460px]">
              <div>
                {/* Visual Area with Autoplay Slider */}
                {activeServiceImages.length > 0 ? (
                  <div className="mb-4">
                    <AutoServiceImageSlider
                      key={activeService.id}
                      images={activeServiceImages}
                      category={activeService.category}
                      serviceTitle={activeService.title}
                      onOpenGallery={() => onOpenServiceGallery(activeService)}
                      aspectClass="aspect-[16/10]"
                      showThumbnails={true}
                    />
                  </div>
                ) : (
                  /* If service has NO photo: Architectural blueprint layout */
                  <div className="relative rounded-xl bg-[#060910] p-6 border border-dashed border-[#2563EB]/40 mb-4 blueprint-grid text-right space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#2563EB]/20 border border-[#2563EB]/40 text-xs font-bold text-blue-400">
                      <Compass className="w-3.5 h-3.5" />
                      <span>مخطط هندسي وتصنيع مخصص (Custom Fabrication)</span>
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      تصنيع 100% حسب المخططات المعمارية للفيلا
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      هذه الخدمة تفصل بالمقاسات والارتفاعات الدقيقة وفق اشتراطات استشاري الفيلا ورغبة المالك، دون الاعتماد على نماذج جاهزة مسبقة.
                    </p>
                    <div className="p-2.5 rounded-lg bg-[#0F172A]/90 border border-slate-800 text-[11px] text-slate-400">
                      حديد مجلفن على الساخن + دهان إلكتروستاتيكي حراري مقاوم للرطوبة.
                    </div>
                  </div>
                )}

                {/* Details in Viewport */}
                <div className="space-y-2.5 text-right">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-[#84CC16] font-bold">
                      {activeService.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      ضمان 10 سنوات
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {activeService.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeService.shortDesc}
                  </p>
                </div>
              </div>

              {/* Viewport Footer CTA */}
              <div className="pt-3 border-t border-slate-800/80 mt-3 flex items-center justify-between gap-2.5">
                {activeServiceImages.length > 0 && (
                  <button
                    onClick={() => onOpenServiceGallery(activeService)}
                    className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-all"
                  >
                    <Images className="w-3.5 h-3.5 text-[#84CC16]" />
                    <span>كامل الألبوم ({activeServiceImages.length})</span>
                  </button>
                )}

                <button
                  onClick={() => onNavigate('contact', activeService.title)}
                  className="flex-1 py-2 px-3 rounded-lg bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-xs shadow-md transition-all text-center"
                >
                  طلب تسعير
                </button>

                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(`مرحباً TAJ، أود الاستفسار عن: "${activeService.title}".`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white transition-all shrink-0"
                  aria-label="واتساب"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why TAJ Section */}
      <section className="bg-[#0B101D]/80 border-y border-slate-800/80 py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Text intro (5 cols) */}
            <div className="lg:col-span-5 space-y-3 text-right">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#84CC16]/15 border border-[#84CC16]/30 text-xs font-bold text-[#84CC16]">
                <span>المعايير الهندسية</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                لماذا يفضل أصحاب الفلل شركة <span className="text-[#2563EB]">TAJ</span>؟
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                في TAJ لا نعتمد حلولاً جاهزة؛ بل ندرس كل فيلا معمارياً وننفذ حلولاً فولاذية متينة تتحمل حرارة ورطوبة الصيف الإماراتي مع ضمان 10 سنوات صريح.
              </p>
            </div>

            {/* Feature Cards Grid (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {WHY_TAJ.map((item, idx) => {
                const icons = [Compass, ShieldCheck, Wrench, Award];
                const IconComponent = icons[idx % icons.length];
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0E1628] border border-slate-800 text-right space-y-2 shadow-md"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#070B12] border border-slate-700/80 flex items-center justify-center text-[#84CC16]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Selected Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div className="text-right space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#84CC16]/15 border border-[#84CC16]/30 text-xs font-bold text-[#84CC16]">
              <span>معرض المشاريع</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              نماذج من مشاريع TAJ المنفذة
            </h2>
            <p className="text-slate-400 text-xs">
              أعمال فولاذية منتقاة تم تنفيذها وفق أرقى المقاييس.
            </p>
          </div>

          <button
            onClick={() => onNavigate('portfolio')}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors"
          >
            <span>عرض كافة الأعمال وفلترة المشاريع</span>
            <ChevronLeft className="w-3.5 h-3.5 text-[#84CC16]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PORTFOLIO_WORKS.slice(0, 3).map((work) => (
            <div
              key={work.id}
              onClick={() => onOpenProjectModal(work)}
              className="cursor-pointer group rounded-2xl overflow-hidden bg-[#0B101D] border border-slate-800 hover:border-[#84CC16]/50 transition-all duration-300 shadow-md flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-950 flex items-center justify-center">
                <img
                  src={work.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-xl opacity-20 scale-110 pointer-events-none"
                />
                <img
                  src={work.image}
                  alt={work.title}
                  className="relative z-10 max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-slate-900/90 text-[11px] font-bold text-white border border-slate-700 z-20">
                  {work.categoryLabel}
                </div>
              </div>

              <div className="p-4 text-right space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block mb-0.5">{work.location}</span>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#84CC16] transition-colors leading-snug">
                    {work.title}
                  </h3>
                </div>
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400">ضمان 10 سنوات</span>
                  <span className="text-[#2563EB] font-bold text-xs group-hover:underline">عرض المواصفات ←</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 10-Year Warranty Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <WarrantyBadge variant="banner" />
      </section>
    </div>
  );
};

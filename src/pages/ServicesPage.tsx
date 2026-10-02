import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ChevronLeft, 
  MessageCircle, 
  Wrench, 
  Layers, 
  Sparkles,
  Compass,
  Images,
  ArrowUpRight
} from 'lucide-react';
import { SERVICES, CONTACT_INFO, ServiceItem } from '../data';
import { PageId } from '../components/Navbar';
import { WarrantyBadge } from '../components/WarrantyBadge';
import { AutoServiceImageSlider } from '../components/AutoServiceImageSlider';

interface ServicesPageProps {
  onNavigate: (page: PageId, preselectedRequest?: string) => void;
  onOpenServiceGallery: (service: ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ 
  onNavigate,
  onOpenServiceGallery
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'كافة الخدمات (8)' },
    { id: 'مسابح', label: 'أغطية المسابح' },
    { id: 'برجولات', label: 'المظلات والبرجولات' },
    { id: 'أدراج', label: 'الأدراج الحلزونية' },
    { id: 'أبواب', label: 'الأبواب والبوابات' },
    { id: 'جلسات', label: 'الجلسات الخارجية' },
    { id: 'ديكورات', label: 'الديكورات والفواصل' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory || (selectedCategory === 'أبواب' && (s.category === 'أبواب' || s.category === 'درابزين' || s.category === 'أسوار')));

  return (
    <div className="space-y-12 pb-16 pt-6">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-xs font-bold text-blue-400">
          <Sparkles className="w-3.5 h-3.5 text-[#84CC16]" />
          <span>الهندسة الفولاذية المتقدمة للفلل</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          خدماتنا الهندسية الـ 8 المتخصصة
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          الصور تتنقل تلقائياً لكل خدمة ويمكنك النقر على الأسهم أو الصور المصغرة للتنقل اليدوي المباشر:
        </p>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/25'
                  : 'bg-[#0B101D] text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Services List Detailed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        {filteredServices.map((service, index) => {
          const serviceImages = service.images || [];
          const hasImages = serviceImages.length > 0;
          const serviceWhatsAppUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(`مرحباً TAJ، أود الاستفسار وطلب تسعير لخدمة: "${service.title}".`)}`;

          return (
            <div
              key={service.id}
              id={service.id}
              className="bg-[#0B101D] border border-slate-800 rounded-2xl overflow-hidden shadow-xl p-5 sm:p-7 transition-all duration-300 hover:border-slate-700"
            >
              {hasImages ? (
                /* Services WITH authentic images: Autoplay slider + specs */
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Visual Side with Autoplay Slider & Direct Manual Controls (5 cols) */}
                  <div className="lg:col-span-5">
                    <AutoServiceImageSlider
                      images={serviceImages}
                      category={service.category}
                      serviceTitle={service.title}
                      onOpenGallery={() => onOpenServiceGallery(service)}
                      aspectClass="aspect-[16/10]"
                      showThumbnails={true}
                    />
                  </div>

                  {/* Details Side (7 cols) */}
                  <div className="lg:col-span-7 space-y-4 text-right">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-[#84CC16] font-bold">
                          خدمة هندسية #{index + 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => onOpenServiceGallery(service)}
                          className="px-2.5 py-1 rounded-md bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                        >
                          <Images className="w-3.5 h-3.5 text-[#84CC16]" />
                          <span>كامل الألبوم ({serviceImages.length} صور)</span>
                        </button>
                      </div>

                      <h2 className="text-lg sm:text-xl font-bold text-white">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {service.fullDesc}
                      </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#84CC16] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Specs Box */}
                    <div className="p-3 rounded-xl bg-[#070B12] border border-slate-800 text-xs space-y-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px]">
                        <span className="text-slate-400 font-semibold flex items-center gap-1">
                          <Layers className="w-3 h-3 text-[#2563EB]" />
                          المواد والخامات:
                        </span>
                        <span className="text-slate-200">{service.specs.materials}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] border-t border-slate-800/80 pt-1.5">
                        <span className="text-slate-400 font-semibold flex items-center gap-1">
                          <Wrench className="w-3 h-3 text-[#84CC16]" />
                          المتانة:
                        </span>
                        <span className="text-slate-200">{service.specs.durability}</span>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-2.5 pt-1">
                      <button
                        onClick={() => onNavigate('contact', service.title)}
                        className="px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-xs shadow-md shadow-[#2563EB]/25 transition-all"
                      >
                        طلب استشارة وعرض سعر
                      </button>

                      <button
                        onClick={() => onOpenServiceGallery(service)}
                        className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-all flex items-center gap-1.5"
                      >
                        <Images className="w-3.5 h-3.5 text-[#84CC16]" />
                        <span>عرض كافة الصور</span>
                      </button>

                      <a
                        href={serviceWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition-all"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        <span>واتساب فوري</span>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                /* Services WITHOUT photos: Strictly NO image slot or empty frame! Pure engineering layout! */
                <div className="space-y-4 text-right">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#84CC16] font-bold mb-1">
                        <Compass className="w-3 h-3" />
                        <span>تصنيع إنشائي حسب المخطط #0{index + 1}</span>
                      </div>
                      <h2 className="text-lg sm:text-xl font-bold text-white">
                        {service.title}
                      </h2>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-slate-300">
                        {service.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#84CC16]/10 text-[#84CC16] border border-[#84CC16]/20 text-xs font-bold">
                        ضمان 10 سنوات
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl">
                    {service.fullDesc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
                    {service.features.map((feat, i) => (
                      <div key={i} className="p-3 rounded-xl bg-[#070B12] border border-slate-800 flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#84CC16] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specs row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 rounded-xl bg-[#070B12] border border-slate-800 text-xs">
                    <div>
                      <span className="block text-slate-400 text-[11px] mb-0.5">المواد والخامات:</span>
                      <span className="font-semibold text-slate-200 text-xs">{service.specs.materials}</span>
                    </div>
                    <div>
                      <span className="block text-slate-400 text-[11px] mb-0.5">المتانة ومقاومة الطقس:</span>
                      <span className="font-semibold text-slate-200 text-xs">{service.specs.durability}</span>
                    </div>
                    <div>
                      <span className="block text-slate-400 text-[11px] mb-0.5">نطاق الاستخدام:</span>
                      <span className="font-semibold text-[#84CC16] text-xs">{service.specs.application}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onNavigate('contact', service.title)}
                      className="px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-xs transition-all"
                    >
                      طلب تسعير ومخطط لهذه الخدمة
                    </button>
                    <a
                      href={serviceWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>استفسار واتساب</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Warranty Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <WarrantyBadge variant="banner" />
      </section>
    </div>
  );
};

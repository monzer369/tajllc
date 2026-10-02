import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronRight, ChevronLeft, MessageCircle, ShieldCheck, Layers, Sparkles, Play, Pause } from 'lucide-react';
import { ServiceItem, CONTACT_INFO } from '../data';

interface ServiceGalleryModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServiceGalleryModal: React.FC<ServiceGalleryModalProps> = ({
  service,
  onClose,
  onRequestQuote,
}) => {
  if (!service) return null;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const images = service.images || [];
  const currentImage = images[activeIndex] || images[0] || null;
  const total = images.length;

  // Autoplay effect: advances every 4 seconds if enabled and multiple photos exist
  useEffect(() => {
    if (!isAutoPlaying || total <= 1) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, total]);

  const handleUserIntervention = (newIndex: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(newIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (total > 0) {
      handleUserIntervention((activeIndex + 1) % total);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (total > 0) {
      handleUserIntervention((activeIndex - 1 + total) % total);
    }
  };

  const whatsappMessage = `مرحباً TAJ، أود الاستفسار عن خدمة: "${service.title}" (صورة الموديل رقم ${activeIndex + 1} من ${images.length}).`;
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#0B101D] border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl max-h-[94vh] flex flex-col text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-[#070B12]/95">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#84CC16]/15 text-[#84CC16] border border-[#84CC16]/30">
              {service.category}
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white truncate max-w-[200px] sm:max-w-md">
              {service.title}
            </h3>
          </div>
          
          <div className="flex items-center gap-3">
            {total > 1 && (
              <button
                type="button"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs flex items-center gap-1.5 transition-colors border border-slate-700"
              >
                {isAutoPlaying ? (
                  <>
                    <Pause className="w-3 h-3 text-[#84CC16]" />
                    <span className="text-[10px]">إيقاف مؤقت</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-blue-400" />
                    <span className="text-[10px]">تشغيل تلقائي</span>
                  </>
                )}
              </button>
            )}

            {total > 0 && (
              <span className="text-xs text-slate-300 font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                {activeIndex + 1} / {total}
              </span>
            )}

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-4">
          {total > 0 ? (
            <div>
              {/* Main Visual Display - Preserves full natural aspect ratio with no cropping */}
              <div className="relative rounded-2xl overflow-hidden bg-[#070B12] border border-slate-800 aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center group select-none">
                {/* Ambient backdrop */}
                {currentImage && (
                  <img
                    src={currentImage}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110 pointer-events-none"
                  />
                )}
                
                <img
                  key={currentImage || activeIndex}
                  src={currentImage || ''}
                  alt={`${service.title} - صورة ${activeIndex + 1}`}
                  className="relative z-10 max-w-full max-h-full w-auto h-auto object-contain transition-all duration-300"
                />

                {/* Nav buttons on image: ALWAYS VISIBLE, HIGH Z-INDEX (z-30), NEVER HIDDEN */}
                {total > 1 && (
                  <div className="absolute inset-y-0 inset-x-3 flex items-center justify-between z-30 pointer-events-none">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-950/85 hover:bg-[#2563EB] active:scale-90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-2xl"
                      aria-label="الصورة السابقة"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-950/85 hover:bg-[#2563EB] active:scale-90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-2xl"
                      aria-label="الصورة التالية"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                  </div>
                )}

                <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md text-[11px] text-slate-200 border border-slate-800 flex items-center justify-between z-20">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#84CC16]" />
                    <span>ضمان 10 سنوات على كافة الهياكل</span>
                  </span>
                  <span className="font-mono text-slate-400">موديل رقم {activeIndex + 1} من {total}</span>
                </div>
              </div>

              {/* Thumbnails row */}
              {total > 1 && (
                <div className="pt-3">
                  <span className="text-[11px] text-slate-400 block mb-2 font-medium">
                    انقر على أي صورة للانتقال المباشر ({total} صور متوفرة لهذه الخدمة):
                  </span>
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleUserIntervention(idx)}
                        className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all duration-200 ${
                          activeIndex === idx
                            ? 'border-[#84CC16] scale-105 shadow-md shadow-[#84CC16]/20 ring-2 ring-[#84CC16]/30'
                            : 'border-slate-800 hover:border-slate-600 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt={`صورة مصغرة ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* If service has NO images: Architectural blueprint view */
            <div className="p-8 rounded-2xl bg-[#070B12] border border-dashed border-[#2563EB]/40 blueprint-grid text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center text-[#2563EB] mx-auto">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">
                تصنيع إنشائي مخصص بالكامل 100%
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                لا نعتمد نماذج جاهزة لهذه الخدمة؛ حيث يتم تفصيل كافة المقاسات وارتفاعات الدرابزين والأسوار حسب اشتراطات استشاري الفيلا والمخططات المعمارية المعتمدة.
              </p>
            </div>
          )}

          {/* Service Specs summary */}
          <div className="p-4 rounded-xl bg-[#0E1628] border border-slate-800 text-xs space-y-2">
            <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#84CC16]" />
              <span>المواصفات الفنية للخدمة</span>
            </h4>
            <p className="text-slate-300 leading-relaxed text-xs">
              {service.fullDesc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-800 text-[11px] text-slate-400">
              <div><strong className="text-slate-200">الخامات:</strong> {service.specs.materials}</div>
              <div><strong className="text-slate-200">المتانة:</strong> {service.specs.durability}</div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-slate-800 bg-[#070B12]/95 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onRequestQuote(service.title);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-xs shadow-md transition-all"
          >
            طلب استشارة وعرض سعر لهذه الخدمة
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>استفسار واتساب عن هذا الموديل</span>
          </a>
        </div>
      </div>
    </div>
  );
};

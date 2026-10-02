import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, Images, Play, Pause, Maximize2 } from 'lucide-react';

interface AutoServiceImageSliderProps {
  images: string[];
  category: string;
  serviceTitle: string;
  onOpenGallery?: () => void;
  aspectClass?: string;
  showThumbnails?: boolean;
}

export const AutoServiceImageSlider: React.FC<AutoServiceImageSliderProps> = ({
  images,
  category,
  serviceTitle,
  onOpenGallery,
  aspectClass = 'aspect-[16/10]',
  showThumbnails = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalImages = images.length;
  const currentImage = images[currentIndex] || images[0] || '';

  // Autoplay effect: advances every 3.5 seconds if isAutoPlaying and totalImages > 1
  useEffect(() => {
    if (!isAutoPlaying || totalImages <= 1) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, 3500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, totalImages]);

  // Handle user manual intervention
  const handleUserIntervention = (newIndex: number) => {
    setIsAutoPlaying(false); // Switch to manual control
    setCurrentIndex(newIndex);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleUserIntervention((currentIndex + 1) % totalImages);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleUserIntervention((currentIndex - 1 + totalImages) % totalImages);
  };

  const handleToggleAutoPlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAutoPlaying((prev) => !prev);
  };

  if (totalImages === 0) return null;

  return (
    <div className="space-y-2.5 w-full">
      {/* Main Image Viewport */}
      <div 
        onClick={() => {
          setIsAutoPlaying(false);
          if (onOpenGallery) onOpenGallery();
        }}
        className={`group relative rounded-2xl overflow-hidden bg-[#070B12] border border-slate-700/80 shadow-2xl flex items-center justify-center cursor-pointer ${aspectClass} select-none`}
      >
        {/* Ambient Blur Backdrop */}
        {currentImage && (
          <img
            src={currentImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-25 scale-110 pointer-events-none transition-all duration-700"
          />
        )}

        {/* Clean Sharp Image (Preserves 100% natural aspect ratio with NO cropping) */}
        <img
          key={currentImage}
          src={currentImage}
          alt={`${serviceTitle} - صورة ${currentIndex + 1}`}
          className="relative z-10 max-w-full max-h-full w-auto h-auto object-contain transition-all duration-500 group-hover:scale-[1.02]"
        />

        {/* Top Badges (Category & Counter & Mode) - z-20 */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-20 pointer-events-none">
          {/* Category Tag */}
          <span className="px-2.5 py-1 rounded-lg bg-[#0F172A]/90 backdrop-blur-md text-[11px] font-bold text-[#84CC16] border border-[#84CC16]/30 shadow-md">
            {category}
          </span>

          {/* Autoplay status & Fullscreen indicator */}
          <div className="flex items-center gap-1.5 pointer-events-auto">
            {totalImages > 1 && (
              <button
                type="button"
                onClick={handleToggleAutoPlay}
                title={isAutoPlaying ? 'إيقاف التنقل التلقائي' : 'تشغيل التنقل التلقائي'}
                className="px-2 py-0.5 rounded-md bg-black/75 hover:bg-slate-800 text-slate-200 border border-white/10 text-[10px] flex items-center gap-1 backdrop-blur-md transition-colors"
              >
                {isAutoPlaying ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16] animate-pulse"></span>
                    <span>تلقائي</span>
                  </>
                ) : (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    <span>يدوي</span>
                  </>
                )}
              </button>
            )}

            {/* Counter */}
            <span className="px-2.5 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[11px] font-mono text-slate-200 border border-white/10 shadow-md">
              {currentIndex + 1} / {totalImages}
            </span>
          </div>
        </div>

        {/* Navigation Arrows: ALWAYS VISIBLE, HIGH CONTRAST, HIGH Z-INDEX (z-30), NEVER HIDDEN */}
        {totalImages > 1 && (
          <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between z-30 pointer-events-none">
            {/* Previous Button (Right side in RTL) */}
            <button
              type="button"
              onClick={handlePrev}
              className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-950/85 hover:bg-[#2563EB] active:scale-90 text-white flex items-center justify-center border border-white/20 shadow-2xl backdrop-blur-md transition-all duration-200 group-hover:scale-110"
              aria-label="الصورة السابقة"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Next Button (Left side in RTL) */}
            <button
              type="button"
              onClick={handleNext}
              className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-950/85 hover:bg-[#2563EB] active:scale-90 text-white flex items-center justify-center border border-white/20 shadow-2xl backdrop-blur-md transition-all duration-200 group-hover:scale-110"
              aria-label="الصورة التالية"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        )}

        {/* Bottom Bar: Quick Hint & Zoom Trigger - z-20 */}
        <div className="absolute bottom-2.5 inset-x-2.5 px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between z-20">
          <span className="flex items-center gap-1.5 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]"></span>
            <span className="truncate">انقر للتكبير وعرض كامل الألبوم</span>
          </span>
          <span className="inline-flex items-center gap-1 text-[#84CC16] font-bold shrink-0">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>عرض فوري</span>
          </span>
        </div>
      </div>

      {/* Thumbnails Row: ALWAYS AVAILABLE for direct click */}
      {showThumbnails && totalImages > 1 && (
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>نماذج الموديلات ({totalImages} صور):</span>
            <span className="text-[10px] text-slate-500 font-mono">انقر لأي صورة للتبديل</span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            {images.map((imgUrl, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleUserIntervention(idx);
                }}
                className={`relative w-14 h-10 sm:w-16 sm:h-11 rounded-lg overflow-hidden shrink-0 border-2 transition-all duration-200 ${
                  currentIndex === idx
                    ? 'border-[#84CC16] scale-105 shadow-md shadow-[#84CC16]/20 opacity-100 ring-2 ring-[#84CC16]/30'
                    : 'border-slate-800 hover:border-slate-600 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={imgUrl} alt={`مصغرة ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

import React from 'react';
import { ShieldCheck, Award, Hammer, Clock } from 'lucide-react';

interface WarrantyBadgeProps {
  variant?: 'banner' | 'card' | 'inline';
}

export const WarrantyBadge: React.FC<WarrantyBadgeProps> = ({ variant = 'card' }) => {
  if (variant === 'inline') {
    return (
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 text-[11px] font-semibold text-blue-400">
        <ShieldCheck className="w-3.5 h-3.5 text-[#84CC16]" />
        <span>ضمان إنشائي معتمد لمدة 10 سنوات</span>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] border border-[#2563EB]/30 p-6 md:p-8 shadow-xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#84CC16]/10 rounded-full blur-3xl pointer-events-none -ml-16 -mb-16"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-3 text-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#84CC16]/15 border border-[#84CC16]/30 text-xs font-bold text-[#84CC16]">
              <Award className="w-3.5 h-3.5" />
              <span>معايير هندسية معتمدة للفلل الراقية</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              ضمان حقيقي لمدة <span className="text-[#84CC16]">10 سنوات</span> على كافة أعمالنا الإنشائية
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              تلتزم شركة TAJ بتقديم حلول مصنعة وفق أعلى المعايير الفنية، مع عقد رسمي بضمان 10 سنوات يغطي السلامة الهيكلية الإنشائية، مقاومة الصدأ والتآكل، واستقرار الطلاء في المناخ الإماراتي.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span className="text-xs font-semibold text-slate-200">سلامة هيكلية وثبات إنشائي</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <Hammer className="w-4 h-4 text-[#84CC16] shrink-0" />
                <span className="text-xs font-semibold text-slate-200">جلفنة ودهان ضد الرطوبة</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <Clock className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span className="text-xs font-semibold text-slate-200">دعم هندسي وصيانة فورية</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-36 h-36 md:w-40 md:h-40 rounded-full border-2 border-dashed border-[#84CC16]/40 flex flex-col items-center justify-center p-4 text-center bg-[#0B1120] shadow-[0_0_30px_rgba(37,99,235,0.2)]">
              <div className="text-2xl md:text-3xl font-black text-white font-mono">
                10
              </div>
              <div className="text-sm font-bold text-[#84CC16]">
                سـنـوات
              </div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mt-0.5">
                ضمان إنشائي موثق
              </div>
              <div className="mt-1 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#84CC16] text-[10px]">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="p-4 rounded-xl bg-[#0F172A] border border-[#2563EB]/20 shadow-md relative overflow-hidden group hover:border-[#84CC16]/40 transition-all duration-300">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#2563EB]/15 border border-[#2563EB]/30 flex items-center justify-center shrink-0 text-[#84CC16]">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white mb-0.5 flex items-center gap-1.5">
            ضمان 10 سنوات
            <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded bg-[#84CC16]/20 text-[#84CC16]">موثق</span>
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            نضمن جودة الحديد المجلفن ومقاومة الصدأ والحرارة المرتفعة.
          </p>
        </div>
      </div>
    </div>
  );
};

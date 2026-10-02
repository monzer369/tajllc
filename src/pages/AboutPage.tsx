import React from 'react';
import { 
  ShieldCheck, 
  Compass, 
  Wrench, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  Phone,
  MessageCircle,
  Eye,
  Target
} from 'lucide-react';
import { IMAGES, CONTACT_INFO } from '../data';
import { PageId } from '../components/Navbar';
import { WarrantyBadge } from '../components/WarrantyBadge';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-14 pb-16 pt-6">
      {/* 1. Header & Identity */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-right">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 text-xs font-bold text-blue-400">
              <Sparkles className="w-3.5 h-3.5 text-[#84CC16]" />
              <span>نبذة عن شركة TAJ</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              الهندسة الفولاذية والحلول المعمارية المخصصة في دولة الإمارات
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              تأسست شركة <strong className="text-white font-bold">TAJ</strong> لترسيخ معيار استثنائي من الجودة في قطاع تصنيع وتنفيذ الأعمال الحديدية والهندسية للفلل والمشاريع السكنية الراقية. نحن نجمع بين الصلابة الإنشائية القصوى والأناقة المعمارية الفاخرة (<span className="text-[#84CC16] font-semibold">Engineering Luxury</span>).
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              نعمل انطلاقاً من إمارة دبي لتغطية كافة إمارات الدولة، مقدمين حلولاً مخصصة تبتعد عن المنتجات الجاهزة والنمطية؛ حيث يتم تصميم كل عمل وتفصيله وفق المقاسات المحددة للفيلا واشتراطات المالك والاستشاري الهندسي.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>المقر: دبي وتغطية لكافة إمارات الدولة</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-[#84CC16]" />
                <span>ضمان إنشائي معتمد لمدة 10 سنوات</span>
              </div>
            </div>
          </div>

          {/* Visual: Logo & Craftsmanship showcase (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-[#0F172A] border border-slate-800 p-8 shadow-2xl text-center space-y-6 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#2563EB]/15 rounded-full blur-2xl pointer-events-none"></div>

              <div className="relative z-10">
                <img
                  src={IMAGES.logo}
                  alt="شعار TAJ الرسمي"
                  className="h-28 mx-auto object-contain drop-shadow-[0_10px_20px_rgba(37,99,235,0.3)] mb-4"
                />
                <h3 className="text-2xl font-black text-white">TAJ | تاج</h3>
                <p className="text-xs text-slate-400 mt-1">
                  للأعمال الحديدية والحلول الهندسية المخصصة
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800 text-right">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                  <span className="block text-[11px] text-slate-400">التخصص الأساسي</span>
                  <span className="block text-xs font-bold text-white mt-0.5">فلل وقصور سكنية راقية</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                  <span className="block text-[11px] text-slate-400">فلسفة التصنيع</span>
                  <span className="block text-xs font-bold text-[#84CC16] mt-0.5">جلفنة ودهان حراري مقاوم</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Vision, Mission & Core Values */}
      <section className="bg-slate-900/40 border-y border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="p-8 rounded-3xl bg-[#0F172A] border border-slate-800 text-right space-y-4 hover:border-[#2563EB]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center text-[#2563EB]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">رؤيتنا الهندسية</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                أن نكون الوجهة الأولى والموثوقة لأصحاب الفلل والمهندسين المعماريين في دولة الإمارات عند البحث عن حلول حديدية ومعدنية متقنة تجمع بين القوة الفولاذية والجمال الإنشائي المعاصر.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 rounded-3xl bg-[#0F172A] border border-slate-800 text-right space-y-4 hover:border-[#84CC16]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#84CC16]/20 border border-[#84CC16]/40 flex items-center justify-center text-[#84CC16]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">رسالتنا في التصنيع</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                تنفيذ كل قطعة حديدية كتحفة هندسية فريدة ومستدامة، تعتمد على خامات مجلفنة مدروسة تقاوم عوامل التعرية والحرارة وتوفر للمالك راحة بال مطلقة مدعومة بضمان 10 سنوات صريح.
              </p>
            </div>

            {/* UAE Climate Adaptation */}
            <div className="p-8 rounded-3xl bg-[#0F172A] border border-slate-800 text-right space-y-4 hover:border-[#2563EB]/50 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">مقاومة المناخ الإماراتي</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                تطوير معالجات خاصة للحديد عبر الغلفنة الساخنة والطلاءات الكهروسكونية المزدوجة التي تمنع الصدأ تماماً في البيئات الساحلية ودرجات الحرارة والرطوبة العالية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Engineering Precision & Quality Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0F172A] border border-slate-800 shadow-2xl">
          <div className="max-w-3xl text-right space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#84CC16]/15 border border-[#84CC16]/30 text-xs font-bold text-[#84CC16]">
              <span>معايير الجودة والحرفية</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              كيف نضمن أعلى درجات الدقة في كل مشروع؟
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              نلتزم بمنهجية عمل هندسية واضحة تبدأ من دراسة الموقع والمخططات حتى التسليم والتركيب النهائي:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-right space-y-2">
              <span className="text-2xl font-black text-[#2563EB] font-mono">01</span>
              <h4 className="text-base font-bold text-white">معاينة ورفع مقاسات</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                زيارة ميدانية للموقع ورفع المقاسات الإنشائية بدقة مليمترية لضمان تطابق الهيكل مع مبنى الفيلا.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-right space-y-2">
              <span className="text-2xl font-black text-[#84CC16] font-mono">02</span>
              <h4 className="text-base font-bold text-white">حساب الأحمال الهندسية</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                دراسة الإجهادات وسرعات الرياح والأوزان (خاصة في أغطية المسابح والأدراج الحلزونية).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-right space-y-2">
              <span className="text-2xl font-black text-[#2563EB] font-mono">03</span>
              <h4 className="text-base font-bold text-white">جلفنة ودهان حراري</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                غمس الحديد في أحواض الجلفنة الساخنة ودهانه بفرن حراري لضمان مظهر فاخر ومقاومة تامة للتآكل.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-right space-y-2">
              <span className="text-2xl font-black text-[#84CC16] font-mono">04</span>
              <h4 className="text-base font-bold text-white">تركيب محكم وضمان 10 سنوات</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                فريق فني متخصص ينفذ التركيب مع تقديم شهادة الضمان الإنشائي المعتمدة للمالك.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Warranty Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <WarrantyBadge variant="banner" />
      </section>

      {/* 5. Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white">هل تود مناقشة مشروعك مع فريقنا؟</h3>
          <p className="text-slate-400 text-sm">
            تواصل معنا مباشرة لنبدأ خطوات الدراسة الهندسية وتزويدك بالخيارات الأنسب لمشروعك السكني.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-sm transition-all"
            >
              الانتقال إلى صفحة التواصل
            </button>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent('مرحباً TAJ، أود الاستفسار عن خدماتكم الهندسية.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>محادثة فورية</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

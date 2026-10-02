import React from 'react';
import { Phone, MessageCircle, MapPin, ShieldCheck, ChevronLeft } from 'lucide-react';
import { IMAGES, CONTACT_INFO, SERVICES } from '../data';
import { PageId } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0B1120] border-t border-slate-800 text-slate-400 relative overflow-hidden">
      {/* Decorative gradient lines */}
      <div className="h-1 w-full bg-gradient-to-r from-[#2563EB] via-[#84CC16] to-[#2563EB]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src={IMAGES.logo}
                alt="TAJ Logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <h3 className="text-base font-black text-white tracking-wider">
                  TAJ <span className="text-[#2563EB]">|</span> تاج
                </h3>
                <p className="text-[11px] text-slate-400">
                  للأعمال الحديدية والحلول الهندسية المخصصة
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              شركة متخصصة في تصنيع وتنفيذ الأعمال الحديدية الدقيقة والحلول الإنشائية المخصصة للفلل والقصور والمشاريع السكنية الراقية في دولة الإمارات العربية المتحدة. دقة هندسية، خامات مجلفنة، وضمان حقيقي لمدة 10 سنوات.
            </p>

            <div className="inline-flex items-center gap-2 p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#84CC16] shrink-0" />
              <span>ضمان إنشائي معتمد لمدة 10 سنوات على كافة الهياكل</span>
            </div>
          </div>

          {/* Col 2: Fast Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-r-2 border-[#2563EB] pr-3">
              روابط الموقع
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white hover:text-[#84CC16] transition-colors flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-3.5 h-3.5 text-slate-500" />
                  <span>الرئيسية</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white hover:text-[#84CC16] transition-colors flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-3.5 h-3.5 text-slate-500" />
                  <span>الخدمات الهندسية</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-white hover:text-[#84CC16] transition-colors flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-3.5 h-3.5 text-slate-500" />
                  <span>معرض الأعمال</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white hover:text-[#84CC16] transition-colors flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-3.5 h-3.5 text-slate-500" />
                  <span>من نحن</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white hover:text-[#84CC16] transition-colors flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-3.5 h-3.5 text-slate-500" />
                  <span>تواصل معنا</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-r-2 border-[#84CC16] pr-3">
              الخدمات المعتمدة
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {SERVICES.map((s) => (
                <li key={s.id} className="truncate">
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-white transition-colors text-right truncate block max-w-full"
                  >
                    • {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Social (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-r-2 border-[#2563EB] pr-3">
              بيانات الاتصال والتواصل
            </h4>
            <div className="space-y-3 text-xs md:text-sm">
              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>{CONTACT_INFO.location}</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
                <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="hover:text-white font-mono" dir="ltr">
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-mono"
                  dir="ltr"
                >
                  WhatsApp: {CONTACT_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-400 block mb-2">تابع منصاتنا الرسمية:</span>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href={CONTACT_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-[#2563EB] text-slate-300 hover:text-white border border-slate-800 text-xs font-bold transition-all"
                  aria-label="صفحة فيسبوك"
                >
                  Facebook
                </a>

                {/* Instagram */}
                <a
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white border border-slate-800 text-xs font-bold transition-all"
                  aria-label="حساب إنستغرام"
                >
                  Instagram
                </a>

                {/* Snapchat */}
                <a
                  href={CONTACT_INFO.snapchat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-yellow-400 hover:text-slate-900 text-slate-300 border border-slate-800 text-xs font-bold transition-all"
                  aria-label="حساب سناب شات"
                >
                  Snapchat
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} شركة TAJ للأعمال الحديدية والحلول الهندسية. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#84CC16]"></span>
            <span>مصممة للمشاريع السكنية الراقية والفلل في الإمارات</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

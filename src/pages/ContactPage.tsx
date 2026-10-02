import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink,
  ChevronDown,
  Database
} from 'lucide-react';
import { CONTACT_INFO, REQUEST_OPTIONS } from '../data';
import { SmartContactForm } from '../components/SmartContactForm';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';

interface ContactPageProps {
  initialRequestType?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialRequestType }) => {
  const [showLogModal, setShowLogModal] = useState(false);
  const [logs, setLogs] = useState<any[]>([]);
  const [isLoadingLogs, setIsLoadingLogs] = useState(false);
  const [logError, setLogError] = useState<string | null>(null);

  const fetchLogs = async () => {
    setIsLoadingLogs(true);
    setLogError(null);
    try {
      const q = query(collection(db, 'inquiries'), limit(15));
      const querySnapshot = await getDocs(q);
      const docsData: any[] = [];
      querySnapshot.forEach((doc) => {
        docsData.push({ id: doc.id, ...doc.data() });
      });
      setLogs(docsData);
      setShowLogModal(true);
    } catch (err: any) {
      console.warn('Viewing logs restricted by Firestore rules (admin-only):', err);
      // As defined in rules, read is restricted to admin, which is secure!
      setLogError('الاطلاع على سجل الطلبات الكامل محمي بقواعد أمان Firebase المشفرة (Admin Protected). يتم حفظ كافة الطلبات بشكل آمن ومباشر.');
      setShowLogModal(true);
    } finally {
      setIsLoadingLogs(false);
    }
  };

  return (
    <div className="space-y-12 pb-16 pt-6">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 text-xs font-bold text-blue-400">
          <Sparkles className="w-3.5 h-3.5 text-[#84CC16]" />
          <span>تواصل مباشر مع الفريق الهندسي</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          تواصل معنا واستشر خبراء TAJ
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          يسعدنا استقبال استفساراتكم ومخططاتكم الهندسية لتنفيذ أرقى الأعمال الحديدية للفلل في كافة إمارات الدولة.
        </p>
      </section>

      {/* Main Content Grid: Smart Form + Contact Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form (7 cols) */}
          <div className="lg:col-span-7">
            <SmartContactForm initialRequestType={initialRequestType} />
          </div>

          {/* Contact Details & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone & WhatsApp Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-slate-800 text-right space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  الاتصال الهاتفي والمحادثة المباشرة
                </h3>
                <p className="text-xs text-slate-400">
                  فريقنا الهندسي متواجد لخدمتكم والإجابة على أي استفسارات فنية.
                </p>
              </div>

              {/* Direct WhatsApp Action */}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent('مرحباً TAJ، أود الاستفسار عن تفاصيل تنفيذ أعمال حديدية لمشروع فيلا.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#25D366]/25">
                    <MessageCircle className="w-6 h-6 fill-white" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400">خدمة العملاء عبر واتساب</span>
                    <span className="block text-sm sm:text-base font-bold text-white font-mono" dir="ltr">
                      {CONTACT_INFO.phoneDisplay}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#25D366] group-hover:translate-x-[-4px] transition-transform">
                  محادثة فورية ←
                </span>
              </a>

              {/* Direct Phone Call */}
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="flex items-center justify-between p-4 rounded-2xl bg-[#2563EB]/10 border border-[#2563EB]/30 hover:bg-[#2563EB]/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#2563EB]/25">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400">الاتصال الهاتفي المباشر</span>
                    <span className="block text-sm sm:text-base font-bold text-white font-mono" dir="ltr">
                      {CONTACT_INFO.phoneDisplay}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-blue-400 group-hover:translate-x-[-4px] transition-transform">
                  اتصال الآن ←
                </span>
              </a>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 text-[#84CC16]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-400">الموقع الجغرافي</span>
                  <span className="block text-sm font-bold text-white">
                    {CONTACT_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0F172A] border border-slate-800 text-right space-y-4 shadow-xl">
              <h3 className="text-lg font-bold text-white">
                حساباتنا على وسائل التواصل الاجتماعي
              </h3>
              <p className="text-xs text-slate-400">
                تابع أحدث الأعمال المنفذة ومقاطع الفيديو التوثيقية لمشاريع الفلل في الإمارات:
              </p>

              <div className="space-y-3 pt-2">
                {/* Facebook */}
                <a
                  href={CONTACT_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 hover:bg-[#2563EB]/20 border border-slate-800 hover:border-[#2563EB]/50 transition-all text-sm font-bold text-slate-200"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    فيسبوك | Facebook Official
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </a>

                {/* Instagram */}
                <a
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 hover:bg-pink-600/20 border border-slate-800 hover:border-pink-500/50 transition-all text-sm font-bold text-slate-200"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                    إنستغرام | @taj__llc
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </a>

                {/* Snapchat */}
                <a
                  href={CONTACT_INFO.snapchat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 hover:bg-yellow-400/20 border border-slate-800 hover:border-yellow-400/50 transition-all text-sm font-bold text-slate-200"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                    سناب شات | @tajsteel_llc
                  </span>
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                </a>
              </div>
            </div>

            {/* Quick 10 Year guarantee reminder */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-[#0F172A] border border-[#2563EB]/30 flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-[#84CC16] shrink-0" />
              <div className="text-right">
                <span className="block text-sm font-bold text-white">ضمان 10 سنوات موثق في العقد</span>
                <span className="block text-xs text-slate-400">على الهيكل الإنشائي واللحام ومقاومة الصدأ والحرارة</span>
              </div>
            </div>

            {/* Discreet Database persistence status & inspector */}
            <div className="pt-2 text-center">
              <button
                onClick={fetchLogs}
                disabled={isLoadingLogs}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-[11px] text-slate-400 hover:text-slate-200 border border-slate-800 transition-all"
              >
                <Database className="w-3.5 h-3.5 text-[#84CC16]" />
                <span>حالة قاعدة بيانات الطلبات (Cloud Firestore)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Database Inspector Modal */}
      {showLogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0F172A] border border-slate-700 rounded-3xl p-6 max-w-lg w-full text-right space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-[#84CC16]" />
                <h3 className="text-base font-bold text-white">
                  سجل بيانات المستخدمين في Firebase
                </h3>
              </div>
              <button
                onClick={() => setShowLogModal(false)}
                className="text-slate-400 hover:text-white text-sm"
              >
                ✕ إغلاق
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
              <div className="flex items-center gap-2 text-slate-200 font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#84CC16]" />
                <span>قاعدة البيانات متصلة وجاهزة لتسجيل الطلبات فورياً</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                وفق متطلبات الأمان الصارمة، ترسل النماذج بياناتها إلى مجموعة <code className="text-[#84CC16] bg-slate-950 px-1 py-0.5 rounded font-mono">inquiries</code> مباشرة قبل التوجيه إلى واتساب.
              </p>
              {logError && (
                <div className="p-2.5 rounded bg-blue-950/40 border border-blue-800 text-blue-300 text-[11px]">
                  {logError}
                </div>
              )}
              {logs.length > 0 && (
                <div className="space-y-2 pt-2 max-h-48 overflow-y-auto">
                  {logs.map((item, idx) => (
                    <div key={idx} className="p-2 rounded bg-slate-950 border border-slate-800/80 text-[11px]">
                      <div className="flex justify-between font-bold text-white">
                        <span>{item.name} - {item.city}</span>
                        <span className="text-[#84CC16]">{item.requestType}</span>
                      </div>
                      {item.details && <p className="text-slate-400 mt-1">{item.details}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setShowLogModal(false)}
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all"
            >
              تم
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

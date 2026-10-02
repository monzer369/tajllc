import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageCircle, Sparkles, Building2, MapPin, User, FileText } from 'lucide-react';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { REQUEST_OPTIONS, UAE_CITIES, CONTACT_INFO } from '../data';

interface SmartContactFormProps {
  initialRequestType?: string;
  onSuccess?: () => void;
}

export const SmartContactForm: React.FC<SmartContactFormProps> = ({
  initialRequestType,
  onSuccess,
}) => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('دبي');
  const [customCity, setCustomCity] = useState('');
  const [isOtherCity, setIsOtherCity] = useState(false);
  const [requestType, setRequestType] = useState<string>(
    initialRequestType && REQUEST_OPTIONS.includes(initialRequestType as any)
      ? initialRequestType
      : REQUEST_OPTIONS[0]
  );
  const [details, setDetails] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    city: string;
    requestType: string;
    details: string;
    whatsappUrl: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // If requestType is 'استفسار آخر', details field is strictly required
  const isOtherRequest = requestType === 'استفسار آخر';
  const isDetailsRequired = isOtherRequest;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Client-side validations
    const finalName = name.trim();
    const finalCity = isOtherCity ? customCity.trim() : city.trim();
    const finalDetails = details.trim();

    if (!finalName || finalName.length < 2) {
      setErrorMessage('يرجى إدخال اسم كريم (حرفان على الأقل).');
      return;
    }

    if (!finalCity || finalCity.length < 2) {
      setErrorMessage('يرجى اختيار أو كتابة المدينة داخل الإمارات.');
      return;
    }

    if (!requestType) {
      setErrorMessage('يرجى تحديد نوع الطلب المطلوب.');
      return;
    }

    if (isDetailsRequired && (!finalDetails || finalDetails.length < 3)) {
      setErrorMessage('عند اختيار "استفسار آخر"، يرجى توضيح تفاصيل استفسارك.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Generate compliant ID (matches regex ^[a-zA-Z0-9_\-]+$)
      const randomSuffix = Math.random().toString(36).substring(2, 10);
      const inquiryId = `inq_${Date.now()}_${randomSuffix}`;

      // 2. Prepare payload conforming to firebase-blueprint.json & firestore.rules
      const payload: Record<string, any> = {
        name: finalName,
        city: finalCity,
        requestType: requestType,
        createdAt: serverTimestamp(),
      };

      if (finalDetails) {
        payload.details = finalDetails;
      }

      // 3. Save to Firebase Cloud Firestore first
      const docRef = doc(db, 'inquiries', inquiryId);
      await setDoc(docRef, payload);

      // 4. Construct WhatsApp Message matching user specification
      // Format: مرحباً TAJ، الاسم: [الاسم]، المدينة: [المدينة]، نوع الطلب: [الطلب]، التفاصيل: [النص الحر]
      const freeTextDetails = finalDetails || 'بدون تفاصيل إضافية';
      const whatsappMessage = `مرحباً TAJ، الاسم: ${finalName}، المدينة: ${finalCity}، نوع الطلب: ${requestType}، التفاصيل: ${freeTextDetails}`;
      const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

      setSubmittedData({
        name: finalName,
        city: finalCity,
        requestType,
        details: finalDetails,
        whatsappUrl,
      });

      // 5. Open WhatsApp directly
      try {
        window.open(whatsappUrl, '_blank');
      } catch (err) {
        console.warn('Direct popup prevented, link provided in UI', err);
      }

      if (onSuccess) {
        onSuccess();
      }
    } catch (err: unknown) {
      console.error('Error saving inquiry:', err);
      setErrorMessage('حدث خطأ أثناء حفظ الطلب في قاعدة البيانات. يمكنك التواصل معنا مباشرة عبر واتساب.');
      try {
        handleFirestoreError(err, OperationType.CREATE, 'inquiries');
      } catch (e) {
        // Logged conforming to guidelines
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setName('');
    setCity('دبي');
    setCustomCity('');
    setIsOtherCity(false);
    setRequestType(REQUEST_OPTIONS[0]);
    setDetails('');
    setSubmittedData(null);
    setErrorMessage(null);
  };

  return (
    <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-xl relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#84CC16]/10 rounded-full blur-3xl pointer-events-none -ml-16 -mb-16"></div>

      {submittedData ? (
        <div className="text-center py-6 relative z-10">
          <div className="w-12 h-12 rounded-full bg-[#84CC16]/20 border border-[#84CC16]/40 text-[#84CC16] flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-7 h-7" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            تم تسجيل طلبك بنجاح في النظام!
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto mb-5 leading-relaxed">
            تم حفظ تفاصيل مشروعك في قاعدة بيانات TAJ، وجارٍ استكمال المحادثة الهندسية المباشرة معك عبر واتساب.
          </p>

          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 max-w-md mx-auto mb-6 text-right text-xs space-y-2">
            <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
              <span className="text-slate-400">الاسم الكريم:</span>
              <span className="text-white font-semibold">{submittedData.name}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
              <span className="text-slate-400">المدينة:</span>
              <span className="text-white font-semibold">{submittedData.city}</span>
            </div>
            <div className="flex justify-between border-b border-slate-800/80 pb-1.5">
              <span className="text-slate-400">نوع الطلب:</span>
              <span className="text-[#84CC16] font-bold">{submittedData.requestType}</span>
            </div>
            {submittedData.details && (
              <div className="pt-1">
                <span className="text-slate-400 block mb-1">التفاصيل:</span>
                <p className="text-slate-200 bg-slate-950 p-2 rounded-lg border border-slate-800/60 text-xs">
                  {submittedData.details}
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={submittedData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>متابعة المحادثة عبر واتساب الآن</span>
            </a>

            <button
              onClick={handleReset}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-all duration-200"
            >
              تقديم طلب جديد
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
          <div className="border-b border-slate-800 pb-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 text-xs font-bold text-blue-400 mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#84CC16]" />
              <span>نموذج الاستشارة الهندسية المباشرة</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              ابدأ مشروعك الفاخر مع <span className="text-[#2563EB]">TAJ</span>
            </h3>
            <p className="text-slate-400 text-xs mt-0.5">
              املأ الحقول التالية لنقوم بحفظ طلبك والتواصل الفوري معك عبر واتساب لدراسة المخططات.
            </p>
          </div>

          {errorMessage && (
            <div className="flex items-center gap-3 p-4 rounded-xl bg-red-950/50 border border-red-800/80 text-red-300 text-xs md:text-sm">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Field 1: الاسم */}
            <div>
              <label htmlFor="client-name" className="block text-xs font-bold text-slate-300 mb-2 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#84CC16]" />
                <span>الاسم الكريم</span>
                <span className="text-red-400">*</span>
              </label>
              <input
                id="client-name"
                type="text"
                required
                maxLength={100}
                placeholder="أدخل اسمك أو اسم العائلة"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent text-sm transition-all"
              />
            </div>

            {/* Field 2: المدينة */}
            <div>
              <label htmlFor="client-city" className="block text-xs font-bold text-slate-300 mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#84CC16]" />
                <span>المدينة (الإمارات)</span>
                <span className="text-red-400">*</span>
              </label>
              <div className="space-y-2">
                <select
                  id="client-city"
                  value={isOtherCity ? 'other' : city}
                  onChange={(e) => {
                    if (e.target.value === 'other') {
                      setIsOtherCity(true);
                    } else {
                      setIsOtherCity(false);
                      setCity(e.target.value);
                    }
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent text-sm transition-all"
                >
                  {UAE_CITIES.map((c) => (
                    <option key={c} value={c} className="bg-slate-900 text-white">
                      {c}
                    </option>
                  ))}
                  <option value="other" className="bg-slate-900 text-white">
                    منطقة / مدينة أخرى داخل الإمارات
                  </option>
                </select>

                {isOtherCity && (
                  <input
                    type="text"
                    required
                    maxLength={100}
                    placeholder="اكتب اسم المدينة أو المنطقة (مثلاً: جبل علي، مصفح...)"
                    value={customCity}
                    onChange={(e) => setCustomCity(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-[#2563EB] text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Field 3: نوع الطلب (12 options) */}
          <div>
            <label htmlFor="client-request-type" className="block text-xs font-bold text-slate-300 mb-2 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-[#84CC16]" />
              <span>نوع الطلب أو الخدمة الهندسية المطلوبة</span>
              <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <select
                id="client-request-type"
                value={requestType}
                onChange={(e) => setRequestType(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white font-medium focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent text-sm transition-all"
              >
                {REQUEST_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-slate-900 text-white py-1">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <p className="text-[11px] text-slate-400 mt-1.5">
              اختر العمل الهندسي الذي ترغب بتنفيذه في الفيلا أو المشروع السكني.
            </p>
          </div>

          {/* Field 4: التفاصيل (Optional if specific option, Required if 'استفسار آخر') */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="client-details" className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#84CC16]" />
                <span>التفاصيل والمواصفات</span>
                {isDetailsRequired ? (
                  <span className="text-red-400 text-xs">(إلزامي لاستفسار آخر) *</span>
                ) : (
                  <span className="text-slate-400 text-[11px] font-normal">(اختياري)</span>
                )}
              </label>

              {isDetailsRequired && (
                <span className="text-[11px] text-[#84CC16] font-semibold bg-[#84CC16]/10 px-2 py-0.5 rounded">
                  يرجى ذكر طبيعة طلبك
                </span>
              )}
            </div>

            <textarea
              id="client-details"
              rows={4}
              maxLength={2000}
              required={isDetailsRequired}
              placeholder={
                isDetailsRequired
                  ? 'يرجى كتابة تفاصيل استفسارك أو نوع العمل الخاص الذي ترغب بتنفيذه...'
                  : 'يمكنك كتابة المقاسات التقريبية، ملاحظات التصميم، أو أي اشتراطات معمارية خاصة (اختياري)...'
              }
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${
                isDetailsRequired ? 'border-[#2563EB]/80 focus:ring-[#2563EB]' : 'border-slate-700/80 focus:ring-[#2563EB]'
              } text-white placeholder-slate-500 focus:outline-none focus:ring-2 text-sm transition-all resize-y`}
            ></textarea>
          </div>

          {/* Security & Action Note */}
          <div className="bg-slate-900/50 rounded-xl p-3 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between flex-wrap gap-2">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#84CC16]"></span>
              يتم حفظ طلبك أولاً في قاعدة البيانات السحابية ثم تحويلك مباشرة للواتساب.
            </span>
            <span className="text-slate-500 font-mono">لا نطلب بيانات حساسة أو بريداً إلكترونياً</span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-[#2563EB] hover:bg-blue-600 active:scale-[0.99] text-white font-bold text-base shadow-xl shadow-[#2563EB]/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <span>جارٍ حفظ الطلب وفتح واتساب...</span>
              </span>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>إرسال الطلب ومتابعة المحادثة عبر واتساب</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

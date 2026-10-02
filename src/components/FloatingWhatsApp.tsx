import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent('مرحباً شركة TAJ، أود الاستفسار عن أعمالكم الهندسية والحديدية للفلل السكنية.')}`;

  return (
    <aside aria-label="تواصل سريع" className="fixed bottom-6 left-6 z-50 flex items-center group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#84CC16]/40"
        aria-label="تواصل معنا عبر واتساب مباشرة"
      >
        {/* Pulsing rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#84CC16] border-2 border-[#0F172A] rounded-full"></span>
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
      
      {/* Tooltip text for desktop */}
      <span className="hidden md:inline-block pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-3 px-3 py-1.5 rounded-lg bg-[#0F172A] border border-slate-700 text-xs font-medium text-slate-200 shadow-xl whitespace-nowrap">
        تحدث معنا مباشرة عبر واتساب
      </span>
    </aside>
  );
};

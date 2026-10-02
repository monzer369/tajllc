import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Shield, ChevronLeft } from 'lucide-react';
import { IMAGES, CONTACT_INFO } from '../data';

export type PageId = 'home' | 'services' | 'portfolio' | 'about' | 'contact';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'services', label: 'الخدمات' },
    { id: 'portfolio', label: 'الأعمال' },
    { id: 'about', label: 'من نحن' },
    { id: 'contact', label: 'تواصل معنا' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0F172A]/90 backdrop-blur-xl border-b border-slate-800 shadow-xl transition-all">
      {/* Top micro bar for UAE VIP focus & contact */}
      <div className="bg-[#0B1120] border-b border-slate-800/80 px-4 sm:px-8 py-1.5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#84CC16]"></span>
            <span className="font-medium text-slate-300">أعمال هندسية وحديد فاخر للفلل والمشاريع السكنية الراقية في الإمارات</span>
          </div>

          <div className="hidden sm:flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-slate-300 font-mono">
              <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
              <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="hover:text-white transition-colors" dir="ltr">
                {CONTACT_INFO.phoneDisplay}
              </a>
            </div>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">دبي، الإمارات العربية المتحدة</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 focus:outline-none group text-right"
          >
            <div className="relative h-11 w-auto flex items-center">
              <img
                src={IMAGES.logo}
                alt="TAJ Logo"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="hidden sm:block border-r border-slate-700/80 pr-2.5">
              <span className="block text-base font-black text-white tracking-wider">
                TAJ <span className="text-[#2563EB]">|</span> تاج
              </span>
              <span className="block text-[10px] text-slate-400 font-medium tracking-normal -mt-0.5">
                للأعمال الحديدية والحلول الهندسية
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 relative ${
                    isActive
                      ? 'text-white bg-slate-800 shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 right-1/2 translate-x-1/2 w-3 h-0.5 bg-[#84CC16] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-blue-600 active:scale-95 text-white font-bold text-xs shadow-md shadow-[#2563EB]/25 transition-all duration-200"
            >
              <span>طلب استشارة وعرض سعر</span>
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-3 py-1.5 rounded-lg bg-[#2563EB] text-white text-xs font-bold"
            >
              طلب سعر
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="القائمة"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0F172A] border-b border-slate-800 px-6 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-right font-bold text-sm transition-all ${
                    isActive
                      ? 'bg-[#2563EB]/20 text-[#84CC16] border border-[#2563EB]/40'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronLeft className="w-4 h-4 text-slate-500" />
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent('مرحباً TAJ، أود الاستفسار عن أعمالكم الهندسية والحديدية للفلل.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>محادثة واتساب سريعة</span>
            </a>
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-medium text-xs font-mono"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

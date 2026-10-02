import React from 'react';
import { X, MapPin, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';
import { ProjectWork, CONTACT_INFO } from '../data';

interface ProjectModalProps {
  project: ProjectWork | null;
  onClose: () => void;
  onRequestQuote: (projectCategory: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestQuote,
}) => {
  if (!project) return null;

  const whatsappMessage = `مرحباً TAJ، أود الاستفسار عن تفاصيل تنفيذ مشروع مماثل لـ: "${project.title}" (${project.categoryLabel}) - ${project.location}.`;
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#0F172A] border border-slate-700 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#84CC16]/15 text-[#84CC16] border border-[#84CC16]/30">
              {project.categoryLabel}
            </span>
            <div className="flex items-center gap-1 text-slate-400 text-xs">
              <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>{project.location}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Image - Preserves full natural aspect ratio with no cropping */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 aspect-[16/10] sm:aspect-video group flex items-center justify-center">
            {project.image && (
              <img
                src={project.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-110 pointer-events-none"
              />
            )}
            <img
              src={project.image}
              alt={project.title}
              className="relative z-10 max-w-full max-h-full w-auto h-auto object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-10"></div>
            <div className="absolute bottom-4 right-4 left-4 z-20">
              <h3 className="text-base sm:text-lg font-bold text-white mb-0.5">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
              نظرة عامة على المشروع والتنفيذ الهندسي
            </h4>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="bg-slate-900/60 rounded-2xl p-5 border border-slate-800">
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#84CC16]" />
              المواصفات والضمان الإنشائي
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#84CC16] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onRequestQuote(project.categoryLabel);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-sm transition-all"
          >
            طلب تنفيذ مشروع مماثل
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>استفسار واتساب عن هذا العمل</span>
          </a>
        </div>
      </div>
    </div>
  );
};

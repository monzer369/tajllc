import React, { useState } from 'react';
import { Sparkles, MapPin, ExternalLink, ChevronLeft, ShieldCheck, Eye } from 'lucide-react';
import { PORTFOLIO_WORKS, ProjectWork } from '../data';
import { PageId } from '../components/Navbar';

interface PortfolioPageProps {
  onNavigate: (page: PageId, preselectedRequest?: string) => void;
  onOpenProjectModal: (work: ProjectWork) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigate,
  onOpenProjectModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'كافة الأعمال' },
    { id: 'مسابح', label: 'أغطية المسابح' },
    { id: 'برجولات', label: 'البرجولات والمظلات' },
    { id: 'أدراج', label: 'الأدراج الحلزونية' },
    { id: 'أبواب', label: 'الأبواب والبوابات' },
    { id: 'جلسات', label: 'الجلسات الخارجية' },
    { id: 'ديكورات', label: 'الديكورات والفواصل' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_WORKS
    : PORTFOLIO_WORKS.filter((p) => p.category === activeFilter);

  return (
    <div className="space-y-12 pb-16 pt-6">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#84CC16]/15 border border-[#84CC16]/30 text-xs font-bold text-[#84CC16]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>معرض المشاريع والتنفيذ الهندسي</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          أعمالنا ومشاريعنا المنفذة في الإمارات
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          استكشف جانباً من الأعمال الفولاذية والحلول الهندسية التي صممتها ونفذتها TAJ للفلل والمشاريع السكنية الفاخرة. يمكنك تصفية الأعمال حسب التخصص.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                activeFilter === tab.id
                  ? 'bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/25 scale-105'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenProjectModal(project)}
              className="group cursor-pointer bg-[#0F172A] border border-slate-800 hover:border-[#84CC16]/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual - Preserves full natural aspect ratio with no cropping */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-950 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-xl opacity-20 scale-110 pointer-events-none"
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="relative z-10 max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity z-10 pointer-events-none"></div>

                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0F172A]/90 backdrop-blur-md text-xs font-bold text-[#84CC16] border border-slate-700">
                    {project.categoryLabel}
                  </div>

                  <div className="absolute bottom-4 right-4 left-4 flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>{project.location}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#84CC16] font-bold group-hover:translate-x-[-4px] transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      <span>معاينة المواصفات</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3 text-right">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#84CC16] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Highlights tags */}
              <div className="p-6 pt-0">
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5 mb-4">
                  {project.highlights.slice(0, 3).map((h, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-medium"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#84CC16]" />
                    ضمان 10 سنوات
                  </span>
                  <span className="text-[#2563EB] font-bold group-hover:underline">
                    تفاصيل العمل ←
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Request Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-right">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold text-white">
              ترغب بتصميم مخصص بالكامل لفيلا أو قصر؟
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              مهندسونا يصممون المقاطع المعدنية بدقة متناهية وفق المخططات المعمارية الخاصة بك، مع زيارات معاينة هندسية وحسابات إنشائية دقيقة في أي مكان داخل الإمارات.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="shrink-0 px-8 py-4 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-bold text-sm shadow-xl shadow-[#2563EB]/25 transition-all"
          >
            طلب استشارة وتحديد موعد معاينة
          </button>
        </div>
      </section>
    </div>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProjectModal } from './components/ProjectModal';
import { ServiceGalleryModal } from './components/ServiceGalleryModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ProjectWork, ServiceItem } from './data';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [preselectedRequest, setPreselectedRequest] = useState<string | undefined>(undefined);
  const [selectedProject, setSelectedProject] = useState<ProjectWork | null>(null);
  const [selectedGalleryService, setSelectedGalleryService] = useState<ServiceItem | null>(null);

  const handleNavigate = (page: PageId, requestType?: string) => {
    setCurrentPage(page);
    if (requestType) {
      setPreselectedRequest(requestType);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProjectModal = (project: ProjectWork) => {
    setSelectedProject(project);
  };

  const handleCloseProjectModal = () => {
    setSelectedProject(null);
  };

  const handleOpenServiceGallery = (service: ServiceItem) => {
    setSelectedGalleryService(service);
  };

  const handleCloseServiceGallery = () => {
    setSelectedGalleryService(null);
  };

  const handleRequestQuoteFromProject = (projectCategory: string) => {
    setSelectedProject(null);
    handleNavigate('contact', projectCategory);
  };

  const handleRequestQuoteFromGallery = (serviceTitle: string) => {
    setSelectedGalleryService(null);
    handleNavigate('contact', serviceTitle);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 flex flex-col font-sans selection:bg-[#2563EB] selection:text-white relative">
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => handleNavigate(page)}
      />

      {/* Main Dynamic View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenProjectModal={handleOpenProjectModal}
            onOpenServiceGallery={handleOpenServiceGallery}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenServiceGallery={handleOpenServiceGallery}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onNavigate={handleNavigate}
            onOpenProjectModal={handleOpenProjectModal}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            initialRequestType={preselectedRequest}
          />
        )}
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProjectModal}
        onRequestQuote={handleRequestQuoteFromProject}
      />

      {/* Service Multi-Image Gallery Modal */}
      <ServiceGalleryModal
        service={selectedGalleryService}
        onClose={handleCloseServiceGallery}
        onRequestQuote={handleRequestQuoteFromGallery}
      />

      {/* Global Footer */}
      <Footer onNavigate={(page) => handleNavigate(page)} />
    </div>
  );
}

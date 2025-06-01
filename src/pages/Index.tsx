
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MindMapSection from '../components/MindMapSection';
import CommentarySection from '../components/CommentarySection';
import LinkedInSection from '../components/LinkedInSection';
import JobAnalysisSection from '../components/JobAnalysisSection';
import ResumeSection from '../components/ResumeSection';
import CertificatesSection from '../components/CertificatesSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div className="space-y-0">
        <section id="hero" className="min-h-screen">
          <HeroSection />
        </section>
        
        <section id="mindmap" className="min-h-screen bg-white">
          <MindMapSection />
        </section>
        
        <section id="commentary" className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50">
          <CommentarySection />
        </section>
        
        <section id="linkedin" className="min-h-screen bg-white">
          <LinkedInSection />
        </section>
        
        <section id="job-analysis" className="min-h-screen bg-gradient-to-r from-indigo-50 to-purple-50">
          <JobAnalysisSection />
        </section>
        
        <section id="resume" className="min-h-screen bg-white">
          <ResumeSection />
        </section>
        
        <section id="certificates" className="min-h-screen bg-gradient-to-r from-purple-50 to-pink-50">
          <CertificatesSection />
        </section>
        
        <section id="contact" className="min-h-screen bg-gradient-to-r from-slate-900 to-blue-900 text-white">
          <ContactSection />
        </section>
      </div>
    </div>
  );
};

export default Index;

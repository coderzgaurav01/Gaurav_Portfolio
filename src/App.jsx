import React from 'react'
import Navbar from './component/Navbar'
import AIAssistant from './component/AIAssistant';
import ContactSection from './component/ContactSection';
import ExperienceSection from './component/ExperienceSection';
import Hero from './component/Hero';
import ProjectsSection from './component/ProjectsSection';
import SkillsGrid from './component/SkillsGrid';
const App = () => {
  return (
    <div className="relative bg-slate-950 text-white">
      <Navbar />
      
      <main>
        <Hero/>
        <ExperienceSection/>
        <ProjectsSection/>
        <SkillsGrid/>
        <ContactSection/>
      </main>

      <footer className="py-12 border-t border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-slate-500 text-sm mb-4">
            &copy; {new Date().getFullYear()} GRV.DEV. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/gaurav-pathak-494a2b250/" className="hover:text-white transition-colors" target='blank'>LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
      <AIAssistant />
    </div>
  );
};

export default App;

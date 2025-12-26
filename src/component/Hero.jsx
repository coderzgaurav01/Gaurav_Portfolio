import React from 'react'
import { USER_INFO } from '../constants';
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Background blobs for aesthetic */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

      <div className="text-center max-w-4xl">
        <div className="inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 animate-bounce">
          Open to New Opportunities 🚀
        </div>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
          Crafting Digital<br />Experiences at Scale.
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Hi, I'm <span className="text-white font-semibold">{USER_INFO.name}</span>, an <span className="text-white font-semibold">Associate Software Developer</span> at <span className="text-blue-400">{USER_INFO.company}</span>. 
          Currently shaping the future of web technologies while completing my final year at <span className="text-purple-400">Gulzar Group of Institute</span>.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-all transform hover:scale-105">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-4 bg-slate-800 text-white font-bold rounded-full border border-slate-700 hover:bg-slate-700 transition-all transform hover:scale-105">
            Let's Connect
          </a>
          <a href="/resume.pdf" download="Gaurav_Resume.pdf" className="px-8 py-4 bg-slate-800 text-white font-bold rounded-full border border-slate-700 hover:bg-slate-700 transition-all transform hover:scale-105">
            Grab My Resume
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

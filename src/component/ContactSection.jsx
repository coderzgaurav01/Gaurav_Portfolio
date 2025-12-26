import React from 'react'
import { USER_INFO } from '../constants';
const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute top-[-100px] right-[-100px] w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
          
          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Let's build something <span className="text-blue-500 underline underline-offset-8">amazing</span> together.</h2>
              <p className="text-slate-400 text-lg mb-12">
                Have a question, a project idea, or just want to say hi? Feel free to reach out. I'm always open to new challenges and collaborations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href={`mailto:${USER_INFO.email}`} className="text-xl text-slate-300 hover:text-white transition-colors">
                    {USER_INFO.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                    <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <a href={USER_INFO.linkedin} target="_blank" className="text-xl text-slate-300 hover:text-white transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import React from 'react'
import { SKILLS } from '../constants';
const SkillsGrid = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-slate-900/50 border-y border-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Toolbox</h2>
          <p className="text-slate-400">The technologies and tools I work with daily to build exceptional products.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skillGroup) => (
            <div key={skillGroup.category} className="p-8 bg-slate-950/50 border border-slate-800 rounded-3xl hover:border-slate-700 transition-colors">
              <h3 className="text-xl font-bold mb-6 text-white tracking-wide">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-900 rounded-lg text-sm text-slate-400 border border-slate-800 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;


import { EXPERIENCES, EDUCATION } from '../constants';
const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>

            <div className="space-y-12">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l border-slate-800">
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  <div className="mb-2 flex flex-wrap justify-between items-baseline gap-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-sm font-medium text-slate-500 mono">{exp.period}</span>
                  </div>
                  <p className="text-blue-400 font-medium mb-4">{exp.company}</p>
                  <ul className="space-y-3 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-3">
                        <span className="text-blue-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => (
                      <span key={skill} className="px-2 py-1 bg-slate-800 border border-slate-700 text-slate-400 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div id="education">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>

            <div className="space-y-12">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="relative pl-8 border-l border-slate-800">
                  <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                  <div className="mb-2 flex flex-wrap justify-between items-baseline gap-2">
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <span className="text-sm font-medium text-slate-500 mono">{edu.period}</span>
                  </div>
                  <p className="text-purple-400 font-medium mb-4">{edu.institution}</p>
                  <p className="text-slate-500 text-sm italic mb-4">{edu.location}</p>
                  <ul className="space-y-3">
                    {edu.highlights.map((item, i) => (
                      <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-3">
                        <span className="text-purple-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

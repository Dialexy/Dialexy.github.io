import { RevealOnScroll } from '../RevealOnScroll'

export const About = () => {
  const coreSkills = ['C++', 'Java', 'Python', 'SQL', 'Git']
  const webSkills = ['JavaScript / React', 'TypeScript', 'TailwindCSS']

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-stone-400 to-neutral-100 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-neutral-300 mb-6 leading-relaxed">
              I started on Arch Linux, writing Lua scripts to automate my environment; the need to
              understand what was actually happening pushed me deeper into systems than any tutorial
              would have. That curiosity led to building a PC spec'd for running Llama models
              locally, giving me hands-on exposure to the infrastructure side of AI well before it
              became a university topic.
            </p>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              I've since taken on a range of projects spanning full-stack development and
              performance-oriented C++ systems work. Currently I'm in the design phase of a
              query-optimization interface that routes natural language through an LLM to generate
              and refine SQL, backed by a C++ execution layer and a React frontend.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-neutral-100">Languages & Core</h3>
                <div className="flex flex-wrap gap-2">
                  {coreSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-stone-500/40 text-neutral-200 py-1 px-3 rounded-full text-sm hover:bg-stone-500/60 hover:shadow-[0_2px_8px_rgba(255,255,255,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-neutral-100">Web & Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {webSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-stone-500/40 text-neutral-200 py-1 px-3 rounded-full text-sm hover:bg-stone-500/60 hover:shadow-[0_2px_8px_rgba(255,255,255,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-neutral-100">Education</h3>
              <ul className="list-disc list-inside text-neutral-300 space-y-2">
                <li>
                  <strong>BSc Computer Science</strong>, Edge Hill University (2024 - Present)
                </li>
                <li>
                  Key modules: Data Structures, Algorithms, Databases, Network Management,
                  Artificial Intelligence
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-neutral-100">Experience</h3>
              <div className="space-y-2 text-neutral-300">
                <p className="font-medium text-neutral-100">Volunteer Coding Instructor</p>
                <p className="text-sm text-neutral-500">
                  After-school programme · Primary school, UK
                </p>
                <p className="mt-2 leading-relaxed">
                  Taught programming fundamentals to primary school students: logic, sequencing, and
                  problem decomposition. Adapted technical concepts for non-technical audiences and
                  created structured lesson plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const Projects = () => {
  const projects = [
    {
      title: "AVL Tree Implementation",
      description: "Self-balancing binary search tree in C++ with automatic rebalancing through rotations. Features complete memory management, O(log n) operations, and easy intergration into larger projects.",
      techStack: ["C++", "Data Structures", "Algorithms", "Memory Management"],
      link: "https://github.com/Dialexy/AVLTree",
    },
    ...new Array(3).fill({
      title: "Project Placeholder",
      description: "Project Description Placeholder",
      techStack: ["lang 1", "lang 2", "lang 3", "lang 4", "lang 5"],
      link: "Project Link Goes Here",
    }),
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 pb-0"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2_8_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-7">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2_8_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center my-4">
                  <a
                    href={project.link}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

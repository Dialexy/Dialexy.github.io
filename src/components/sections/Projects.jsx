import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const Projects = () => {
    const projects = [

        {
            title: "AVL Tree Implementation",
            description: "Self-balancing binary search tree in C++ with automatic rebalancing through rotations. Features complete memory management, O(log n) operations, and easy integration into larger projects.",
            techStack: ["C++", "Data Structures", "Algorithms", "Memory Management"],
            link: "https://github.com/Dialexy/AVLTree",
        },

        {
            title: "Task Scheduler",
            description: "A lightweight, thread-safe task scheduling system designed to manage and execute tasks in memory. Features priority-based execution, expiration handling, and runtime metrics. Built with modular components (task registry, scheduling queue, and observability layer), ensuring immutability, thread safety, and efficient task lifecycle management.",
            techStack: ["C++", "STL", "Data Structures", "CMake / CTest"],
            link: "https://github.com/Dialexy/In-Memory-Task-Scheduler",
        },

        // Uncomment and fill in when ready:
        // {
        //   title: "Stardew Valley Remake",
        //   description: "",
        //   techStack: ["Rust"],
        //   link: "",
        // },
        // {
        //   title: "",
        //   description: "",
        //   techStack: [],
        //   link: "",
        // },
    ];

    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20 pb-0"
        >
            <RevealOnScroll>
                {/* Single column, wide cards for 2 projects.
            When you have 4 projects: change max-w-3xl -> max-w-5xl and remove the second grid-cols-1,
            leaving just: className="grid grid-cols-1 md:grid-cols-2 gap-6" */}
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-stone-400 to-neutral-100 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white/40 hover:shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition-all duration-200"
                            >
                                <h3 className="text-xl font-bold mb-2 text-neutral-100">{project.title}</h3>
                                <p className="text-neutral-400 mb-4 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-stone-500/40 text-neutral-200 py-1 px-3 rounded-full text-sm hover:bg-stone-500/60 hover:shadow-[0_2px_8px_rgba(255,255,255,0.15)] transition-all"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neutral-300 hover:text-white transition-colors text-sm"
                                >
                                    View on GitHub →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};

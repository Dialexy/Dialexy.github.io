import { RevealOnScroll } from "../RevealOnScroll.jsx";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent leading-tight">
            I'm Filipe Ramos
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            Software Developer with an interest in Data Analytics and Embedded Systems.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(58,10,78,0.2)] hover:bg-blue-300/10"
            >
              Contact Me
            </a>
          </div>
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://www.linkedin.com/in/filipearamos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-5xl transitison-all duration-200"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Dialexy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-5xl transition-all duration-200"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export const About = () => {

  const proficientSkills = ["C++", "Java", "JavaScript", "Python" ];
  const exploredSkills = ["react", "node", "typescript","TailwindCSS", "Rust", "R", "HTML", "Ruby"];

  return (
    <section
    id="about"
    className="min-h-screen flex items-center py-20">
      <div
      className="max-w-3xl mx-auto px-4">
        <h2
        className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div
        className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p
          className="text-gray-300 mb-6">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                Proficiencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {proficientSkills.map((tech,key) => (
                  <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2_8_rgba(59,130,246,0.2)] transition">
                    {tech}

                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">
                Project languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {exploredSkills.map((tech,key) => (
                  <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2_8_rgba(59,130,246,0.2)] transition">
                    {tech}

                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-xl border-white/10 border hover:-translate-y-1 transiton all">
          <h3 className="text-xl font-bold mb-4">
            🎓 Education
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              <strong> Studying Computer Science (Bsc) </strong> - Edge Hill University (2024 - Current)
            </li>
            <li>Relevent studies: Data Strucutres, Algorithms, Databases, Networking, Artificial Intellegence</li>
            <li>Relevent Coursworks: </li>
          </ul>
          </div>
          <div className="p-6 rounded-xl border-xl border-white/10 border hover:-translate-y-1 transiton all">
          <h3 className="text-xl font-bold mb-4"> 👔 Work Experience </h3>
          <div className="space-y-4 text-gray-300">
            <h4
            className="font-semibold">Title:  I am currently looking for experinece in the software space. Either through interships or a short term position</h4>
            <p>Role: </p>
            <h4 className="font-semibold">

            </h4>
            <p></p>
            <h4 className="font-semibold">
    
            </h4>
            <p></p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

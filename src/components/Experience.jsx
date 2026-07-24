function Experience() {
  const experiences = [
    {
      company: "CODTECH IT Technologies",
      duration: "4 Weeks",
      role: "Intern",
      description:
        "Worked on software development concepts and gained practical experience in programming and project development.",
    },
    {
      company: "NIT Trichy",
      duration: "2 Months",
      role: "Academic Intern",
      description:
        "Enhanced knowledge in Artificial Intelligence and Machine Learning through academic projects.",
    },
    {
      company: "VRC Pvt. Ltd.",
      duration: "2 Months",
      role: "Intern",
      description:
        "Worked in a startup environment and gained hands-on experience in software development.",
    },
  ];

  return (
    <section
      id="experience"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-center text-4xl font-bold text-cyan-400">
          Experience
        </h2>

        <div className="space-y-8 mt-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-cyan-500/40 transition"
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                {exp.company}
              </h3>

              <p className="text-gray-400 mt-2">
                {exp.role} | {exp.duration}
              </p>

              <p className="mt-4 text-gray-300 leading-7">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
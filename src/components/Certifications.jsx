function Certifications() {
  const certifications = [
    {
      title: "Learnathon 2025",
      issuer: "ICT Academy",
    },
    {
      title: "Understanding Incubation & Entrepreneurship",
      issuer: "NPTEL (Silver Badge)",
    },
    {
      title: "Digital 101",
      issuer: "NASSCOM (Silver Badge)",
    },
  ];

  return (
    <section
      id="certifications"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-cyan-400">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {certifications.map((certificate, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-cyan-500/50 hover:-translate-y-2 transition"
            >

              <h3 className="text-xl font-bold text-cyan-400">
                {certificate.title}
              </h3>

              <p className="mt-4 text-gray-300">
                {certificate.issuer}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;
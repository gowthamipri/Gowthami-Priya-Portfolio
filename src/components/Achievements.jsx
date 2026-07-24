function Achievements() {
  const achievements = [
    "🏆 1st Place - NextGenSec Hackathon",
    "🥇 1st Prize - Technical Paper Presentation",
    "🏅 1st Place - Tech Talks (ISTE)",
    "💻 Technical Coordinator - Glitch Hunt Symposium",
    "🎯 Active Member - College Web Club",
  ];

  return (
    <section
      id="achievements"
      className="bg-slate-800 text-white py-24"
    >
      <div className="max-w-5xl mx-auto px-8">

        <h2 className="text-center text-4xl font-bold text-cyan-400">
          Achievements
        </h2>

        <div className="mt-16 space-y-6">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-slate-700 rounded-xl p-6 shadow-lg hover:bg-cyan-500 transition duration-300"
            >
              <h3 className="text-xl font-semibold">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;
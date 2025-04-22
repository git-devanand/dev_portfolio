// components/Projects.js
export default function Projects() {
  const projects = [
    {
      title: "AI Self-Driving System",
      description: "Built using Jetson Nano, ROS, and OpenCV. Working on AI-assisted autonomous bikes under BrahmandX.",
    },
    {
      title: "QuantumX Echoes",
      description: "An AI music channel creating futuristic tracks using Riffusion & Magenta.",
    },
    {
      title: "Hydration Tracker App",
      description: "A Flutter app for tracking water intake with Firebase, multilingual support, and reminder notifications.",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gray-100 p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
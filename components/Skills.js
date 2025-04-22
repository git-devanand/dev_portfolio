// components/Skills.js
export default function Skills() {
  const skills = [
    "Python", "JavaScript", "C/C++", "TensorFlow", "OpenCV", "ROS",
    "Next.js", "Tailwind CSS", "Firebase", "Jetson Nano", "AI/ML", "Git & GitHub"
  ];

  return (
    <section id="skills" className="py-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
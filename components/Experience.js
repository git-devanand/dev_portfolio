// components/Experience.js
import React from 'react';

const experienceData = [
{
    company: 'Founder & CEO – BrahmandX',
    time: 'April, 2025–Present',
    description:
      'Building futuristic AI-powered self-driving systems and space tech. Leading research, development, and full-stack innovation.',
  },
  {
    company: 'Legitt-AI Generative Engineer Intern – Startup, Noida',
    time: 'June, 2023 - August, 2023',
    description:
      'Worked on generative AI systems. Left due to health and mental challenges but gained deep insights into AI workflows.',
  },
  {
    company: 'Pantech Solutions Pvt. Ltd. – Intern',
    time: 'October, 2022 - March, 2023',
    description:
      'Worked on different projects in AI and ML. Gained hands-on experience in various AI technologies and tools.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-white dark:bg-gray-950">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Experience</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {experienceData.map((exp, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{exp.company}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{exp.time}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
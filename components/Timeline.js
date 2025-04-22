// components/Timeline.js
export default function Timeline() {
  const education = [
    {
      period: "2019 – 2023",
      title: "B.Tech. in Computer Science",
      institute: "J K Institute of Applied Physics and Technology, University of Allahabad",
      location: "Prayagraj, Uttar Pradesh",
      score: "8.55 CGPA"
    },
    {
      period: "2016 – 2018",
      title: "Intermediate",
      institute: "Krishna Public School",
      location: "Patna, Bihar",
      score: "83.2%"
    },
    {
      period: "2014 – 2016",
      title: "High School",
      institute: "Saraswati Senior Secondary Vidya Mandir",
      location: "Deoria, Uttar Pradesh",
      score: "10 CGPA"
    }
  ];

  return (
    <section id="timeline" className="py-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Education Journey</h2>
        <div className="space-y-6">
          {education.map((item, index) => (
            <div key={index} className="border-l-4 border-cyan-500 pl-4">
              <p className="text-sm text-gray-600">{item.period}</p>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p>{item.institute}, {item.location}</p>
              <p className="font-medium">Score: {item.score}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
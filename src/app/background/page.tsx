import React from "react";

const sections = [
  {
    text: `My journey into the world of technology began with a strong curiosity for both hardware and software. Over the years, I have explored various fields, from programming and web development to project management and teamwork. My educational background includes a Higher Vocational Education Diploma from Chas Academy, where I specialized in .NET development, and a high school engineering degree from NTI Gymnasiet Södertörn. These experiences have equipped me with a solid foundation in both technical and soft skills, preparing me for a dynamic career in technology.`,
  },
  {
    text: `During my time at Chas Academy, I delved deep into the intricacies of .NET development, mastering both frontend and backend technologies. The curriculum was rigorous, covering JavaScript, various JavaScript frameworks, databases, and application development with C# and Microsoft's .NET framework. Through practical projects and teamwork, I gained valuable business insights and built a strong foundation for a career in .NET development.`,
  },
  {
    text: `My high school years at NTI Gymnasiet Södertörn were equally formative. In my fourth technical year (TE4), I specialized in practical aspects of programming, focusing on web development and various work methods such as Agile and the Waterfall model. This included practical experience with the MERN stack (MongoDB, Express.js, React.js, and Node.js). Through individual and group projects, I built websites from the ground up or contributed to existing projects. This program provided valuable opportunities to improve coding skills and teamwork.`,
  },
  {
    text: `Beyond formal education, my internships have played a crucial role in shaping my career. At 2witness, I was part of a team of interns developing a mobile application. Initially, my role focused on backend development, but it later expanded to include frontend tasks. This hands-on experience helped me improve my programming skills and significantly enhanced my communication and teamwork abilities.`,
  },
  {
    text: `Another notable experience was my internship at the National Institute of Technology, Ariake College in Fukuoka, Japan. This dynamic exchange program allowed me to delve into the latest tech trends, working with image recognition using Python. This experience not only expanded my technical knowledge but also provided valuable insights into cutting-edge technologies within an international setting. It sparked my strong interest in exploring future career opportunities in global teams and cross-cultural collaboration.`,
  },
  {
    text: `In addition to my technical skills, I have developed a range of soft skills that are essential for success in any field. These include responsibility, communication, goal-orientation, efficiency, and teamwork. My diverse experiences have taught me the importance of adaptability and continuous learning, and I am always eager to take on new challenges and grow both professionally and personally.`,
  },
];

export default function BackgroundPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#101010] via-[#181818] to-[#232323] px-4 py-16">
      <div className="max-w-4xl mx-auto mb-5 text-center md:text-start">
        <h2 className="text-4xl md:text-5xl font-extrabold inline-block pb-2">
          My Background
        </h2>
      </div>
      <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="relative bg-[#1a2b1e]/70 rounded-2xl shadow-2xl p-8 text-lg text-gray-100 leading-relaxed border border-lime-400/10 transition-transform hover:scale-[1.025] hover:shadow-lime-400/20 group"
          >
            <div className="absolute left-0 top-0 h-full w-1 bg-lime-400 rounded-l-2xl opacity-80 group-hover:opacity-100 transition-opacity" />
            <p className="pl-4">{section.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

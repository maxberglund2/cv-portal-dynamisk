export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#101010] via-[#181818] to-[#232323] px-4 py-16">
      <div className="max-w-3xl mx-auto mb-10">
        <h1 className="text-center md:text-justify text-4xl md:text-5xl font-extrabold pb-2 text-lime-300 drop-shadow">
          Welcome To The Website
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          Welcome to my personal website! Here, you can learn more about me, my
          professional background, and my projects. Navigate through the
          sections to find detailed information about my resume, portfolio, and
          social media links. Feel free to reach out to me through the contact
          information provided.
        </p>
        <p className="text-lg text-gray-300 mt-4">
          This website is designed to showcase my skills and experiences in web
          development, highlighting my journey, achievements, and the work I am
          passionate about. Whether you are a potential employer, collaborator,
          or just curious about my work, I hope you find the information here
          insightful and engaging.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <section className="bg-[#1a2b1e]/70 rounded-2xl shadow-2xl p-8 border border-lime-400/10 flex flex-col justify-between">
          <h2 className="text-2xl font-bold text-lime-300 mb-2">About Me</h2>
          <p className="text-gray-100 text-base leading-relaxed">
            I am a passionate web developer with a keen interest in creating
            dynamic and user-friendly websites. With a background in front-end
            development, I enjoy bringing ideas to life through code and design.
          </p>
        </section>
        <section className="bg-[#1a2b1e]/70 rounded-2xl shadow-2xl p-8 border border-lime-400/10 flex flex-col justify-between">
          <h2 className="text-2xl font-bold text-lime-300 mb-2">My Socials</h2>
          <p className="text-gray-100 text-base leading-relaxed mb-4">
            Feel free to contact me or follow my social media to stay updated on
            my projects and endeavors. I am always open to connecting with
            like-minded professionals and potential collaborators. Let's connect
            and create something amazing together!
          </p>
          <div className="flex gap-6 justify-center mt-2">
            <a
              href="https://www.linkedin.com/in/max-berglund04/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-300 text-3xl"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/maxberglund2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-300 text-3xl"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=max.berglund2004@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-300 text-3xl"
              aria-label="Email"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

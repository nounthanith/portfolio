const projects = [
  {
    id: 1,
    title: "Group Assigment",
    description:
      "A group website was created during Semester 1 of Year 2 using HTML and CSS.",
    image: "/projects/GroupProject.png",
    tags: ["Html", "Css"],
    demoUrl: "https://nounthanith.github.io/group3/",
    gitHubUrl: "https://github.com/nounthanith/group3",
  },
  {
    id: 2,
    title: "Java Script",
    description:
      "A simple code that I learned in JavaScript during Semester 2 of Year 2.",
    image: "/projects/JavaScripProject.png",
    tags: ["JavaScript", "Tailwind CSS"],
    demoUrl: "https://nubb-learn-javascript.vercel.app/",
    gitHubUrl: "https://github.com/nounthanith/nubb-learn-javascript",
  },
  {
    id: 3,
    title: "Music App",
    description:
      "A music website I created while learning Bootstrap and integrating APIs.",
    image: "/projects/MusicApp.png",
    tags: ["JavaScript", "Bootstrap"],
    demoUrl: "https://music-rose-nu.vercel.app/",
    gitHubUrl: "https://github.com/nounthanith/music",
  },
  {
    id: 4,
    title: "DashBoard",
    description:
      "A dashboard project I created by following a YouTube tutorial.",
    image: "/projects/DashBoard.png",
    tags: ["JavaScript", "React Js", "Tailwind CSS"],
    demoUrl: "https://dashboard-rho-wheat-10.vercel.app/",
    gitHubUrl: "https://github.com/nounthanith/dashboard",
  },
  {
    id: 5,
    title: "Chart Bot",
    description:
      "A chatbot project built with Google API and styled with Tailwind CSS.",
    image: "/projects/ChatBot.png",
    tags: ["JavaScript", "Google API", "Tailwind CSS"],
    demoUrl: "https://gimini-ai-ten.vercel.app/",
    gitHubUrl: "https://github.com/nounthanith/gimini-ai",
  },
  {
    id: 6,
    title: "Globle News",
    description:
      "A responsive news website built with JavaScript for functionality and Tailwind CSS for modern, clean styling.",
    image: "/projects/NewApi.png",
    tags: ["JavaScript", "News API", "Tailwind CSS"],
    demoUrl: "https://news-orpin-alpha.vercel.app/",
    gitHubUrl: "https://github.com/nounthanith/news",
  },
  
];

export const ProjectSection = () => {
  return (
    <section id="project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Feature <span className="text-primary">Project</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I’ve worked on, showcasing my skills in
          web development, API integration, and UI design. Each project was a
          learning experience, helping me grow as a developer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
                <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-lg card-hover">
                    <div className="h-48 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full"/>
                    </div>
                    <div className="p-3">
                        <button className="border-primary border">{project.tags}</button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

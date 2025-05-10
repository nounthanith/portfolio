import { ArrowRight, ExternalLink, Github } from "lucide-react";

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
    tags: ["JavaScript", "Bootstrap", "React Js"],
    demoUrl: "https://music-rose-nu.vercel.app/",
    gitHubUrl: "https://github.com/nounthanith/music",
  },
  {
    id: 4,
    title: "Dash Board",
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
    title: "News",
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
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-lg card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-sm font-medium rounded-full bg-primary/20 border text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pl-4 pr-4">
                <h3 className="text-xl font-semibold mb-1 text-start">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-start">
                  {project.description}
                </p>
                <div className="flex justify-end items-center pb-2">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 bg-green-600 p-2 rounded-full"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.gitHubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 bg-green-600 p-2 rounded-full"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/nounthanith"
            target="_blank"
          >
            Check my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

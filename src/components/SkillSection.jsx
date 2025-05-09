import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "Html/Css", level: 95, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React Js", level: 90, category: "frontend" },
  { name: "Tailwind Css", level: 90, category: "frontend" },

  { name: "C++", level: 80, category: "backend" },
  { name: "Java", level: 70, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "Node.js", level: 90, category: "backend" },
  { name: "Express", level: 90, category: "backend" },

  { name: "Dart", level: 70, category: "frontend" },
  { name: "Flutter", level: 70, category: "frontend" },

  { name: "Git/GitHub", level: 90, category: "tools" },
];
// console.table(skills);

const categories = ["all", "frontend", "backend", "tools"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredskills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skill" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              onClick={() => setActiveCategory(category)}
              key={key}
              className={cn(
                "px-5 py-2 rounded-r-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredskills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg card-hover shadow-lg"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden relative">
                <div
                  className="bg-green-700 h-2 rounded-full relative overflow-hidden"
                  style={{ width: `${skill.level}%` }}
                >
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,white_5px,white_10px)] opacity-20" />
                </div>
              </div>
              <div className="text-end mr-2 mt-1 text-sm text-muted-foreground">
                <span>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

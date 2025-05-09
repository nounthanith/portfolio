import { Code } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12  text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Study at</h3>
            <p className="text-muted-foreground">
              I'm a student at Nation Univercity of Battambang (NUBB). I'm in
              the second semester of my second years, majoring in Imformation
              Techology. 
            </p>
            <p>
                I chose Web developer as my main skill. I have studying
              Web developer course at Master IT and Now I studying App Developer
              at SalaIT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">Get In Touch</a>
                <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a>
            </div>
          </div>
          {/* Skill */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover shadow-lg">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10"><Code className="h-6 w-6 text-primary" /></div>
                </div>
            </div>
            <div className="gradient-border p-6 card-hover shadow-lg"></div>
            <div className="gradient-border p-6 card-hover shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

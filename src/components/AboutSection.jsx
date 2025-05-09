import { Code, ShoppingBag } from "lucide-react";
import cv from "./../../public/docs/Cv.pdf";

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
              I specialize in web development and have completed a professional
              course at Master IT. Currently, I'm expanding my skills by
              studying app development at SalaIT to become a versatile
              full-stack developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href={cv}
                download={cv}
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* Skill */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-xl underline">Website</h4>
                  <p>
                    I develop responsive, high-performance websites and
                    applications with modern frameworks like React and Next.js.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-xl underline">
                    Appliction
                  </h4>
                  <p>
                    I’m currently expanding my skills in full-stack development
                    by learning Flutter (for cross-platform mobile apps) and
                    Laravel (for robust backend systems).
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-xl underline">
                    Project Management
                  </h4>
                  <p>
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

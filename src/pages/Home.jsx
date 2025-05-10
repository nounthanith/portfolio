import { AboutSection } from "../components/AboutSection"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { ProjectSection } from "../components/ProjectSection"
import { SkillSection } from "../components/SkillSection"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Backgorund Effects */}
            <StarBackground />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillSection />
                <ProjectSection />
            </main>
            {/* Footer */}
        </div>
    )
}
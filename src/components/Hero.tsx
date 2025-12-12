import { ChevronDown, Github } from "lucide-react";
import { Button } from "./ui/button";
import cyberHero from "@/assets/cyber-hero.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden paper-texture">
      {/* Background Image with Comic Effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${cyberHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/95 comic-dots" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-9xl font-bangers text-primary text-comic-shadow mb-4 uppercase">
            RAHUL S
          </h1>
          <div className="inline-block bg-secondary text-secondary-foreground px-6 py-2 transform -rotate-2 panel-border panel-shadow">
            <p className="text-xl md:text-2xl font-bangers uppercase">
              System Online!
            </p>
          </div>
        </div>

        {/* Comic Panel */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-card panel-border panel-shadow p-6 rounded-lg font-comic">
            <p className="text-foreground/80 text-lg">Loading profile...</p>
            <p className="text-primary mt-2 font-bold">
              Identity: <span className="text-foreground font-normal">Tech Explorer | Creator | Coder</span>
            </p>
            <p className="text-primary mt-1 font-bold">
              Current Location: <span className="text-foreground font-normal">Mysore, IN</span>
            </p>
            <p className="text-primary mt-1 font-bold">
              Mission: <span className="text-foreground font-normal">Decode Technology. Build Meaning. Inspire People.</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <Button
            onClick={() => scrollToSection("about")}
            className="bg-primary text-primary-foreground panel-border panel-shadow hover:translate-y-1 hover:shadow-none transition-all font-bangers text-lg"
          >
            ▶ ENTER
          </Button>
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-accent text-accent-foreground panel-border panel-shadow hover:translate-y-1 hover:shadow-none transition-all font-bangers text-lg"
          >
            ⚙️ PROJECTS
          </Button>
          <Button
            onClick={() => window.open("/RAHULS_RESUME.pdf", "_blank")}
            className="bg-secondary text-secondary-foreground panel-border panel-shadow hover:translate-y-1 hover:shadow-none transition-all font-bangers text-lg"
          >
            💾 RESUME
          </Button>
          <Button
            onClick={() => window.open("https://github.com/RahulS2905", "_blank")}
            className="bg-card text-foreground panel-border panel-shadow hover:translate-y-1 hover:shadow-none transition-all font-bangers text-lg"
          >
            <Github className="w-5 h-5" /> GITHUB
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full panel-border font-bangers">
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

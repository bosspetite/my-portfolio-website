import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import headshotImage from "@/assets/developer-headshot.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-gradient">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <img
                src={headshotImage}
                alt="Professional headshot"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover ring-4 ring-primary/30 animate-scale-in"
              />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 hero-text">
              Alex Thompson
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Passionate front-end developer crafting beautiful and responsive web applications
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="btn-primary text-lg px-8 py-3"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="btn-secondary text-lg px-8 py-3"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={() => scrollToSection("about")}
              className="text-primary hover:text-primary-glow transition-colors duration-300"
              aria-label="Scroll to About section"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
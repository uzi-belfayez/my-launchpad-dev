import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Rayen Belfayez
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Engineering Student & AI/Embedded Systems Enthusiast
            </p>
            <p className="text-lg text-muted-foreground max-w-lg">
              Passionate about creating innovative solutions and building impactful software. 
              Currently seeking internship opportunities to grow and contribute to meaningful projects.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="shadow-soft"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button variant="secondary" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-2"
              asChild
            >
              <a href="https://github.com/uzi-belfayez?tab=overview&from=2025-08-01&to=2025-08-26" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-2"
              asChild
            >
              <a href="https://www.linkedin.com/in/rayen-belfayez" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative z-10">
            <img 
              src={heroImage} 
              alt="Your profile picture" 
              className="rounded-full shadow-card w-80 h-80 object-cover border-4 border-primary/20"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-full blur-xl w-80 h-80 mx-auto"></div>
        </div>
      </div>

      <button 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-primary transition-colors cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to next section"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
      </button>
    </section>
  );
};

export default Hero;
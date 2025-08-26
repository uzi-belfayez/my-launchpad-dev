import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
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
                Your Name
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Computer Science Student & Aspiring Software Engineer
            </p>
            <p className="text-lg text-muted-foreground max-w-lg">
              Passionate about creating innovative solutions and building impactful software. 
              Currently seeking internship opportunities to grow and contribute to meaningful projects.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="shadow-soft">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg">
              View Projects
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <Button variant="ghost" size="sm" className="p-2">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10">
            <img 
              src={heroImage} 
              alt="Professional workspace setup" 
              className="rounded-lg shadow-card w-full h-auto"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-lg blur-xl"></div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
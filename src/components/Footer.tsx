import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2024 Your Name. Built with React & Tailwind CSS.
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="p-2">
              <Mail className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
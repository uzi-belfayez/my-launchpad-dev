import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Vision Foot",
      description: "An intelligent blind-football coach.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      technologies: ["YOLO", "Arduino", "Raspberry Pi", "Electronics", "Solidworks"],
      liveUrl: "https://www.fondationorange.com/fr/challenge/2024/et-les-gagnants-sont/visionfoot-passe-decisive-pour-linclusion",
    },
    {
      title: "2D Football Game",
      description: "A pygame simulation of 4 Lego EV3 robots playing football autonomously with reinforcement learning.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      technologies: ["Reinforcement learning", "Deep Q Learning", "Pytorch", "Pygame", "Python"],
      liveUrl: "#",
      githubUrl: "https://github.com/uzi-belfayez/FussballRoboter"
    },
    {
      title: "Chess-Playing Robotic Arm",
      description: "An academic project that consists of a robotic arm that plays chess autonomously.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      technologies: ["Python", "Open CV", "Linear Optimisation", "Kinematics", "ROS2", "URDF", "Electronics"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "2D Java maven Game",
      description: "A three-level 2D game.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      technologies: ["Java", "Maven", "Scrum"],
      liveUrl: "#",
      githubUrl: "https://github.com/uzi-belfayez/ACL_Project"
    },
    {
      title: "Autonomous Differential Drive Robot",
      description: "An autonomous robot that does some specific tasks in a map for the eurobot international robotics competition.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      technologies: ["Arduino", "Raspberry Pi", "ROS", "Electronics", "Solid Works"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Inertia Wheel Pendulum",
      description: "Equilibred and made a physical pendilum system.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      technologies: ["Arduino", "PID", "Control theory","MATLAB", "Proteus","Electronics", "LabVIEW", "Solid Works"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Street Traffic Management with C pThreads",
      description: "A terminal simulation of a custumizable street traffic and managinf each vehicule and light with a thread.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      technologies: ["C", "pThreads"],
      liveUrl: "#",
      githubUrl: "#"
    }

  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-lg">
                  {project.title}
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm" className="p-1.5 h-auto">
                      <Github className="h-3.5 w-3.5" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-1.5 h-auto">
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs px-2 py-0.5">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/uzi-belfayez?tab=overview&from=2025-08-01&to=2025-08-26" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
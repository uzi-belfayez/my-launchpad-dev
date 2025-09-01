import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
      {
      title: "AiDo",
      description: "AI-powered personal assistant that manages your tasks, profile, and preferences with long-term and short-term memory.",
      image: "/assets/aido.png",
      technologies: ["Langchain", "Langgraph","Langsmith", "Trustcall","OpenAI", "Gradio", "uv"],
      liveUrl: "https://huggingface.co/spaces/uzi-belfayez/AiDo",
      githubUrl: "https://github.com/uzi-belfayez/AiDo"
    },
    {
      title: "Creative Researcher Agent",
      description: "Human-in-the-loop research assistant that generates analysts, gathers insights, and produces structured reports.",
      image: "/assets/research_agent.png",
      technologies: ["Langchain", "Langgraph", "Langsmith","Trustcall", "OpenAI","Tavily","Gradio", "uv"],
      liveUrl: "#",
      githubUrl: "https://github.com/uzi-belfayez/Creative_Researcher_Agent"
    },
      {
      title: "Pricer Agent",
      description: "An intelligent pricing system that scans websites for products and their prices, predicts the real market price, evaluates if it is a good deal, and presents the results through a Gradio interface with email notifications.",
      image: "/assets/Gradio_App.png",
      technologies: ["Fine Tuning", "RAG", "Langchain", "OpenAI","Gemini", "Chroma db", "Modal", "Gradio","Twilio","Pushover","Beautiful Soup"],
      liveUrl: "#",
      githubUrl: "https://github.com/uzi-belfayez/Pricer-Agent"
    },
    {
      title: "CO2, Temperature, and Humidity Monitoring System with Presence Detection",
      description: "A FreeRTOS monitoring system.",
      image: "/assets/realshit.jpg",
      technologies: ["ESP32", "Arduino", "C", "FreeRTOS", "UART", "Web Server", "Web Socket"],
      liveUrl: "#",
      githubUrl: "https://github.com/uzi-belfayez/ESP32_FREERTOS"
    },
    {
      title: "Vision Foot",
      description: "An intelligent blind-football coach.",
      image: "/assets/photo_projet_visionfoot_1.jpg",
      technologies: ["YOLO", "Arduino", "Raspberry Pi", "Electronics", "Solidworks"],
      liveUrl: "https://drive.google.com/file/d/1_9XuyOpnaoLRMgqSIe2JaXV-mPOcCSa0/view?usp=sharing",
    },
    {
      title: "2D Football Game",
      description: "A pygame simulation of 2v2 Lego EV3 robots playing football autonomously with reinforcement learning.",
      image: "/assets/fuss3.PNG",
      technologies: ["Reinforcement learning", "Deep Q Learning", "Pytorch", "Pygame", "Python"],
      liveUrl: "#",
      githubUrl: "https://github.com/uzi-belfayez/FussballRoboter"
    },
    {
      title: "Chess-Playing Robotic Arm",
      description: "An academic project that consists of a robotic arm that plays chess autonomously.",
      image: "/assets/chess1.PNG",
      technologies: ["Python", "Open CV", "Linear Optimisation", "Kinematics", "ROS2", "URDF", "Electronics"],
      liveUrl: "https://drive.google.com/drive/folders/1osegSjuNhSViFtTryh0kZrCPeeW2OAKV?usp=sharing",
      githubUrl: "#"
    },
    {
      title: "2D Java maven Game",
      description: "A three-level 2D game.",
      image: "/assets/V3.PNG",
      technologies: ["Java", "Maven", "Scrum"],
      liveUrl: "#",
      githubUrl: "https://github.com/uzi-belfayez/ACL_Project"
    },
    {
      title: "Autonomous Differential Drive Robot",
      description: "An autonomous robot that executes some specific tasks in a map for the eurobot international robotics competition.",
      image: "/assets/uzi1.jpg",
      technologies: ["STM32","Arduino", "Raspberry Pi", "ROS", "Electronics", "Solid Works"],
      liveUrl: "https://drive.google.com/drive/folders/1dq2wWkLSTdp_PymOuCDYUm-6eURp33Du?usp=sharing",
      githubUrl: "#"
    },
    {
      title: "Inertia Wheel Pendulum",
      description: "A pendulum benchmark that uses PID and control theory equilibrate itself.",
      image: "/assets/olfa2.jpg",
      technologies: ["Arduino", "PID", "Control theory","MATLAB", "Proteus","Electronics", "LabVIEW", "Solid Works"],
      liveUrl: "https://drive.google.com/drive/folders/1w_qClpOrhOC8VwG5rAiEgBV8imQScK-Z?usp=sharing",
      githubUrl: "#"
    },
    {
      title: "Street Traffic Management with C pThreads",
      description: "A customizable street traffic simulation that manages each vehicule and street light with a thread.",
      image: "/assets/C_3.PNG",
      technologies: ["C", "pThreads"],
      liveUrl: "#",
      githubUrl: "https://github.com/uzi-belfayez/street-traffic-with-threads"
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
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <Button variant="ghost" size="sm" className="p-1.5 h-auto" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <Button variant="ghost" size="sm" className="p-1.5 h-auto" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs px-2 py-0.5 text-foreground">
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
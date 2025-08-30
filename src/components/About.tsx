import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Code, Users, Zap } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <Award className="h-5 w-5" />,
      title: "Academic Excellence",
      description: "Currently pursuing a double degree program with outstanding academic performance",
      tags: ["Double Degree", "First of Class"]
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Technical Projects",
      description: "Developed diverse projects in embedded systems, AI, robotics, and software development",
      tags: ["C/C++", "Python", "ROS2", "Machine Learning", "Deep Learning", "GenAI", "Agentic AI", "SQL", "Gradio", "Git/GitHub", "Linux"]
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Leadership",
      description: "Led team academic and club projects with successful outcomes",
      tags: ["Academic Projects", "Club Leadership", "Project Management"]
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Problem Solving",
      description: "Strong algorithmic thinking and competitive programming",
      tags: ["Algorithms", "Data Structures", "Problem Solving"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a dedicated Computer Science student with a passion for technology and innovation. 
            Here are some of my key achievements and areas of expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {achievement.icon}
                  </div>
                  {achievement.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{achievement.description}</p>
                <div className="flex flex-wrap gap-2">
                  {achievement.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
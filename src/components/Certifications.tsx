import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "The Complete Agentic AI Engineering Course",
      issuer: "Ed Donner, Ligency Team",
      date: "2025",
      credentialId: "UC-14012e60-2945-4326-813b-f03de08ee7a9",
      description: "Master AI agents",
      skills: ["Langgraph", "OpenAI Agents SDK", "CrewAI", "MCP"]
    },
    {
      title: "LLM Engineering: Master AI Large Language Models & Agents ",
      issuer: "Ed Donner, Ligency Team",
      date: "2025",
      credentialId: "UC-cb752353-9092-4d1d-92ef-12fdaad63f45",
      description: "Build and deploy LLM apps, mastering Generative AI, RAG, LoRA and AI Agents.",
      skills: ["APIs", "Hugging Face", "LoRA", "RAG", "Fine Tuning"]
    },
    {
      title: "Python Reinforcement Learning, Deep Q Learning, and TRFL",
      issuer: "Packt Publishing",
      date: "2024",
      credentialId: "UC-bae5d4e8-ea56-4a03-bec3-aca80a8bab04",
      description: "Leverage the power of Reinforcement Learning techniques to develop intelligent systems using Python",
      skills: ["React", "JavaScript", "HTML/CSS", "UI/UX Design"]
    },
    {
      title: "Deep Search With Langgraph",
      issuer: "LangChain Academy",
      date: "2025",
      credentialId: "rn87pn96wz",
      description: "Build deep research agents with LangGraph",
      skills: ["Langchain", "Langgraph", "Langsmith", "OpenAI", "Anthropic", "Tavily", "Wikipedia"]
    },
    {
      title: "Building Ambient Agents with LangGraph",
      issuer: "LangChain Academy",
      date: "2025",
      credentialId: "rn87pn96wz",
      description: "Build and deploy ambient agents with LangGraph",
      skills: ["Langchain", "Langgraph", "Langsmith", "OpenAI", "Trustcall"]
    },
    {
      title: "Introduction to LangGraph",
      issuer: "LangChain Academy",
      date: "2025",
      credentialId: "rn87pn96wz",
      description: "Create powerful, production-ready LLM applications",
      skills: ["Langchain", "Langgraph", "Langsmith", "OpenAI"]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Credentials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses that demonstrate my commitment to continuous learning and industry expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <Button variant="ghost" size="sm" className="p-1.5 h-auto">
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Button>
                </div>
                <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-primary">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">ID: {cert.credentialId}</p>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs px-2 py-0.5">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://drive.google.com/drive/folders/1JISDon4Pj6qq4zrurk0FYeQ8Y96CxPAO?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Award className="mr-2 h-4 w-4" />
              View All Credentials
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      credentialId: "AWS-CCP-2024-001",
      description: "Foundational understanding of AWS Cloud concepts, services, and terminology",
      skills: ["Cloud Computing", "AWS Services", "Security", "Pricing"]
    },
    {
      title: "Google Data Analytics Certificate",
      issuer: "Google Career Certificates",
      date: "2024",
      credentialId: "GCC-DA-2024-002",
      description: "Comprehensive program covering data analysis tools and techniques",
      skills: ["SQL", "R Programming", "Tableau", "Data Visualization"]
    },
    {
      title: "Meta Front-End Developer Certificate",
      issuer: "Meta",
      date: "2023",
      credentialId: "META-FE-2023-003",
      description: "Professional certificate in modern front-end development practices",
      skills: ["React", "JavaScript", "HTML/CSS", "UI/UX Design"]
    },
    {
      title: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2023",
      credentialId: "AZ-900-2023-004",
      description: "Foundational knowledge of cloud services and Microsoft Azure",
      skills: ["Azure Services", "Cloud Concepts", "Security", "Compliance"]
    },
    {
      title: "CompTIA Security+ CE",
      issuer: "CompTIA",
      date: "2023",
      credentialId: "SEC+-2023-005",
      description: "Industry-standard certification for cybersecurity fundamentals",
      skills: ["Network Security", "Risk Management", "Cryptography", "Identity Management"]
    },
    {
      title: "Oracle Java SE 11 Developer",
      issuer: "Oracle",
      date: "2023",
      credentialId: "OCA-JAVA-2023-006",
      description: "Professional Java programming certification",
      skills: ["Java Programming", "OOP", "Data Structures", "Algorithms"]
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
          <Button variant="outline" size="lg">
            <Award className="mr-2 h-4 w-4" />
            View All Credentials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
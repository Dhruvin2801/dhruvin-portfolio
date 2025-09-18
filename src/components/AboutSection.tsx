import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  TrendingUp, 
  Users, 
  Globe,
  BarChart3,
  Target
} from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Data-Driven Approach",
      description: "Leveraging analytics to drive strategic product decisions and business growth."
    },
    {
      icon: Users,
      title: "Cross-Functional Leadership",
      description: "Experience leading diverse teams and collaborating across business functions."
    },
    {
      icon: Globe,
      title: "Global Perspective", 
      description: "Understanding international markets and diverse business environments."
    }
  ];

  const skills = [
    "Product Management",
    "Business Analytics", 
    "Data Analysis",
    "Strategic Planning",
    "Market Research",
    "Agile Methodology",
    "SQL & Python",
    "Tableau & Power BI"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              An MBA Business Analytics student passionate about transforming data into 
              actionable insights that drive product success and business growth.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Education & Background */}
            <div className="animate-slide-in">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">Education & Background</h3>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Currently pursuing an MBA in Business Analytics, I'm dedicated to 
                      bridging the gap between complex data insights and strategic business 
                      decisions. My academic journey focuses on advanced analytics, machine 
                      learning applications in business, and strategic product management.
                    </p>
                    <p>
                      With a strong foundation in both technical analysis and business 
                      strategy, I bring a unique perspective to product development and 
                      market analysis.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Skills */}
            <div className="animate-slide-in">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">Core Expertise</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {skills.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="justify-center py-2 bg-secondary/50 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                    <highlight.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{highlight.title}</h4>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
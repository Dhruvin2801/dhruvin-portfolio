import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dhruvin.dungrani@example.com",
      href: "mailto:dhruvin.dungrani@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mumbai, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/dhruvin-dungrani"
    },
    {
      icon: Github,
      label: "GitHub", 
      href: "https://github.com/dhruvin-dungrani"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:dhruvin.dungrani@example.com"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss opportunities, collaborations, or just want to chat about 
              data analytics and product management? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">First Name</label>
                        <Input 
                          placeholder="Your first name"
                          className="bg-background/50"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Last Name</label>
                        <Input 
                          placeholder="Your last name"
                          className="bg-background/50"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input 
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-background/50"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Subject</label>
                      <Input 
                        placeholder="What's this about?"
                        className="bg-background/50"
                      />
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <Textarea 
                        placeholder="Tell me more about your project or opportunity..."
                        rows={5}
                        className="bg-background/50 resize-none"
                      />
                    </div>
                    
                    <Button variant="hero" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in space-y-8">
              {/* Contact Details */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((contact, index) => (
                      <a
                        key={index}
                        href={contact.href}
                        className="flex items-center group hover:text-primary transition-colors"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mr-4 group-hover:bg-primary/30 transition-colors">
                          <contact.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{contact.label}</p>
                          <p className="text-muted-foreground">{contact.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
                  
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors group"
                      >
                        <social.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="bg-gradient-to-r from-primary/20 to-primary/10 border-primary/30">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-4">Ready to Collaborate?</h3>
                  <p className="text-muted-foreground mb-6">
                    Let's discuss how we can work together to drive data-driven 
                    product success.
                  </p>
                  <Button variant="hero">
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
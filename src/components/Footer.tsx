import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <div className="flex items-center text-muted-foreground mb-4 md:mb-0">
            <span className="text-sm">
              © 2024 Dhruvin Dungrani. Built with
            </span>
            <Heart className="w-4 h-4 mx-2 text-red-500 fill-current" />
            <span className="text-sm">and modern tech.</span>
          </div>

          {/* Quick Links */}
          <div className="flex items-center space-x-6">
            <a 
              href="#home" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from "react";
import { Link } from "react-router-dom";

interface FooterProps {
  onNavigation: (path: string) => void;
}

const Footer = ({ onNavigation }: FooterProps) => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 LegalSummarize. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => onNavigation('/privacy')} 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </button>
            <button 
              onClick={() => onNavigation('/terms')} 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </button>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

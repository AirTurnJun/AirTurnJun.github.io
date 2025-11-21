import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { assetUrl } from "@/lib/asset";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoSrc = assetUrl("lovable-uploads/1cc4e6f9-3928-49d8-bde3-6600dab84be6.png");
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logoSrc} alt="AirTurn Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold">AirTurn MAV</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/support" className="text-foreground hover:text-primary transition-colors">
              Support
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/downloads" className="text-foreground hover:text-primary transition-colors">
              Downloads
            </Link>
            <Link to="/warranty-policy" className="text-foreground hover:text-primary transition-colors">
              Warranty
            </Link>
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="hero" size="sm" className="bg-slate-50" asChild>
              <Link to="/product">Get It Now</Link>
            </Button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden border-t border-primary/20 bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col py-4 space-y-2">
              <Link to="/support" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                Support
              </Link>
              <Link to="/about" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/downloads" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                Downloads
              </Link>
              <Link to="/warranty-policy" className="px-4 py-2 text-foreground hover:text-primary transition-colors">
                Warranty
              </Link>
              <div className="px-4 pt-4">
                <Button variant="hero" size="sm" className="w-full" asChild>
                  <Link to="/product">Buy Now</Link>
                </Button>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};

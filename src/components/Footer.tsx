import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://a.klaviyo.com/client/profiles/?company_id=HcUryP', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'revision': '2024-10-15',
        },
        body: JSON.stringify({
          data: {
            type: "profile",
            attributes: {
              email: email,
              properties: {
                $exchange_id: "EH3ss2MaQSpUzCP8QHSfQCaviU8mpSd3wxVegoSIJoM.HcUryP",
                $source: "Newsletter Signup Footer"
              }
            },
            relationships: {
              form: {
                data: {
                  type: "form",
                  id: "SAExLV"
                }
              },
              "form-version": {
                data: {
                  type: "form-version",
                  id: 10633661
                }
              }
            }
          }
        })
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "You've been subscribed to our newsletter."
        });
        setEmail("");
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later or contact support.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  return <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-primary/20">
    <div className="container mx-auto px-4 py-16">
      {/* Newsletter Section */}
      <div className="bg-gradient-card rounded-2xl p-8 border border-primary/20 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
          <p className="text-muted-foreground mb-6">
            Get the latest updates on MAV features, firmware updates, and adventure stories from our community.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="flex-1 px-4 py-3 bg-background border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
            />
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="bg-slate-50"
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Brand Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/1cc4e6f9-3928-49d8-bde3-6600dab84be6.png" alt="AirTurn Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold">AirTurn MAV</span>
          </div>
          <p className="text-muted-foreground">
            Built for motion. Built for outdoors.
            <br />
            Simple, wearable control when screens don’t make sense.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="hover:bg-primary/20" asChild>
              <a href="https://www.facebook.com/airturn/" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/20" asChild>
              <a href="https://x.com/airturn" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/20" asChild>
              <a href="https://www.instagram.com/airturnofficial/?hl=en" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/20" asChild>
              <a href="https://www.youtube.com/c/AirTurnVideo" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Product Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Product</h3>
          <div className="space-y-2">
            <a href="/product#features" className="block text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="/warranty" className="block text-muted-foreground hover:text-primary transition-colors">
              Warranty Registration
            </a>
            <a href="/warranty-policy" className="block text-muted-foreground hover:text-primary transition-colors">
              Warranty Policy
            </a>
            <a href="/app-developers" className="block text-muted-foreground hover:text-primary transition-colors">
              App Developers
            </a>
          </div>
        </div>

        {/* Support Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Support</h3>
          <div className="space-y-2">
            <a href="/support" className="block text-muted-foreground hover:text-primary transition-colors">
              Setup Guide
            </a>
            <a href="#troubleshooting" className="block text-muted-foreground hover:text-primary transition-colors">
              Troubleshooting
            </a>
            <a href="/downloads" className="block text-muted-foreground hover:text-primary transition-colors">
              Downloads
            </a>
            <a href="/shipping-policy" className="block text-muted-foreground hover:text-primary transition-colors">
              Shipping Policy
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">1 (888) 247-1223</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">support@airturn.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">1668 Valtec Lane, Unit G, Boulder, Colorado, USA 80301</span>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom Bar */}
      <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-sm">
          © 2024 AirTurn. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
            Terms of Service
          </a>
          <a href="/returns" className="text-muted-foreground hover:text-primary transition-colors">
            Return Policy
          </a>
        </div>
      </div>
    </div>
  </footer>;
};

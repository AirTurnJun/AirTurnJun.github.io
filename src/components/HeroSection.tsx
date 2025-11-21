import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { assetUrl } from "@/lib/asset";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
export const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const poster = assetUrl("lovable-uploads/e8f70cd8-6ea4-4909-8fbd-cfb836ae9cd9.png");

  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Video */}
    <div className="absolute inset-0">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
      >
        <source src="https://cdn.shopify.com/videos/c/o/v/15c553736a2f496bb692b7b9d154cdc5.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/50" />
    </div>

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 text-center">
      <div className="max-w-4xl mx-auto animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gradient-card backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary/20">
          <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
          <span className="text-sm font-medium">Adventure Ready</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            CONTROL
          </span>
          <br />
          <span className="text-foreground">
            UNLEASHED
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          The ultimate wearable controller for adventurers who demand seamless app control in any environment.
        </p>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Waterproof", "Magnetic Charging", "Endless App Control", "Adventure Ready"].map(feature => <div key={feature} className="bg-gradient-feature backdrop-blur-sm rounded-lg px-4 py-2 border border-primary/10">
            <span className="text-sm font-medium">{feature}</span>
          </div>)}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" className="group text-sky-500 bg-gray-950 hover:bg-gray-800" asChild>
            <Link to="/product">
              Get Your MAV
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            variant="feature"
            size="xl"
            className="group bg-gray-950 hover:bg-gray-800"
            onClick={() => setIsVideoOpen(true)}
          >
            <Play className="mr-2 h-5 w-5" />
            Watch in Action
          </Button>
        </div>
      </div>
    </div>

    {/* Decorative Elements */}
    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />

    {/* Video Modal */}
    <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
      <DialogContent className="max-w-4xl w-full p-0 bg-black/95 border-0">
        <DialogHeader className="sr-only">
          <DialogTitle>MAV Product Video</DialogTitle>
        </DialogHeader>
        <div className="relative aspect-video">
          <video
            controls
            autoPlay
            className="w-full h-full rounded-lg"
            src="https://cdn.shopify.com/videos/c/o/v/15c553736a2f496bb692b7b9d154cdc5.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  </section>;
};

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
export const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background Video */}
    <div className="absolute inset-0">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/lovable-uploads/e8f70cd8-6ea4-4909-8fbd-cfb836ae9cd9.png"
      >
        <source src="https://cdn.shopify.com/videos/c/o/v/15c553736a2f496bb692b7b9d154cdc5.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/50" />
    </div>

    {/* Content */}
    <div className="relative z-10 top-0 container mx-auto px-4 text-center">
      <div className="max-w-4xl mx-auto animate-fade-in">


        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="text-foreground">
            Change the track,
          </span>
          <br />
          <span className="text-foreground">
            not the vibe.
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Keep your phone secure and the music going.
        </p>

        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Waterproof", "Rechargeable", "150 ft Range", "Music, Podcasts, TV"].map(feature => <div key={feature} className="bg-gradient-feature backdrop-blur-sm rounded-lg px-4 py-2 border border-primary/10">
            <span className="text-sm font-medium">{feature}</span>
          </div>)}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" className="group text-sky-500 bg-gray-950 hover:bg-gray-800" asChild>
            <a href="/product" data-track-button="true">
              View Product Info
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
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

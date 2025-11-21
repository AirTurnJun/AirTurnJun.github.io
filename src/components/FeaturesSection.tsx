import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { assetUrl } from "@/lib/asset";
const asset = (file: string) => assetUrl(`lovable-uploads/${file}`);
const features = [{
  title: "Wearable Design",
  description: "Adjustable strap fits over outerwear",
  image: asset("143eaf88-3a32-405a-bbbd-433bff7598eb.png"),
  details: "Designed for comfort and durability, the MAV's adjustable strap system adapts to any adventure gear, ensuring secure attachment without limiting mobility."
}, {
  title: "Waterproof Enclosure",
  description: "Protection from rain, snow, or sweat",
  image: asset("0dbfd9bb-d525-41b0-beb2-b5f0dde70033.png"),
  details: "Engineered with advanced sealing technology, the MAV withstands the harshest conditions while maintaining full functionality."
}, {
  title: "Magnetic Charging",
  description: "Convenience keeping your device sealed from the elements",
  image: asset("a379ad39-fea3-46b5-a91b-dad051e768b5.png"),
  details: "Innovative magnetic charging system eliminates the need for ports, maintaining complete weather resistance while providing effortless power management."
}, {
  title: "Endless App Control",
  description: "Seamless switching between your favorite media apps",
  image: asset("e629d416-b699-478c-805d-8163043900cf.png"),
  details: "Compatible with hundreds of apps, from music streaming to navigation, giving you complete control over your digital experience."
}];
export const FeaturesSection = () => {
  return <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for{" "}
            <span className="bg-gradient-hero bg-clip-text text-sky-500">
              Adventure
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every feature designed to enhance your outdoor experience with uncompromising reliability and intuitive control.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => <Card key={feature.title} className="group bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 hover:transform hover:scale-[1.02] overflow-hidden" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-primary font-medium mb-3">{feature.description}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.details}</p>
                </div>
              </CardContent>
            </Card>)}
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-gradient-card rounded-2xl p-12 border border-primary/20 shadow-card">
          <h3 className="text-3xl font-bold mb-4">Ready to Unleash Control?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of adventurers who've already discovered the freedom of seamless app control in any environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group text-sky-500" asChild>
              <Link to="/product">
                Order Your MAV
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
           
          </div>
        </div>
      </div>
    </section>;
};

import { BatteryCharging, Shield, Watch } from "lucide-react";

import FeaturesBlock from "@/components/shadcn-studio/blocks/features-section-24/features-section-24";

const features = [
  {
    icon: <Watch className="h-6 w-6 text-primary" />,
    title: "Control Without Breaking Flow",
    description: "Play, pause, skip, decline calls without slowing down.",
    image: "/lovable-uploads/143eaf88-3a32-405a-bbbd-433bff7598eb.png",
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Adventure-Ready Durability",
    description: "MAV stands up to water, weather, and hard use, keeping your phone safely out of harm's way.",
    image: "/lovable-uploads/0dbfd9bb-d525-41b0-beb2-b5f0dde70033.png",
  },
  {
    icon: <BatteryCharging className="h-6 w-6 text-primary" />,
    title: "Easy Power, Anywhere",
    description: "Recharge quickly with a snap-on magnetic charger designed for wet hands, gloves, and life in motion.",
    image: "/lovable-uploads/a379ad39-fea3-46b5-a91b-dad051e768b5.png",
  },
];

export const FeaturesSection = () => {
  return <FeaturesBlock featuresList={features} />;
};

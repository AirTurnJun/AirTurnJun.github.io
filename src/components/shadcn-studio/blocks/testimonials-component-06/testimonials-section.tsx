import TestimonialsComponent from "@/components/shadcn-studio/blocks/testimonials-component-06/testimonials-component-06";
import type { TestimonialItem } from "@/components/shadcn-studio/blocks/testimonials-component-06/testimonials-component-06";

const testimonials: TestimonialItem[] = [
  {
    name: "Schumann846",
    role: "",
    avatar:
      "/avatar/schumann846.jpg",
    content:
      "This is a must have for skiers and snowboarders. I have one and it is fantastic.I use it skiing, riding my motorcycle, or with my ski helmet on my e-bike. You can answer or decline calls, control volume, advance to next or last song , but this is the kicker it's rechargeable and has 50 hours of run time. You won't find this anywhere else. Air Turn Mav is fantastic! I use it daily",
  },
  {
    name: "Angel Lubin",
    role: "CEO & Co Founder at Zipline",
    avatar:
      "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-17.png?width=40&height=40&format=auto",
    content:
      "Top-notch quality—easy to set up and performs as promised. The support team was incredibly responsive and attentive",
  },
  {
    name: "Lincoln Stanton",
    role: "CEO & Co Founder at Gumroad",
    avatar:
      "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png?width=40&height=40&format=auto",
    content:
      "Amazing product—well-built, user-friendly, and just as advertised. The service team exceeded my expectations",
  },
  {
    name: "Skylar Lipshutz",
    role: "Product manager at Orbit",
    avatar:
      "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-12.png?width=40&height=40&format=auto",
    content:
      "Outstanding product—well-crafted, user-friendly, and exactly what I expected. The team went above and beyond to help.",
  },
  {
    name: "Corey Franci",
    role: "sbaker@hotmail.com",
    avatar:
      "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-7.png?width=40&height=40&format=auto",
    content:
      "Wonderful product—high quality, easy to operate, and exactly what I wanted. Support was quick and very helpful.",
  },
  {
    name: "Anika Franci",
    role: "CEO & Co Founder at Zendesk",
    avatar:
      "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png?width=40&height=40&format=auto",
    content:
      "Impressive product—high quality, simple to use, and exactly as promised. Customer service was superb and very responsive.",
  },
  {
    name: "Skylar Rosser",
    role: "Product manager at Orbit",
    avatar:
      "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-20.png?width=40&height=40&format=auto",
    content:
      "Outstanding product—well-crafted, user-friendly, and exactly what I expected. The team went above and beyond to help.",
  },
  {
    name: "Chance Baptista",
    role: "CEO & Co Founder at ABC Company",
    avatar:
      "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png?width=40&height=40&format=auto",
    content:
      "Great product—reliable, easy to set up, and just as described. Service was excellent and ensured a smooth experience.",
  },
];

const TestimonialsSection = () => {
  return <TestimonialsComponent testimonials={testimonials} />;
};

export default TestimonialsSection;

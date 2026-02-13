import TestimonialsComponent from "@/components/shadcn-studio/blocks/testimonials-component-06/testimonials-component-06";
import type { TestimonialItem } from "@/components/shadcn-studio/blocks/testimonials-component-06/testimonials-component-06";

const testimonials: TestimonialItem[] = [
  {
    name: "Schumann846",
    role: "Snowboarder, Skier, Motorcyclist, E-Biker",
    avatar:
      "/avatar/schumann846.jpg",
    content:
      "This is a must have for skiers and snowboarders. I have one and it is fantastic.I use it skiing, riding my motorcycle, or with my ski helmet on my e-bike. You can answer or decline calls, control volume, advance to next or last song , but this is the kicker it's rechargeable and has 50 hours of run time. You won't find this anywhere else. Air Turn Mav is fantastic! I use it daily",
    link: "https://www.instagram.com/p/DT8KGqJDGxb/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
  },
  {
    name: "Willan C",
    role: "Mountain Sports Enthusiast",
    avatar: "",
    content:
      "It’s a great alternative to a smart watch with a more durable build that allows for easy access when you may have bulky gloves or mitts on. It thrives more in environments where you may be concerned with weather conditions and distance from the Bluetooth device you are attempting to control. As a user of a smart watch, I think some of the features are redundant, but I could see myself regularly using something like this while out on the mountain where I don’t want to risk damaging my more expensive smart watch. Overall, a good product that fills a specific niche in the market."
  },
  {
    name: "Harry E",
    role: "Outdoor Adventurer",
    avatar: "",
    content:
      "I was impressed by the waterproof-ability of the device since I got it pretty wet by mistake and it still worked well."
  },
  {
    name: "Renee B",
    role: "Everyday User",
    avatar: "",
    content: "A wonderful addition to my setup."
  },
  {
    name: "Justin M",
    role: "First-Time MAV User",
    avatar: "",
    content:
      "I loved the simple and easy setup process and its compatibility with any device!"
  },
  {
    name: "Dylan B",
    role: "Mountain Biker",
    avatar: "",
    content:
      "Ruggedness would be the word. I liked that it was built sturdy and could handle any impact from mountain biking and stuff like that."
  },
];

const TestimonialsSection = () => {
  return <TestimonialsComponent testimonials={testimonials} />;
};

export default TestimonialsSection;

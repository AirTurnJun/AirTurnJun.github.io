import { Marquee } from "@/components/ui/marquee";

import TestimonialCard from "@/components/shadcn-studio/blocks/testimonials-component-06/testimonial-card";

export type TestimonialItem = {
  name: string;
  role: string;
  avatar: string;
  content: string;
};

type TestimonialsComponentProps = {
  testimonials: TestimonialItem[];
};

const TestimonialsComponent = ({ testimonials }: TestimonialsComponentProps) => {
  return (
    <section className="space-y-12 py-8 sm:space-y-16 sm:py-16 lg:space-y-24 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-4 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-lg text-2xl font-semibold sm:text-3xl lg:text-4xl">
          Words of praise from others about our presence
        </h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-32 bg-gradient-to-r from-background to-transparent sm:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-32 bg-gradient-to-l from-background to-transparent sm:block" />

        <div className="w-full overflow-hidden">
          <Marquee pauseOnHover duration={20} gap={1.5}>
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>
        </div>

        <div className="w-full overflow-hidden">
          <Marquee pauseOnHover duration={20} gap={1.5} reverse>
            {testimonials.slice(4, 8).map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsComponent;

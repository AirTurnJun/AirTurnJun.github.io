import { Marquee } from "@/components/ui/marquee";

import TestimonialCard from "@/components/shadcn-studio/blocks/testimonials-component-06/testimonial-card";

export type TestimonialItem = {
  name: string;
  role: string;
  avatar: string;
  content: string;
  link?: string;
};

type TestimonialsComponentProps = {
  testimonials: TestimonialItem[];
};

const TestimonialsComponent = ({ testimonials }: TestimonialsComponentProps) => {
  const MIN_ITEMS_FOR_MARQUEE = 8;
  const shouldUseMarquee = testimonials.length >= MIN_ITEMS_FOR_MARQUEE;
  const firstRowTestimonials = testimonials.filter((_, index) => index % 2 === 0);
  const secondRowTestimonials = testimonials.filter((_, index) => index % 2 === 1);

  return (
    <section className="space-y-12 py-8 sm:space-y-16 sm:py-16 lg:space-y-24 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-4 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-lg text-2xl font-semibold sm:text-3xl lg:text-4xl">
          What customers are saying about AirTurn MAV
        </h2>
      </div>

      {shouldUseMarquee ? (
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-32 bg-gradient-to-r from-background to-transparent sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-32 bg-gradient-to-l from-background to-transparent sm:block" />

          <div className="w-full overflow-hidden">
            <Marquee pauseOnHover duration={20} gap={1.5}>
              {firstRowTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`${testimonial.name}-row1-${index}`} testimonial={testimonial} />
              ))}
            </Marquee>
          </div>

          <div className="w-full overflow-hidden">
            <Marquee pauseOnHover duration={20} gap={1.5} reverse>
              {secondRowTestimonials.map((testimonial, index) => (
                <TestimonialCard key={`${testimonial.name}-row2-${index}`} testimonial={testimonial} />
              ))}
            </Marquee>
          </div>
        </div>
      ) : (
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 px-4 sm:px-6 lg:px-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-static-${index}`} testimonial={testimonial} />
          ))}
        </div>
      )}
    </section>
  );
};

export default TestimonialsComponent;

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  content: string;
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className="max-w-sm border-none bg-muted shadow-none">
      <CardContent className="space-y-0">
        <div>
          <p className="text-primary text-6xl h-8">&ldquo;</p>
          <p className="text-muted-foreground -mt-4 px-8 line-clamp-3 font-medium">
            {testimonial.content}
          </p>
          <p className="text-right text-primary text-6xl h-6">&ldquo;</p>
        </div>
        <div className="flex items-center gap-2 ">
          <Avatar className="size-10">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback>
              {testimonial.name
                .split(" ", 2)
                .map((namePart) => namePart[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium">{testimonial.name}</h4>
            <p className="text-muted-foreground text-sm">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;

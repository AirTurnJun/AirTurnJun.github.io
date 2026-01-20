import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

import { cn } from "@/lib/utils";

import { Marquee } from "@/components/ui/marquee";

type Integration = {
  name: string;
  image: string;
}[];

const AppIntegration = ({ integrations }: { integrations: Integration }) => {
  const integrationCards = integrations.map((app, index) => (
    <Card
      key={index}
      className="text-card-foreground flex w-[9rem] shrink-0 flex-col gap-4 rounded-xl border border-none bg-muted py-4 shadow-lg sm:w-[12rem] sm:gap-6 sm:py-6"
    >
      <CardContent className="flex flex-col items-center gap-2 sm:gap-2.5">
        <Avatar className="size-12 rounded-xl sm:size-16">
          <AvatarFallback className={cn("rounded-xl")}>
            <img src={app.image} alt={app.name} className="h-full w-full object-contain" />
          </AvatarFallback>
        </Avatar>
        <CardTitle className="text-base font-medium sm:text-2xl">{app.name}</CardTitle>
      </CardContent>
    </Card>
  ));

  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex gap-6 max-md:flex-col sm:mb-16 md:items-center md:justify-between lg:mb-24">
          <div className="max-w-4xl space-y-4">
            <p className="text-primary text-sm font-medium tracking-wide uppercase">App Integration</p>
            <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">Plays Well With Others</h2>
            <p className="text-muted-foreground text-xl">
              From Spotify to YoutTube to podcasts, MAV works across nearly every app without slowing you down.
            </p>
          </div>
          <div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-[1] w-[8.75rem] bg-gradient-to-r to-transparent max-sm:hidden" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-[1] w-[8.75rem] bg-gradient-to-l to-transparent max-sm:hidden" />
        <div className="w-full overflow-hidden max-sm:hidden">
          <Marquee pauseOnHover duration={150} gap={1.5} className="p-2 sm:p-3">
            {integrationCards}
          </Marquee>
        </div>
        <div className="sm:hidden">
          <div className="overflow-x-auto">
            <div className="flex w-max gap-3 px-4 pb-2">
              {integrationCards}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppIntegration;

import { useEffect, useRef, useState, type ReactNode, type Ref } from "react";

import { motion, useScroll, useSpring, useTransform } from "motion/react";

import { ArrowUpRightIcon } from "lucide-react";

import { MotionPreset } from "@/components/ui/motion-preset";
import { cn } from "@/lib/utils";
import { PrimaryFlowButton, SecondaryFlowButton } from "@/components/ui/flow-button";

type Features = {
  icon: ReactNode;
  title: string;
  description: string;
  image: string;
}[];

const FeatureItem = ({
  feature,
  index,
  totalFeatures,
  scrollYProgress,
  itemRef,
}: {
  feature: Features[number];
  index: number;
  totalFeatures: number;
  scrollYProgress: any;
  itemRef?: Ref<HTMLDivElement>;
}) => {
  const start = index / totalFeatures;
  const middle = (index + 0.5) / totalFeatures;
  const end = (index + 1) / totalFeatures;
  const isFirst = index === 0;
  const isLast = index === totalFeatures - 1;

  const opacity = useTransform(
    scrollYProgress,
    isFirst
      ? [0, middle - 0.05, middle + 0.05, end]
      : isLast
        ? [start, middle - 0.05, middle + 0.05, 1]
        : [start, middle - 0.05, middle + 0.05, end],
    isFirst ? [1, 1, 1, 0.3] : isLast ? [0.3, 1, 1, 1] : [0.3, 1, 1, 0.3]
  );

  const y = useTransform(
    scrollYProgress,
    isFirst ? [0, middle, end] : isLast ? [start, middle, 1] : [start, middle, end],
    isFirst ? [0, 0, -30] : isLast ? [30, 0, 0] : [30, 0, -30]
  );

  return (
    <motion.div
      ref={itemRef}
      style={{ opacity, y }}
      className={cn("flex h-[31.25rem] items-center justify-center")}
    >
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          {feature.icon}
          <div className="font-medium md:text-2xl xl:text-3xl">{feature.title}</div>
        </div>
        <div className="text-muted-foreground">{feature.description}</div>
      </div>
    </motion.div>
  );
};

const ImageItem = ({
  feature,
  index,
  totalFeatures,
  scrollYProgress,
}: {
  feature: Features[number];
  index: number;
  totalFeatures: number;
  scrollYProgress: any;
}) => {
  const start = index / totalFeatures;
  const middle = (index + 0.5) / totalFeatures;
  const end = (index + 1) / totalFeatures;
  const isFirst = index === 0;
  const isLast = index === totalFeatures - 1;

  const opacity = useTransform(
    scrollYProgress,
    isFirst
      ? [0, middle - 0.05, middle + 0.05, end]
      : isLast
        ? [start, middle - 0.05, middle + 0.05, 1]
        : [start, middle - 0.05, middle + 0.05, end],
    isFirst ? [1, 1, 1, 0] : isLast ? [0, 1, 1, 1] : [0, 1, 1, 0]
  );

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex items-center justify-center px-3"
      transition={{ duration: 0.3 }}
    >
      <img
        src={feature.image}
        alt={feature.title}
        className="h-full w-full object-contain"
      />
    </motion.div>
  );
};

const Features = ({ featuresList }: { featuresList: Features }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLDivElement>(null);
  const [stickyTop, setStickyTop] = useState<number | null>(null);

  useEffect(() => {
    const updateStickyTop = () => {
      if (!containerRef.current || !firstItemRef.current) {
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const itemRect = firstItemRef.current.getBoundingClientRect();
      const centerOffset = itemRect.top - containerRect.top + itemRect.height / 2;

      setStickyTop(centerOffset);
    };

    updateStickyTop();
    window.addEventListener("resize", updateStickyTop);

    return () => {
      window.removeEventListener("resize", updateStickyTop);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const diamondRotationRaw = useTransform(scrollYProgress, (progress) => {
    const currentIndex = Math.min(
      Math.floor(progress * featuresList.length),
      featuresList.length - 1
    );

    return currentIndex * 360;
  });

  const diamondRotation = useSpring(diamondRotationRaw, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="bg-[image:repeating-linear-gradient(45deg,color-mix(in_oklab,hsl(var(--border))_40%,transparent)_0,color-mix(in_oklab,hsl(var(--border))_40%,transparent)_1px,transparent_0,transparent_50%)] bg-[size:12px_12px] bg-fixed px-4 sm:px-6 lg:px-8">
      <div className="bg-background mx-auto max-w-7xl border-x pt-8 sm:pt-16 lg:pt-24">
        <div className="mb-12 space-y-4 text-center max-md:px-4 sm:mb-16 lg:mb-24">

          <MotionPreset
            component="h2"
            className="text-2xl font-semibold md:text-3xl lg:text-4xl"
            fade
            slide={{ direction: "down" }}
            transition={{ duration: 0.5 }}
            delay={0.2}
          >
            Stay in the Moment
          </MotionPreset>

          <MotionPreset
            component="p"
            className="text-muted-foreground mx-auto max-w-3xl text-xl"
            fade
            slide={{ direction: "down" }}
            transition={{ duration: 0.5 }}
            delay={0.4}
          >
            Manage music and calls without stopping, slowing down, or pulling out your phone.
          </MotionPreset>
        </div>

        <MotionPreset delay={0.8} fade slide={{ direction: "down" }} transition={{ duration: 0.5 }}>
          <div ref={containerRef} className="grid gap-6 md:grid-cols-2 pt-20">
            <div className="relative hidden w-full space-y-20 px-6 py-20 md:block">
              {featuresList.map((feature, index) => (
                <FeatureItem
                  key={index}
                  feature={feature}
                  index={index}
                  totalFeatures={featuresList.length}
                  scrollYProgress={scrollYProgress}
                  itemRef={index === 0 ? firstItemRef : undefined}
                />
              ))}
            </div>

            <div className="relative hidden w-full items-center justify-center space-y-20 px-6 pt-20 top-30 md:block">
              <div
                className="shadow-xl bg-black sticky top-1/2 flex h-[31.25rem] items-center justify-center overflow-hidden rounded-xl border-black"
                style={{
                  top: stickyTop === null ? undefined : `${stickyTop}px`,
                  transform: "translateY(-25%)",
                }}
              >
                {featuresList.map((feature, index) => (
                  <ImageItem
                    key={index}
                    feature={feature}
                    index={index}
                    totalFeatures={featuresList.length}
                    scrollYProgress={scrollYProgress}
                  />
                ))}

                {[
                  "top-[1.125rem] left-[1.125rem]",
                  "top-[1.125rem] right-[1.125rem]",
                  "bottom-[1.125rem] left-[1.125rem]",
                  "bottom-[1.125rem] right-[1.125rem]",
                ].map((position, idx) => (
                  <motion.svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    className={cn("absolute", position)}
                    style={{ rotate: diamondRotation }}
                  >
                    <path d="M5 0L10 6L5 12L0 6L5 0Z" fill="var(--primary)" />
                  </motion.svg>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-16 md:hidden">
              {featuresList.map((feature, index) => (
                <div key={index} className="space-y-6">
                  <div className="relative px-6 py-5">
                    <div className="bg-black sticky top-20 flex h-[21.875rem] items-center justify-center overflow-hidden rounded-xl border">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="size-full max-h-[17.5rem] max-w-[24rem] object-contain max-sm:max-w-[17.5rem]"
                        />
                      </div>
                      {[
                        "top-[1.125rem] left-[1.125rem]",
                        "top-[1.125rem] right-[1.125rem]",
                        "bottom-[1.125rem] left-[1.125rem]",
                        "bottom-[1.125rem] right-[1.125rem]",
                      ].map((position, idx) => (
                        <svg
                          key={idx}
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="12"
                          viewBox="0 0 10 12"
                          fill="none"
                          className={cn("absolute", position)}
                        >
                          <path d="M5 0L10 6L5 12L0 6L5 0Z" fill="var(--primary)" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4 max-md:px-4">
                    <div className="flex items-center gap-4">
                      {feature.icon}
                      <div className="text-xl font-medium">{feature.title}</div>
                    </div>
                    <div className="text-muted-foreground">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionPreset>
      </div>
    </section>
  );
};

export default Features;

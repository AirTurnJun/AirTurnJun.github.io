import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const AppDevelopers = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://a.klaviyo.com/client/profiles/?company_id=HcUryP", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          revision: "2024-10-15",
        },
        body: JSON.stringify({
          data: {
            type: "profile",
            attributes: {
              email,
              properties: {
                $exchange_id: "kVDgHOKXZLmV9YeLwearKIf1T8n5n6cmHWPFWgWsp0M.HcUryP",
                $source: "MAV Developer Signup",
                $referrer: {
                  ts: 1756317514,
                  value: "",
                  first_page: "https://www.airturn.com/",
                },
                $last_referrer: {
                  ts: 1768499170,
                  value: "",
                  first_page: "https://www.airturn.com/pages/mav-signup-embed-codes",
                },
              },
            },
            relationships: {
              form: {
                data: {
                  type: "form",
                  id: "WF7aYB",
                },
              },
              "form-version": {
                data: {
                  type: "form-version",
                  id: 23796713,
                },
              },
            },
          },
        }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "You've been subscribed to our developer newsletter.",
        });
        setEmail("");
      } else {
        throw new Error("Subscription failed");
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please try again later or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold text-primary md:text-5xl">App Developers</h1>
              <p className="text-xl text-muted-foreground">The MAV can work with your app!</p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                While MAV was originally designed for music and podcast control, it also works as a flexible input
                device for apps and connected hardware. Trigger actions such as starting and stopping camera recording,
                status feedback, controlling timers for laps or intervals, marking waypoints, and initiating custom
                in-app events; all through physical, tactile input.
              </p>
              <p>
                For app owners and developers, AirTurn makes integration straightforward. We provide a lightweight SDK
                that enables MAV compatibility quickly, allowing apps to recognize button inputs and map them directly
                to meaningful actions using standard Bluetooth protocols. In most cases, apps are immediately ready to
                connect once the SDK is implemented.
              </p>
              <p>
                We work directly with partners to ensure controls feel intentional, reliable, and well-matched to
                real-world movement. If your app benefits from remote, fast, eyes-up interaction, especially in active
                or outdoor use cases, we'd be excited to work with you to bring MAV support to your users.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-gradient-card p-8 shadow-card">
              <p className="mb-6 text-muted-foreground">
                Enter your email below, or just give us a call, to get started.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-4 sm:flex-row items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="flex-1 rounded-lg border border-primary/20 bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
                />
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="bg-slate-50"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Get Started"}
                </Button>
              </form>
              <p className="mt-4 text-sm text-muted-foreground">
                Or call{" "}
                <a href="tel:18882471223" className="text-primary hover:underline">
                  1 (888) 247-1223
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppDevelopers;

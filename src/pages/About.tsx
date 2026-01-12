import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Story + About */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold md:text-5xl text-primary">How the MAV was born.</h1>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p className="text-xl text-muted-foreground">
                At AirTurn, we design for people who don’t stay still for long.
              </p>
              <p>
                Music and podcasts power workouts, long runs, early mornings, and days spent outside on the trail, the
                slopes, or wherever the day leads. In those moments, control matters, but stopping, fumbling, or
                breaking focus doesn’t fit the pace. Pinching an earbud or swiping a screen can do the job, but not
                when you’re wearing gloves, moving fast, or fully engaged in what you’re doing.
              </p>
              <p>We believe control should keep up with adventure.</p>
              <p>
                The MAV was built around tactile, dependable interaction; real buttons you can use by feel, without
                looking, and without slowing down. When you’re in motion, control should be instinctive, subtle, and
                ready the moment you need it.
              </p>
              <p>
                The MAV grew out of that mindset. It reflects our belief that small, thoughtful improvements make
                active experiences better, not louder or more complicated, just smoother.
              </p>
              <p>
                With years of Bluetooth innovation behind us, we focus on building tools that support focus, movement
                and momentum, not distractions.
              </p>
              <p>
                Because the best adventures aren’t about managing your gear. They’re about staying in the moment,
                moving forward, and having the Freedom To Perform
              </p>
            </div>

            <div className="space-y-4 border-t border-primary/20 pt-8">
              <h2 className="text-3xl font-bold text-primary">About AirTurn</h2>
              <p className="text-muted-foreground">
                AirTurn is based in Boulder, Colorado where mountains, trails, and an active outdoor culture shapes how
                we think and build. We design Bluetooth control solutions for performers at work, in training, and out
                on adventures. Founded on the belief that technology should stay out of the way, AirTurn has spent
                years developing reliable, low-latency wireless controllers for musicians, athletes, and active users.
                Our products are built around tactile interaction, real buttons that work by feel, without screens or
                complex gestures. From studios and stages to slopes and trails, AirTurn tools are designed to perform in
                real-world conditions. Everything we build supports one core idea: giving people the Freedom To Perform.
              </p>
            </div>

            <div className="pt-6">
              <Card className="border-primary/20 shadow-card w-full sm:w-1/2 mx-auto">
                <CardContent className="p-0">
                  <div className="bg-gradient-card rounded-lg overflow-hidden">
                    <img
                      src="https://cdn.shopify.com/s/files/1/1109/4160/files/group_photo_web_1024x1024.jpg?v=1678469932"
                      alt="AirTurn team group photo"
                      className="w-full h-auto"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary">Get In Touch</h2>
              <p className="text-xl text-muted-foreground">
                Our customer service team is here to help
              </p>
            </div>

            <Card className="border-primary/20 shadow-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      1668 Valtec Lane Unit G<br />
                      Boulder, CO 80301
                    </p>
                  </div>

                  <div>
                    <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-muted-foreground text-sm">
                      888-247-1223
                    </p>
                  </div>

                  <div>
                    <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground text-sm">
                      support@airturn.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

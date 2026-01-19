import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Smartphone, Apple, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Downloads = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-5 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-card backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary/20">
              <Download className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">App Downloads</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-sky-500">
                App
              </span>{" "}
              <span className="text-foreground">Downloads</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download the AirTurn MAV app for your mobile device
            </p>
          </div>
        </div>
      </section>

      <main className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            <div className="grid gap-8 md:grid-cols-2 mt-16">
              {/* iOS App Download */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Apple className="h-6 w-6 text-primary" />
                    Download for iOS
                  </CardTitle>
                  <CardDescription>
                    Get the AirTurn MAV app from the App Store
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full justify-center gap-3 h-12" 
                    variant="default"
                    asChild
                  >
                    <a 
                      href="https://apps.apple.com/app/airturn-mav" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      data-track-button="true"
                    >
                      <Apple className="h-5 w-5" />
                      App Store
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Android App Download */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    Download for Android
                  </CardTitle>
                  <CardDescription>
                    Get the AirTurn MAV app from Google Play
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full justify-center gap-3 h-12" 
                    variant="default"
                    asChild
                  >
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.airturn.mav" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      data-track-button="true"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      Google Play
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="mt-12 text-center">
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
                <p className="text-muted-foreground mb-4">
                  Visit our support page for troubleshooting guides and FAQs
                </p>
                <Button variant="outline" asChild>
                  <Link to="/support" data-track-button="true">
                    Go to Support
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Downloads;

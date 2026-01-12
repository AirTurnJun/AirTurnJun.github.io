import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Check, Phone, Mail, MapPin } from "lucide-react";

const WarrantyRegistration = () => {

  const warrantyFeatures = [
    "2-year limited warranty coverage",
    "Protection against defects in materials and workmanship",
    "Fast replacement service for registered products",
    "Priority customer support",
    "Easy online claim process"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 pb-5 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-card backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary/20">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Warranty Protection</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-sky-500">
                Warranty
              </span>{" "}
              <span className="text-foreground">Registration</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Register your AirTurn product to activate your 2-year limited warranty and ensure you're covered for defects in materials or workmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Registration Form */}
            <div className="lg:col-span-2">
              <Card className="border-primary/20 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Product Registration</CardTitle>
                  <p className="text-muted-foreground">
                    Complete the form below to register your AirTurn product for warranty coverage.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="w-full" style={{ filter: "invert(1)" }}>
                    <div style={{ filter: "hue-rotate(180.00deg) saturate(100%) brightness(90%)" }}>
                      <iframe
                        src="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd7srRKusGT57WwbnkAZXFQW-MmqokjAKp0ef1u8ZsoE84r5w/formResponse?embedded=true"
                        width="100%"
                        height="1200"
                        style={{ border: 0 }}
                        className="rounded-lg"
                        title="AirTurn Warranty Registration Form"
                      >
                        Loading…
                      </iframe>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>


            {/* Sidebar Information */}
            <div className="space-y-6">

              {/* US Customers Notice */}
              <Card className="border-emerald-800/30 bg-gradient-to-br from-emerald-950/40 to-green-950/30 shadow-lg">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-xl text-white">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <Shield className="w-5 h-5 text-emerald-600" />
                    </div>
                    US Customers
                  </CardTitle>
                  <p className="text-white mt-2 text-sm">Warranty coverage and registration for United States customers</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-emerald-900/20 p-5 rounded-lg border border-emerald-700/30">
                      <div className="space-y-4">
                        <h3 className="font-bold text-lg text-white flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          2-Year Limited Warranty
                        </h3>
                        <ul className="space-y-3 text-white text-sm">
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">Covers defects in materials or workmanship under normal use</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">Product registration required for warranty activation</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">Excludes damage from improper use or negligent care</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">Proof of purchase may be required for claims</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* International Customers Notice */}
              <Card className="border-orange-800/30 bg-gradient-to-br from-orange-950/40 to-amber-950/30 shadow-lg">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-xl text-white">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Shield className="w-5 h-5 text-orange-600" />
                    </div>
                    International Customers
                  </CardTitle>
                  <p className="text-white mt-2 text-sm">Warranty terms for customers outside the United States</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-orange-900/20 p-5 rounded-lg border border-orange-700/30">
                      <p className="text-white leading-relaxed mb-4 text-sm">
                        Warranty coverage outside the US is subject to local or regional policies. Contact the reseller or distributor where you purchased the product to obtain the specific warranty terms applicable to your region.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Warranty Benefits */}
              <Card className="border-primary/20 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Warranty Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {warrantyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="border-primary/20 shadow-card">
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Phone Support</p>
                        <p className="text-sm text-muted-foreground">+1 (888) 247-1223</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Email Support</p>
                        <p className="text-sm text-muted-foreground">support@airturn.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">Address</p>
                        <p className="text-sm text-muted-foreground">
                          1668 Valtec Lane, Unit G<br />
                          Boulder, Colorado 80301<br />
                          USA
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WarrantyRegistration;
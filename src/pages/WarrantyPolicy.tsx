import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Clock, FileText, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const WarrantyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-5 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-card backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary/20">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Legal Information</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-hero bg-clip-text text-sky-500">
                Warranty 
              </span>{" "}
              <span className="text-foreground">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete terms and conditions for AirTurn product warranties, coverage details, and claim procedures.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/warranty" data-track-button="true">
                  Register Your Device
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-8">
            
            {/* Warranty Coverage */}
            <Card className="border-emerald-800/30 bg-gradient-to-br from-emerald-950/40 to-green-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Shield className="w-6 h-6 text-emerald-600" />
                  </div>
                  Warranty Coverage
                </CardTitle>
                <p className="text-white mt-2">Comprehensive protection for your AirTurn products</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <h3 className="font-bold text-lg text-white">Coverage Period</h3>
                    </div>
                    <div className="bg-emerald-900/20 p-4 rounded-lg border border-emerald-700/30">
                      <ul className="space-y-3 text-white">
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">2-year limited warranty for most products in the US</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">Warranty begins from the date of purchase</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">Covers defects in materials or workmanship under normal use</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <h3 className="font-bold text-lg text-white">Activation Requirements</h3>
                    </div>
                    <div className="bg-emerald-900/20 p-4 rounded-lg border border-emerald-700/30">
                      <ul className="space-y-3 text-white">
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">Product must be registered on AirTurn's website</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">Proof of purchase may be required for claims</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">Registration helps provide better support and updates</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Warranty Exclusions */}
            <Card className="border-red-800/30 bg-gradient-to-br from-red-950/40 to-rose-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  Warranty Exclusions
                </CardTitle>
                <p className="text-white mt-2 font-medium">Important: The following items are NOT covered under this warranty</p>
              </CardHeader>
              <CardContent>
                <div className="bg-red-900/20 p-6 rounded-lg border border-red-700/30">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white mb-4">Usage & Care Exclusions</h4>
                      <ul className="space-y-3 text-white">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">Damage from improper use or negligent care</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">Exterior damage or defacement</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">Alterations to product design</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white mb-4">Component Exclusions</h4>
                      <ul className="space-y-3 text-white">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">Cables and batteries</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">3rd party app support issues</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">Damage from unauthorized repairs</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Warranty Claim Process */}
            <Card className="border-blue-800/30 bg-gradient-to-br from-blue-950/40 to-indigo-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-600" />
                  </div>
                  Warranty Claim Process
                </CardTitle>
                <p className="text-white mt-2">Step-by-step guide to submitting your warranty claim</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-700/30">
                    <h3 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      How to Submit a Claim
                    </h3>
                    <ol className="space-y-5">
                      <li className="flex gap-4">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-lg">1</div>
                        <div className="pt-1">
                          <span className="text-white font-medium leading-relaxed">Request a Return Merchandise Authorization (RMA) number from AirTurn support</span>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-lg">2</div>
                        <div className="pt-1">
                          <span className="text-white font-medium leading-relaxed">Package your product securely and include the RMA number</span>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-lg">3</div>
                        <div className="pt-1">
                          <span className="text-white font-medium leading-relaxed">Ship the product to AirTurn (customer pays shipping costs)</span>
                        </div>
                      </li>
                      <li className="flex gap-4">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-lg">4</div>
                        <div className="pt-1">
                          <span className="text-white font-medium leading-relaxed">AirTurn will repair or replace the product and pay return shipping</span>
                        </div>
                      </li>
                    </ol>
                  </div>
                  
                  <div className="bg-blue-900/30 border border-blue-700/40 p-5 rounded-lg">
                    <h4 className="font-bold mb-3 text-white flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Important Notes
                    </h4>
                    <ul className="space-y-2 text-white">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">You may be required to return your defective product or provide proof of decommission</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">Proof of date of purchase may be required for warranty claims</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">AirTurn covers return shipping for repaired or replaced products</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Limitations */}
            <Card className="border-amber-800/30 bg-gradient-to-br from-amber-950/40 to-yellow-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  Key Limitations
                </CardTitle>
                <p className="text-white mt-2">Legal terms and warranty boundaries</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-amber-900/20 p-6 rounded-lg border border-amber-700/30">
                    <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      Legal Limitations
                    </h3>
                    <ul className="space-y-3 text-white">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">Implied warranties are limited to one year</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">Exclusive remedy is repair or replacement of the product</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">No liability for repairs performed by unauthorized servicers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">No compensation for incidental or consequential damages</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-amber-900/30 border border-amber-700/40 p-5 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-amber-200 rounded-full mt-1">
                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      </div>
                      <p className="font-medium text-white leading-relaxed">
                        This warranty provides specific legal rights that may vary by state or jurisdiction.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* International Customers */}
            <Card className="border-orange-800/30 bg-gradient-to-br from-orange-950/40 to-amber-950/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Shield className="w-6 h-6 text-orange-600" />
                  </div>
                  International Customers
                </CardTitle>
                <p className="text-white mt-2">Warranty terms and support for customers outside the United States</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-orange-900/20 p-6 rounded-lg border border-orange-700/30">
                    <p className="text-white leading-relaxed mb-4">
                      Warranty coverage outside the United States is subject to local or regional policies and may differ from the terms outlined above.
                    </p>
                    
                    <div className="space-y-4">
                      <h3 className="font-bold text-lg text-white flex items-center gap-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        What to Do:
                      </h3>
                      <ul className="space-y-3 text-white">
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">Contact the reseller or distributor where you purchased the product</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">Obtain the specific warranty terms applicable to your region</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">If you encounter difficulties, contact AirTurn directly for assistance</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-orange-900/30 border border-orange-700/40 p-5 rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-orange-200 rounded-full mt-1">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      </div>
                      <div>
                        <p className="font-bold text-white mb-1">Need Help?</p>
                        <p className="text-white leading-relaxed">
                          AirTurn support is available to assist international customers with warranty questions and will work to ensure you receive appropriate support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-slate-700/30 bg-gradient-to-br from-slate-900/40 to-gray-900/30 shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <FileText className="w-6 h-6 text-slate-600" />
                  </div>
                  Contact Support
                </CardTitle>
                <p className="text-white mt-2">Get help with warranty claims and support</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-800/20 p-6 rounded-lg border border-slate-600/30">
                    <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                      <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                      Warranty Claims & Support
                    </h3>
                    <div className="space-y-4 text-slate-700">
                      <div className="flex items-center gap-4 p-3 bg-slate-800/30 rounded-lg border border-slate-600/30 hover:bg-slate-700/40 transition-colors">
                        <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center shadow-sm">
                          <Mail className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                          <p className="font-bold text-white">Email Support</p>
                          <p className="text-white text-sm">support@airturn.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-3 bg-slate-800/30 rounded-lg border border-slate-600/30 hover:bg-slate-700/40 transition-colors">
                        <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center shadow-sm">
                          <Phone className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                          <p className="font-bold text-white">Phone Support</p>
                          <p className="text-white text-sm">+1 (888) 247-1223</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-800/20 p-6 rounded-lg border border-slate-600/30">
                    <h3 className="font-bold text-lg mb-4 text-white flex items-center gap-2">
                      <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                      Mailing Address
                    </h3>
                    <div className="flex items-start gap-4 p-3 bg-slate-800/30 rounded-lg border border-slate-600/30">
                      <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center mt-1 shadow-sm">
                        <MapPin className="w-5 h-5 text-slate-600" />
                      </div>
                      <div className="text-slate-700 leading-relaxed">
                        <p className="font-bold text-white mb-1">AirTurn, Inc.</p>
                        <p className="text-white">1668 Valtec Lane, Unit G</p>
                        <p className="text-white">Boulder, Colorado 80301</p>
                        <p className="text-white">USA</p>
                      </div>
                    </div>
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

export default WarrantyPolicy;

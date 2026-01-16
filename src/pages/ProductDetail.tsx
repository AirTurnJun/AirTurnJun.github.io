import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Smartphone, Battery, Droplets, ArrowRight, Check, Bluetooth, Watch, Volume2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "react-router-dom";
import { ShopifyBuyButton } from "@/components/ShopifyBuyButton";
import Gallery from "@/components/shadcn-studio/blocks/gallery-component-10/gallery-component-10";
const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const {
    toast
  } = useToast();

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);
  const handleAddToCart = () => {
    console.log('handleAddToCart called, quantity:', quantity);

    // Check if Shopify function exists
    if (typeof (window as any).addToShopifyCart === 'function') {
      console.log('Calling addToShopifyCart with quantity:', quantity);
      (window as any).addToShopifyCart(quantity);
      // Don't show success toast here - let the Shopify function handle it
    } else {
      console.log('addToShopifyCart not found, checking for Shopify components...');

      // Try to add to cart using Shopify UI directly
      const shopifyUI = (window as any).shopifyUI;
      const shopifyProduct = (window as any).shopifyProductComponent;

      if (shopifyUI && shopifyProduct) {
        console.log('Found Shopify UI and product, attempting direct add to cart');

        // Try to add directly
        if (shopifyUI.components && shopifyUI.components.cart && shopifyUI.components.cart.length > 0) {
          const cart = shopifyUI.components.cart[0];

          if (shopifyProduct.model && shopifyProduct.model.selectedVariant) {
            const variant = shopifyProduct.model.selectedVariant;

            cart.addVariantToCart(variant, quantity).then(() => {
              console.log('Successfully added to cart!');
              cart.open();
              toast({
                title: "Added to cart!",
                description: `${quantity} AirTurn MAV${quantity > 1 ? 's' : ''} added to your cart.`
              });
            }).catch((err: any) => {
              console.error('Error adding to cart:', err);
              toast({
                title: "Error",
                description: "Failed to add item to cart. Please try again."
              });
            });
          }
        }
      } else {
        // Shopify not ready yet - retry after a delay
        console.log('Shopify not ready, retrying in 1 second...');
        toast({
          title: "Loading cart...",
          description: "Please wait a moment and try again."
        });

        // Retry after 1 second
        setTimeout(() => {
          if (typeof (window as any).addToShopifyCart === 'function') {
            console.log('Retry successful - calling addToShopifyCart');
            (window as any).addToShopifyCart(quantity);
          } else {
            console.error('Shopify still not ready after retry');
          }
        }, 1000);
      }
    }
  };
  const productImages = ["https://www.airturn.com/cdn/shop/files/Perspective_Square_1800x1800.jpg?v=1750191761", "https://www.airturn.com/cdn/shop/files/Top_View_LED_On_Square_1800x1800.jpg?v=1750191761", "https://www.airturn.com/cdn/shop/files/Side_View_Square_1_1800x1800.jpg?v=1750191761", "https://www.airturn.com/cdn/shop/files/Bottom_View_no_Charger_Square_670x.jpg?v=1750191761", "https://www.airturn.com/cdn/shop/files/Bottom_View_with_Charger_Square_1800x1800.jpg?v=1750191761"];
  const features = [{
    icon: Watch,
    title: "Wearable Design",
    description: "Straps securely to your arm, wrist, gear, or handlebars"
  }, {
    icon: Droplets,
    title: "Weatherproof Build",
    description: "Water, dust, and shock resistant for any adventure"
  }, {
    icon: Battery,
    title: "Magnetic Charging",
    description: "Snap-on USB magnetic cable—easy even when wet"
  }, {
    icon: Smartphone,
    title: "App Compatibility",
    description: "Works with hundreds of apps across iOS and Android"
  }, {
    icon: Bluetooth,
    title: "Bluetooth 5 Wireless",
    description: "Strong connection with 120 feet of range"
  }, {
    icon: Volume2,
    title: "Tactile Control",
    description: "Five soft buttons with LED backlighting for any condition"
  }];
  const specs = [{
    label: "Connectivity",
    value: "Bluetooth 5.0"
  }, {
    label: "Battery Life",
    value: "200+ hours"
  }, {
    label: "Charging",
    value: "Magnetic USB Cable"
  }, {
    label: "Weather Rating",
    value: "Waterproof, dustproof, impact-resistant"
  }, {
    label: "Buttons",
    value: "5 soft-touch with LED backlighting"
  }, {
    label: "Range",
    value: "120 feet"
  }, {
    label: "Weight",
    value: "3 oz"
  }, {
    label: "Warranty",
    value: "2-year with registration"
  }];
  const galleryImages = [{
    src: "/lovable-uploads/IMG_3254.jpg",
    alt: "MAV lifestyle photo 1",
    className: "lg:row-span-2 max-lg:col-span-full"
  }, {
    src: "/lovable-uploads/IMG_096.jpg",
    alt: "MAV lifestyle photo 2",
    className: "row-span-3"
  }, {
    src: "/lovable-uploads/P1002256.jpg",
    alt: "MAV lifestyle photo 3",
    className: "lg:row-span-2"
  }, {
    src: "/lovable-uploads/IMG_3163.jpg",
    alt: "MAV lifestyle photo 4",
    className: "lg:row-span-2"
  }, {
    src: "/lovable-uploads/IMG_1436.jpg",
    alt: "MAV lifestyle photo 5",
    className: "row-span-3"
  }, {
    src: "/lovable-uploads/Weixin Image_2026011610303_63.png",
    alt: "MAV lifestyle photo 6",
    className: "row-span-4"
  }, {
    src: "/lovable-uploads/IMG_1457.jpg",
    alt: "MAV lifestyle photo 7",
    className: "lg:row-span-2"
  }, {
    src: "/lovable-uploads/IMG_1582.jpg",
    alt: "MAV lifestyle photo 8",
    className: "row-span-5"
  }, {
    src: "https://www.airturn.com/cdn/shop/files/Lifestyle_Try_This_1800x1800.jpg?v=1750191761",
    alt: "MAV lifestyle photo 9",
    className: "lg:row-span-2"
  }];
  return <div className="min-h-screen bg-background">
    <Header />

    {/* Hidden Shopify Buy Button for cart integration */}
    <ShopifyBuyButton quantity={quantity} />

    {/* Main Product Section */}
    <div className="pt-24 min-h-screen flex items-center">
      <div className="container mx-auto px-0 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Product Images */}
          <div className="px-5 flex flex-col gap-4 sm:flex-row">
            {/* Thumbnail Navigation */}
            <div
              className="order-2 flex flex-row sm:order-1 sm:flex-col max-w-full sm:max-w-24 gap-2 sm:aspect-square overflow-x-auto sm:overflow-y-auto pr-0 sm:pr-2 pb-2 sm:pb-0 [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 sm:w-24 sm:h-24 rounded-md overflow-hidden border-2 transition-colors flex-shrink-0 ${selectedImage === index ? "border-primary" : "border-border"
                    }`}
                >
                  <img src={image} alt={`MAV view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="order-1 sm:order-2 flex-1 aspect-square overflow-hidden">
              <img src={productImages[selectedImage]} alt="AirTurn MAV" className="rounded-lg w-full h-auto object-cover" />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6 px-3">
            <div>
              <Badge variant="secondary" className="mb-2">New Release</Badge>
              <h1 className="text-4xl font-bold mb-2 text-primary">AirTurn MAV</h1>
              <p className="text-xl text-muted-foreground mb-4">
                Wearable, waterproof, and ultra-durable Bluetooth media controller
              </p>
              <ul className="list-disc pl-5 text-muted-foreground space-y-2 mb-4">
                <li>Buttons, not gestures - Control music, podcasts, apps, and devices with real, tactile buttons you can use without looking, swiping, or pinching.</li>
                <li>Made for motion - Wearable, rugged, and glove-friendly control that works while running, training, skiing, or moving through your day.</li>
                <li>Keep your phone put away - Skip, pause, adjust volume, or trigger actions without stopping, fumbling, or pulling out your phone.</li>
              </ul>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="text-xs">In Stock</Badge>
                <span className="text-muted-foreground text-sm">Ready to ship</span>
              </div>
            </div>

            <div className="text-3xl font-bold text-primary">$99.00</div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium">Quantity:</label>
                <div className="flex items-center border rounded-md">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-1 hover:bg-muted">
                    -
                  </button>
                  <span className="px-4 py-1 border-x text-white font-extrabold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 hover:bg-muted">
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  variant="hero"
                  size="xl"
                  className="w-full flex text-sky-500 whitespace-normal justify-between leading-snug h-auto py-4 md:h-14 md:py-0"
                  onClick={handleAddToCart}
                >
                  <div className="text-center">
                    <span className="w-full md:w-auto">Add to Cart - ${(99.00 * quantity).toFixed(2)}</span>
                    <span className="w-full md:w-auto md:ml-1 inline-flex items-center justify-center">
                      (Free 2-day shipping)
                    </span>
                  </div>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t">
              <div className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Free 2-day shipping</p>
                  <p className="text-muted-foreground">If you're in the lower-48, get your order in 2 days, no charge.</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">30-day money-back guarantee</p>
                  <p className="text-muted-foreground">Try MAV risk-free for 30 days. If it's not the right fit, return it for a full refund, no hassle.</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Check className="w-4 h-4 text-green-500 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">2-year manufacturer warranty</p>
                  <p className="text-muted-foreground">Every MAV is backed by a 2-year manufacturer warranty, covering defects in materials.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Product Video Section 
    <section>
      <div className="w-full">
        <div className="aspect-video overflow-hidden bg-muted">
          <video className="w-full h-full object-cover" controls autoPlay muted loop preload="metadata" poster="/lovable-uploads/e8f70cd8-6ea4-4909-8fbd-cfb836ae9cd9.png">
            <source src="https://cdn.shopify.com/videos/c/o/v/15c553736a2f496bb692b7b9d154cdc5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
    */}

    <Gallery data={galleryImages} />

    {/* Specifications */}
    <section id="specs" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Technical Specifications</h2>

          <Card className="border-primary/20">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {specs.map((spec, index) => <div key={index}>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium">{spec.label}</span>
                    <span className="text-muted-foreground ml-5 text-right">{spec.value}</span>
                  </div>
                  {index < specs.length - 1 && <Separator />}
                </div>)}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section id="features" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Stay in the Moment</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Manage music and call without stopping, slowing down, or pulling out your phone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => <Card key={index} className="text-center p-6 border-primary/20">
            <CardContent className="p-0">
              <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </CardContent>
          </Card>)}
        </div>
      </div>
    </section>

    {/* Description */}
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Product Description</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The AirTurn MAV is a rugged, Bluetooth-enabled media controller designed for movement. With five tactile buttons
              and a compact, strap-on design, it offers direct control over your apps, whether you're hiking, biking, paddling,
              or snowboarding. No need to dig out your phone; just press a button to stay in control.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Built to withstand the elements, the MAV is waterproof, dustproof, and impact-resistant. Its sealed housing and
              durable construction make it ideal for adventures in any weather, rain, snow, mud, or dust. The MAV gives you
              physical control you can count on, whether you're wearing gloves or in motion.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Weighing just a few ounces, the MAV stays out of the way while staying ready for action. Mount it to your wrist,
              bike, pack, or gear with the included strap for comfortable access without adding bulk. With up to 200+ hours of
              battery life and magnetic charging, it's built for extended adventures.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>;
};
export default ProductDetail;

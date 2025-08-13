import { useState, useEffect } from "react";
import {
  X,
  Truck,
  Star,
  ShoppingCart,
  Package,
  Gift,
  Users,
  Sparkles,
  Zap,
  CheckCircle,
} from "lucide-react";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import AutoScrollCarousel from "../components/AutoScrollCarousel";

const products = [
  {
    id: 1,
    name: "Gift a Snack Chip Variety Snack Box - 35 Count",
    description:
      "A delicious assortment of individually wrapped snacks including chips, crackers, cookies, and candy. Perfect for gifting, office snacks, or on-the-go treats.",
    size: "35 ct",
    price: "$22.97",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F79b7dfd5cb0f4ca0b96e836c27c6ef40%2F77788b1b06194d9e9278b4a63bb3471e?format=webp&width=800",
    walmartLink:
      "https://goto.walmart.com/c/5610446/565706/9383?veh=aff&sharedid=mp_16964_2016489964_q6f5b_h7ap1ka_A0FC4ECE545F34A0AC91A1F0010E9041&u=https%3A%2F%2Fwww.walmart.com%2Fip%2F5298521902%3FselectedSellerId%3D16964%26selectedOfferId%3DA0FC4ECE545F34A0AC91A1F0010E9041",
  },
  {
    id: 2,
    name: "Gift a Snack Chip Variety Snack Box - 42 Count",
    description:
      "Includes 42 premium snacks from brands like Airheads, Cheez It, and Famous Amos. Comes in high-end packaging with a greeting card. Great for students, employees, and family members.",
    size: "42 ct",
    price: "$23.96",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F79b7dfd5cb0f4ca0b96e836c27c6ef40%2Fcd06d6ab52e341e2b57efd6b128aeeaa?format=webp&width=800",
    walmartLink:
      "https://goto.walmart.com/c/5610446/565706/9383?veh=aff&sharedid=mp_16964_2016489964_ai3se_ims37kq_ACF1D44511903907A6802D948A4EFE22&u=https%3A%2F%2Fwww.walmart.com%2Fip%2F6277108895%3FselectedSellerId%3D16964%26selectedOfferId%3DACF1D44511903907A6802D948A4EFE22",
  },
  {
    id: 3,
    name: "Gift a Snack Chip Variety Snack Box - 52 Count",
    description:
      "52-count snack box filled with a diverse variety of sweet and salty treats. Ideal for care packages, corporate gifts, or family movie nights.",
    size: "52 ct",
    price: "$31.46",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F79b7dfd5cb0f4ca0b96e836c27c6ef40%2F5ff73d8278224c2ab0b862f059e3802c?format=webp&width=800",
    walmartLink:
      "https://goto.walmart.com/c/5610446/565706/9383?veh=aff&sharedid=mp_16964_2016489964_gjxxi_oa60h68_B7E6E4A96EDA37A6A1D11E1083EBED26&u=https%3A%2F%2Fwww.walmart.com%2Fip%2F5915077819%3FselectedSellerId%3D16964%26selectedOfferId%3DB7E6E4A96EDA37A6A1D11E1083EBED26",
  },
  {
    id: 4,
    name: "Gift A Snack Snack Box Care Package - 105 Count",
    description:
      'Dive into the ultimate snacking experience with the "Gift A Snack" Snack Box Care Package. Our 105-count variety pack brims with a mix of America\'s favorite candies, chips, crackers, and bars, offering something delicious for every craving. Perfectly packaged in individual servings for on-the-go ease, each box also includes a cheerful greeting card to spread extra joy. Thoughtfully presented in a beautifully branded box, this snack pack makes a fantastic gift for adults, teens, college students, or anyone who deserves a special treat. Note: Some snacks may vary but will always be of equal or greater value.',
    size: "105 ct",
    price: "$45.97",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F79b7dfd5cb0f4ca0b96e836c27c6ef40%2F936b74c9566f406ebebd96074d052d09?format=webp&width=800",
    walmartLink: "#", // Replace with actual Walmart link
  },
];

const features = [
  {
    title: "Huge Variety",
    description: "Over 30 types of snacks",
    icon: Package,
  },
  {
    title: "Luxury Packaging",
    description: "Perfect as a gift",
    icon: Gift,
  },
  {
    title: "For Everyone",
    description: "Kids, students, employees",
    icon: Users,
  },
  {
    title: "Fresh & Tasty",
    description: "Guaranteed quality",
    icon: Sparkles,
  },
  {
    title: "Easy to Order",
    description: "Fast shipping",
    icon: Zap,
  },
];

export default function Index() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  const scrollToProducts = () => {
    document
      .getElementById("products-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const openFirstProductModal = () => {
    setSelectedProduct(products[0]);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const threshold = window.innerHeight * 0.5;
      setShowFloatingButton(scrolled > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize TikTok embeds
  useEffect(() => {
    const timer = setTimeout(() => {
      if ((window as any).tiktokEmbed?.lib?.render) {
        (window as any).tiktokEmbed.lib.render();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? "fill-snack-gold text-snack-gold" : "text-gray-300"}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-50 py-24 px-4 sm:py-40">
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left fade-in">
              {/* Logo with frame */}
              <div className="flex justify-center lg:justify-start mb-6 sm:mb-8">
                <div className="bg-gray-100 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg inline-block">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F79b7dfd5cb0f4ca0b96e836c27c6ef40%2Fcd932fcd18414ba798762d622c2b825c?format=webp&width=800"
                    alt="Nut Cravings Logo"
                    className="h-16 sm:h-20 lg:h-24 w-auto"
                  />
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-logo-green/10 text-logo-green px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <CheckCircle className="w-4 h-4" />
                Premium Quality Guaranteed
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-heading-red mb-6 leading-tight tracking-tight">
                Snack Box
                <span className="block text-snack-dark-blue">
                  Perfect Gift for
                </span>
                <span className="block bg-gradient-to-r from-logo-green to-green-500 bg-clip-text text-transparent">
                  Snack Lovers
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-snack-dark-blue/80 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Premium assortment of delicious snacks, beautifully packaged.
                Perfect for gifts, office treats, and special occasions.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
                <button
                  onClick={scrollToProducts}
                  className="bg-logo-green hover:bg-green-500 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg button-enhanced flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <Package className="w-5 h-5" />
                  Shop Now
                </button>
                <button className="border-2 border-logo-green text-logo-green hover:bg-logo-green hover:text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg transition-all duration-300 min-h-[48px]">
                  Learn More
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-snack-dark-blue/60">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-logo-green" />
                  30+ Snack Varieties
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-logo-green" />
                  Fast Shipping
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-logo-green" />
                  Gift Ready
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-logo-green/20 to-green-400/20 rounded-2xl transform rotate-6"></div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ffc09862a9f0941d4aeda13a8cb2480bc%2F9a927196010f464595d03440e3666d58?format=webp&width=800"
                  alt="Snack Box Collection"
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl image-hover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-Scrolling Banner Carousel */}
      <AutoScrollCarousel />

      {/* Features & Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading-red mb-4 tracking-tight">
              Why Choose Snack Box?
            </h2>
            <p className="text-lg text-snack-dark-blue/70 max-w-2xl mx-auto">
              Discover what makes our snack boxes the perfect choice for every
              occasion
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center card-enhanced p-8 hover:scale-105 transition-all duration-300"
                >
                  <div className="feature-icon mb-6">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-heading-red mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Sizes Section */}
      <section
        id="products-section"
        className="py-20 px-4 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading-red mb-4 tracking-tight">
              Choose Your Perfect Box Size
            </h2>
            <p className="text-lg text-snack-dark-blue/70 max-w-2xl mx-auto">
              From small treats to large celebrations, we have the perfect size
              for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="card-enhanced overflow-hidden group hover:scale-105 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover image-hover"
                  />
                  {index === 1 && (
                    <div className="absolute top-3 right-3 bg-logo-green text-white px-2 py-1 rounded-full text-xs font-bold">
                      Popular
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-base font-bold text-heading-red mb-2 line-clamp-2 group-hover:text-logo-green transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-3 line-clamp-2 leading-relaxed text-xs">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xl font-bold text-heading-red">
                      {product.price}
                    </span>
                    <span className="text-xs text-white font-semibold bg-logo-green px-2 py-1 rounded-full">
                      {product.size}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full bg-logo-green hover:bg-green-500 text-white font-bold py-2 rounded-xl text-sm flex items-center justify-center gap-1"
                  >
                    <Package className="w-4 h-4" />
                    Open Your Box
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsCarousel />
{/* TikTok Videos Section */}
      <section
        className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Watch Snack Box on TikTok
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              See our snack boxes in action and get inspired for your next order
            </p>
          </div>

          

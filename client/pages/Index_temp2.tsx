        </div>
      </section>

      {/* Final Call-to-Action Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-100 via-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-logo-green/10 to-transparent"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="card-enhanced p-12 bg-white/80 backdrop-blur-sm">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading-red mb-6 tracking-tight">
              Ready to Experience the Tastiest Snack Box?
            </h2>
            <p className="text-xl text-snack-dark-blue/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied customers. Choose your perfect size
              and order now from Walmart.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={scrollToProducts}
                className="bg-logo-green hover:bg-green-500 text-white font-bold px-12 py-4 rounded-2xl text-xl button-enhanced flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-6 h-6" />
                Order Now
              </button>
              <button
                onClick={openFirstProductModal}
                className="border-2 border-logo-green text-logo-green hover:bg-logo-green hover:text-white font-bold px-12 py-4 rounded-2xl text-xl transition-all duration-300"
              >
                View Products
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-snack-dark-blue/60">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-logo-green" />
                30+ Premium Snacks
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-logo-green" />
                Gift-Ready Packaging
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-logo-green" />
                Fast US Shipping
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-logo-green" />
                Satisfaction Guaranteed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Boosters */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Fast Shipping */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 bg-logo-green/10 text-logo-green px-8 py-4 rounded-2xl">
              <Truck className="w-8 h-8" />
              <span className="text-lg font-semibold">
                Fast & Guaranteed Shipping Across the United States
              </span>
            </div>
          </div>

          {/* Payment Icons */}
          <div className="text-center">
            <p className="text-gray-600 mb-8 text-lg font-semibold">
              Secure Payment Methods
            </p>
            <div className="flex justify-center items-center gap-6">
              <div className="w-20 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg hover:shadow-xl transition-shadow">
                VISA
              </div>
              <div className="w-20 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg hover:shadow-xl transition-shadow">
                MC
              </div>
              <div className="w-20 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg hover:shadow-xl transition-shadow">
                PayPal
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-snack-dark-blue text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-heading-red">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="hover:text-logo-green transition-colors text-lg"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#products-section"
                    className="hover:text-logo-green transition-colors text-lg"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-logo-green transition-colors text-lg"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-logo-green transition-colors text-lg"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-heading-red">
                Follow Us
              </h3>
              <div className="flex gap-6">
                <a
                  href="https://tiktok.com/@nut.cravings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-logo-green transition-colors text-lg"
                >
                  TikTok
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-logo-green transition-colors text-lg"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-logo-green transition-colors text-lg"
                >
                  Facebook
                </a>
              </div>
            </div>

            {/* Walmart Link */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-heading-red">
                Order Now
              </h3>
              <a
                href={products[0].walmartLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-logo-green hover:bg-green-500 text-white px-8 py-3 rounded-2xl transition-colors duration-200 text-lg font-semibold button-enhanced"
              >
                Order from Walmart
              </a>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-10 text-center">
            <p className="text-lg">
              &copy; 2025 Snack Box. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Buy Now Button (Desktop & Mobile) */}
      {showFloatingButton && (
        <button
          onClick={openFirstProductModal}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-logo-green hover:bg-green-500 text-white font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl z-50 transition-all duration-200 transform hover:scale-105 button-enhanced flex items-center gap-2 min-h-[48px] min-w-[48px]"
        >
          <ShoppingCart className="w-5 h-5" />
          <span className="hidden sm:inline">Buy Now</span>
          <span className="sm:hidden">Buy</span>
        </button>
      )}

      {/* Enhanced Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 fade-in">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-hidden shadow-2xl slide-up border border-logo-green/20">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-logo-green/5 to-logo-green/10 p-4 sm:p-6 border-b border-logo-green/20">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-logo-green rounded-full flex items-center justify-center">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-heading-red">
                    Product Details
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 sm:p-3 hover:bg-red-50 hover:text-red-500 rounded-full transition-all duration-200 group min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <X className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[calc(95vh-100px)] sm:max-h-[calc(95vh-120px)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start">
                {/* Product Image */}
                <div className="">
                  {/* Spark Icon with Blue Frame */}
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="bg-blue-600 p-3 rounded-xl shadow-lg inline-block">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F79b7dfd5cb0f4ca0b96e836c27c6ef40%2F9eae62feb04c48cb96ee02dd2f9b0679?format=webp&width=800"
                        alt="Spark Icon"
                        className="h-6 w-6 sm:h-8 sm:w-8 filter brightness-0 invert"
                      />
                    </div>
                  </div>

                  <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-logo-green/5 to-logo-green/10 p-4">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover rounded-xl image-hover"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-heading-red mb-3 sm:mb-4 leading-tight">
                      {selectedProduct.name}
                    </h4>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-heading-red">
                        {selectedProduct.price}
                      </span>
                      <span className="bg-logo-green text-white font-bold px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base lg:text-lg">
                        {selectedProduct.size}
                      </span>
                    </div>
                  </div>

                  <div className="bg-snack-light-gray/50 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                    <h5 className="font-semibold text-heading-red mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                      <Sparkles className="w-5 h-5 text-logo-green" />
                      Product Description
                    </h5>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-heading-red flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-logo-green" />
                      What's Included
                    </h5>
                    <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-logo-green" />
                        Premium variety of snacks
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-logo-green" />
                        Beautiful gift packaging
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-logo-green" />
                        Greeting card included
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={selectedProduct.walmartLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 sm:py-5 text-center rounded-xl sm:rounded-2xl text-lg sm:text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 min-h-[48px]"
                  >
                    <ShoppingCart className="w-6 h-6" />
                    Buy Now on Walmart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

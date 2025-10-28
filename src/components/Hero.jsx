import { Link } from 'react-router-dom';

function Hero() {
  // This URL will generate a gray placeholder image
  const placeholderImageUrl = "https://placehold.co/800x600/EFEFEF/AAAAAA?text=Hero+Image";

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">

          {/* Left Column (Text & Buttons) */}
          <div className="lg:w-1/2 lg:pr-10">
            <h1 className="text-5xl lg:text-6xl font-raleway font-bold text-text-dark mb-6">
              Cook Your Way to Perfect Health
            </h1>
            <p className="text-text-light text-lg mb-8">
              Your journey to wellness starts in the kitchen. Discover personalized
              Ayurvedic diet plans, delicious recipes, and expert guidance
              tailored to your unique dosha.
            </p>
            <div className="flex gap-4">
              <Link
                to="/recipes"
                className="bg-primary text-white font-manrope font-medium py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition-all"
              >
                Explore Recipes
              </Link>
              <Link
                to="/book-consultation"
                className="bg-gray-100 text-text-dark font-manrope font-medium py-3 px-8 rounded-full hover:bg-gray-200 transition-all"
              >
                Book Consultation
              </Link>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img 
              src={placeholderImageUrl} // We use the placeholder URL here
              alt="Healthy Ayurvedic food placeholder" 
              className="w-full h-auto rounded-lg" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
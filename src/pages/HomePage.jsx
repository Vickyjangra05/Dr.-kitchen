import Hero from '../components/Hero'; // 1. Import our new component

function HomePage() {
  return (
    <div>
      {/* 2. Add the Hero section */}
      <Hero />

      {/* 3. Add temporary space so we can test scrolling */}
      <div className="h-[100vh] bg-white"></div>
    </div>
  );
}

export default HomePage;
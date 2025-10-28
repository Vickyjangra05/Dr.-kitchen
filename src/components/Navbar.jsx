import { useState } from 'react';
// Import NavLink instead of Link
import { NavLink } from 'react-router-dom';
// Added CookingPot (as a placeholder for the logo) and ShoppingCart
import { Menu, X, CookingPot, ShoppingCart } from 'lucide-react';

// --- STYLING HELPER FUNCTIONS ---

// Updated helper function for DESKTOP NavLinks
const getNavLinkClass = ({ isActive }) => {
  return isActive
    ? 'text-base font-semibold text-orange-600 pb-1 border-b-2 border-orange-600' // Active: Orange text + Orange underline
    : 'text-base text-gray-700 font-medium hover:text-orange-600 pb-1 border-b-2 border-transparent'; // Inactive: Gray text, transparent border
};

// Updated helper function for the MOBILE menu links
const getMobileNavLinkClass = ({ isActive }) => {
  return isActive
    ? 'text-orange-600 font-bold' // Active mobile link
    : 'text-gray-700 font-medium hover:text-orange-600'; // Inactive mobile link
};

// --- NAVBAR COMPONENT ---

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Closes mobile menu on link click
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full h-24 bg-white sticky top-0 z-50 shadow-md flex items-center">
      <div className="container mx-auto flex items-center justify-between px-6">

        {/* 1. Left Side: Logo (Updated to match screenshot) */}
        <div className="flex-1 md:flex-none">
          <NavLink to="/" className="flex items-center gap-2">
            {/* Placeholder Icon styled like the screenshot */}
            <div className="flex items-center justify-center w-12 h-12 bg-orange-600 rounded-lg">
              <CookingPot size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Doctor Kitchen
              </h1>
              <p className="text-sm text-gray-500">Ayurvedic Cooking Wisdom</p>
            </div>
          </NavLink>
        </div>

        {/* 2. Center Links (DESKTOP) - Updated with new active styles */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-8">
            <li>
              <NavLink to="/" className={getNavLinkClass} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/recipes" className={getNavLinkClass}>
                Recipes
              </NavLink>
            </li>
            <li>
              <NavLink to="/diet-plans" className={getNavLinkClass}>
                Diet Plans
              </NavLink>
            </li>
            <li>
              <NavLink to="/tridosha-quiz" className={getNavLinkClass}>
                Tri Dosha Quiz
              </NavLink>
            </li>
          </ul>
        </div>

        {/* 3. Right Side: Auth & Special Links (DESKTOP) - Updated to match screenshot */}
        <div className="hidden md:flex md:flex-none justify-end">
          <div className="flex items-center gap-4">
            {/* Post-Surgery Diet: Blue Gradient Button */}
            <NavLink
              to="/post-surgery-diet"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Post-Surgery Diet
            </NavLink>
            
            {/* Pregnancy Diet: Pink Gradient Button with Badge */}
            <div className="relative">
              <NavLink
                to="/pregnancy-diet"
                className="bg-gradient-to-r from-pink-600 to-fuchsia-500 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Pregnancy Diet
              </NavLink>
              {/* Badge from screenshot (yellow circle with red '!') */}
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-400 text-red-600 font-bold text-xs">
                !
              </span>
            </div>

            {/* Cart Icon with Badge */}
            <div className="relative">
              <NavLink to="/cart" className="text-gray-700 hover:text-orange-600">
                <ShoppingCart size={24} />
              </NavLink>
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-gray-200 text-gray-700 font-bold text-xs">
                0
              </span>
            </div>
            
            {/* Login: Text Link */}
            <NavLink
              to="/login"
              className="text-sm text-gray-700 font-medium hover:text-orange-600"
            >
              Login
            </NavLink>

            {/* Sign Up: Orange Gradient Button */}
            <NavLink
              to="/signup"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Sign Up
            </NavLink>
          </div>
        </div>

        {/* 4. Mobile Menu Button (Hamburger Icon) */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={32} className="text-gray-700" />
        </button>

      </div>

      {/* 5. Mobile Menu (Full Screen Overlay) - Updated styles */}
      <div
        className={`
          absolute top-0 left-0 w-full h-screen bg-white z-50 transform transition-transform
          flex flex-col items-center justify-center gap-6
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:hidden 
        `}
      >
        {/* Close Button (X Icon) */}
        <button
          className="absolute top-8 right-6"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={32} className="text-gray-700" />
        </button>

        {/* Mobile Menu Links */}
        <ul className="flex flex-col items-center gap-6 text-2xl">
          <li>
            <NavLink to="/" className={getMobileNavLinkClass} onClick={handleMobileLinkClick} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/recipes" className={getMobileNavLinkClass} onClick={handleMobileLinkClick}>
              Recipes
            </NavLink>
          </li>
          <li>
            <NavLink to="/diet-plans" className={getMobileNavLinkClass} onClick={handleMobileLinkClick}>
              Diet Plans
            </NavLink>
          </li>
          <li>
            <NavLink to="/tridosha-quiz" className={getMobileNavLinkClass} onClick={handleMobileLinkClick}>
              Tri Dosha Quiz
            </NavLink>
          </li>
        </ul>

        {/* Mobile Special Links & Auth (Updated) */}
        <div className="flex flex-col items-center gap-5 mt-8">
          {/* Post-Surgery Diet Button */}
          <NavLink
            to="/post-surgery-diet"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-3 rounded-full font-medium"
            onClick={handleMobileLinkClick}
          >
            Post-Surgery Diet
          </NavLink>

          {/* Pregnancy Diet Button */}
          <div className="relative">
            <NavLink
              to="/pregnancy-diet"
              className="bg-gradient-to-r from-pink-600 to-fuchsia-500 text-white px-6 py-3 rounded-full font-medium"
              onClick={handleMobileLinkClick}
            >
              Pregnancy Diet
            </NavLink>
            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-yellow-400 text-red-600 font-bold text-xs">
              !
            </span>
          </div>

          {/* Cart, Login, Signup */}
          <div className="flex items-center gap-6 mt-6">
            {/* Cart Icon */}
            <div className="relative">
              <NavLink to="/cart" className="text-gray-700" onClick={handleMobileLinkClick}>
                <ShoppingCart size={28} />
              </NavLink>
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-gray-200 text-gray-700 font-bold text-xs">
                0
              </span>
            </div>
            
            {/* Login Link */}
            <NavLink
              to="/login"
              className="text-gray-700 font-medium text-lg"
              onClick={handleMobileLinkClick}
            >
              Login
            </NavLink>
            
            {/* Sign Up Button */}
            <NavLink
              to="/signup"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-medium text-lg"
              onClick={handleMobileLinkClick}
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
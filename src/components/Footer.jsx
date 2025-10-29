import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Phone, 
  Mail, 
  MapPin, 
  BookOpen, 
  Utensils, 
  Heart, 
  Leaf, 
  Lightbulb 
} from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      {/* Removed 'relative' class from here */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Logo & Tagline */}
          <div>
            <Link to="/">
              {/* Placeholder: Replace with your actual logo path */}
              <img src="/doctor-kitchen-logo.png" alt="Doctor Kitchen Logo" className="h-12 w-auto" /> 
            </Link>
            <p className="text-gray-300 mt-4 text-sm font-light leading-relaxed">
              Your kitchen is your pharmacy. We teach you to cook
              your way to perfect health with Ayurvedic wisdom.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-[#ff6f00] transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ff6f00] transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
            
            {/* REMOVED: "Book your session!" CTA button and "Click for free recipes!" tag 
            */}

          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold font-sans mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#ff6f00] text-sm font-light">Home</Link>
              </li>
              <li>
                <Link to="/recipes" className="text-gray-300 hover:text-[#ff6f00] text-sm font-light">Recipes</Link>
              </li>
              <li>
                <Link to="/meal-plans" className="text-gray-300 hover:text-[#ff6f00] text-sm font-light">Meal Plans</Link>
              </li>
              <li>
                <Link to="/dosha-quiz" className="text-gray-300 hover:text-[#ff6f00] text-sm font-light">Dosha Quiz</Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-300 hover:text-[#ff6f00] text-sm font-light">Success Stories</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: What We Teach */}
          <div>
            <h3 className="text-lg font-bold font-sans mb-4">What We Teach</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Heart size={16} className="text-[#ff6f00]" />
                <Link to="/healing-recipes" className="text-gray-300 hover:text-[#ff6f00] text-sm font-light">Healing Recipe Masterclasses</Link>
              </li>
              <li className="flex items-center gap-2">
                <Leaf size={16} className="text-[#ff6f00]" />
                <Link to="/dosha-cooking" className="text-gray-300 hover:text-[#ff6f00] text-sm font-light">Dosha-based Cooking</Link>
              </li>
              <li className="flex items-center gap-2">
                <Utensils size={16} className="text-[#ff6f00]" />
                <Link to="/kitchen-medicine" className="text-gray-300 hover:text-[#ff6f00] text-sm font-light">Kitchen Medicine Prep</Link>
              </li>
              <li className="flex items-center gap-2">
                <Lightbulb size={16} className="text-[#ff6f00]" />
                <Link to="/spice-therapy" className="text-gray-300 hover:text-[#ff6f00] text-sm font-light">Spice Therapy Techniques</Link>
              </li>
              <li className="flex items-center gap-2">
                <BookOpen size={16} className="text-[#ff6f00]" />
                <Link to="/meal-planning" className="text-gray-300 hover:text-[#ff6f00] text-sm font-light">Meal Planning & Prep</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <h3 className="text-lg font-bold font-sans mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-300 text-sm font-light">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>456 Kitchen Lane, Culinary Wellness Center, Delhi, <br/>India 110001</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-sm font-light">
                <Phone size={16} />
                <span>+91 90765 43210</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-sm font-light">
                <Mail size={16} />
                <span>hello@doctorkitchen.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* REMOVED: Character Illustration 
        */}

      </div>

      {/* Sub-Footer: Copyright and Policies */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Doctor Kitchen. All rights reserved.</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-[#ff6f00] transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-[#ff6f00] transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
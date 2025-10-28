import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import all our pages
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import DietPlansPage from './pages/DietPlansPage';
import TriDoshaQuizPage from './pages/TriDoshaQuizPage';
import PostSurgeryDietPage from './pages/PostSurgeryDietPage';
import PregnancyDietPage from './pages/PregnancyDietPage';
import BookingPage from './pages/BookingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

// Import the layout
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes WITH Navbar and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/diet-plans" element={<DietPlansPage />} />
          <Route path="/post-surgery-diet" element={<PostSurgeryDietPage />} />
          <Route path="/pregnancy-diet" element={<PregnancyDietPage />} />
          <Route path="/book-consultation" element={<BookingPage />} />
        </Route>

        {/* Routes WITHOUT Navbar and Footer (full-screen pages) */}
        <Route path="/tridosha-quiz" element={<TriDoshaQuizPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
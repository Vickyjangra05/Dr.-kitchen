import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// 'Outlet' is a placeholder from React Router.
// It will render the current page (like HomePage or RecipesPage).
function MainLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}
export default MainLayout;
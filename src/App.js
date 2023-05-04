import { Outlet } from 'react-router-dom';
import './App.css';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;

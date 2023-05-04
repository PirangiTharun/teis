import { Outlet } from 'react-router-dom';
import './App.css';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <BackToTop />
    </div>
  );
}

export default App;

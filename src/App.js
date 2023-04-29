import './App.css';
import BackToTop from './components/BackToTop';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: []
  }
])

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={appRouter} />
      <BackToTop />
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Products from './components/Products';
import ViewProduct from './components/ViewProduct';
import ContactUs from './components/ContactUs';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: []
      },
      {
        path: '/about',
        element: <AboutUs />,
        children: []
      },
      {
        path: '/products',
        element: <Products />,
        children: []
      },
      {
        path: '/viewProduct/:id',
        element: <ViewProduct />,
        children: []
      },
      {
        path: '/contact',
        element: <ContactUs />,
        children: []
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
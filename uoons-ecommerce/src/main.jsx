import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import LoginSignup from './pages/LoginSignup.jsx';
import Home from './pages/Home.jsx';
import Faq from './pages/Faq.jsx';
import Timeline from './pages/Timeline.jsx';
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import ContactUs from './pages/ContactUs.jsx';
import WishList from './pages/WishList.jsx';
import Homepage3 from './pages/Homepage3.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth",
    element: <LoginSignup />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/timeline",
    element: <Timeline />,
  },
  {
    path: "/T&c",
    element: <TermsAndConditions />,
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,
  },
  {
    path: "/Wishlist",
    element: <WishList />,
  },
  {
    path: "/uoonsAds",
    element: <Homepage3 />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

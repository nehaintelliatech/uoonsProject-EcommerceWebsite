import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ProductDescription from './pages/ProductDescription.jsx';
import ProductDescription2 from './pages/ProductDescription2.jsx';
import AddToCart from './pages/AddToCart.jsx';
import AddToCart1 from './pages/AddToCart1.jsx';
import WishList from './pages/WishList.jsx';
import Checkout from './pages/Checkout.jsx';
import Checkout1 from './pages/Checkout1.jsx';
import CategoriesPage from './pages/CategoriesPage.jsx';
import ProductList from './pages/ProductList.jsx';
import Timeline from './pages/Timeline.jsx';
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import SimpleMap from './pages/SimpleMap.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Faq from './pages/Faq.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><App /></>,
  },
  {
    path: "/ProductDescription",
    element: <><ProductDescription /></>,
  },
  {
    path: "/ProductDescription2",
    element: <><ProductDescription2 /></>,
  },
  {
    path: "/AddToCart",
    element: <><AddToCart /></>,
  },
  {
    path: "/AddToCart1",
    element: <><AddToCart1 /></>,
  },
  {
    path: "/WishList",
    element: <><WishList /></>,
  },
  {
    path: "/Checkout",
    element: <><Checkout /></>,
  },
  {
    path: "/Checkout1",
    element: <><Checkout1 /></>,
  },
  {
    path: "/CategoriesPage",
    element: <><CategoriesPage /></>,
  },
  {
    path: "/ProductList",
    element: <><ProductList /></>,
  },
  {
    path: "/AboutUs",
    element: <><Timeline /></>,
  },
  {
    path: "/TermsAndConditions",
    element: <><TermsAndConditions /></>,
  },
  {
    path: "/Map",
    element: <><SimpleMap /></>,
  },
  {
    path: "/ContactUs",
    element: <><ContactUs /></>,
  },
  {
    path: "/Faq",
    element: <><Faq /></>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

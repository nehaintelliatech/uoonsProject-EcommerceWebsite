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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

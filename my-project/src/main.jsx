import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import ProductDescription from './components/ProductDescription.jsx';
import ProductDescription2 from './components/ProductDescription2.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <><App /></>,
  },
  {
    path: "/ProductDescription2",
    element: <><ProductDescription2 /></>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  
  </React.StrictMode>
)

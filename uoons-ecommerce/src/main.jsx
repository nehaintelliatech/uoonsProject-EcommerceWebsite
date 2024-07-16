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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

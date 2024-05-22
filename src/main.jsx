import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import BestSellers from "./pages/collections/BestSellers.jsx";
import OurStory from "./pages/collections/OurStory.jsx";
import Factory from "./pages/collections/Factory.jsx";
import Guarantee from "./pages/collections/Guarantee.jsx";
import Design from "./pages/collections/Design.jsx";
import Recyclable from "./pages/collections/Recyclable.jsx";
import Sustainability from "./pages/collections/Sustainability.jsx";
import MadeIn from "./pages/collections/MadeIn.jsx";
import Women from "./pages/collections/Women.jsx";
import Kids from "./pages/collections/Kids.jsx";
import Men from "./pages/collections/Men.jsx";
import CollectionAll from "./pages/collections/CollectionAll.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/CollectionAll",
    element: <CollectionAll />,
  },
  {
    path: "/Women",
    element: <Women />,
  },
  {
    path: "/Men",
    element: <Men />,
  },
  {
    path: "/Kids",
    element: <Kids />,
  },

  {
    path: "/BestSellers",
    element: <BestSellers />,
  },

  {
    path: "/OurStory",
    element: <OurStory />,
  },
  {
    path: "/MadeIn",
    element: <MadeIn />,
  },
  {
    path: "/Factory",
    element: <Factory />,
  },
  {
    path: "/Design",
    element: <Design />,
  },
  {
    path: "/Sustainability",
    element: <Sustainability />,
  },
  {
    path: "/Recyclable",
    element: <Recyclable />,
  },
  {
    path: "/Guarantee",
    element: <Guarantee />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

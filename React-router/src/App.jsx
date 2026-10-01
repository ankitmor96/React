import React from "react";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./routes/MainLayout.jsx";
import Service from "./components/Service.jsx";
import Product from "./components/Product.jsx";

const App = () => {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "service",
          element: <Service />
        },
        {
          path: "pro/:id",
          element: <Product />
        }
      ],

    },

  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
  
};

export default App;
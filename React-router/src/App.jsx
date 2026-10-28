import React, { lazy, Suspense } from "react";
// import Home from "./components/Home.jsx";
// import About from "./components/About.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./routes/MainLayout.jsx";
import Service from "./components/Service.jsx";
import Product from "./components/Product.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import Loading from "./components/loading.jsx";

const App = () => {

  const Home = lazy(() => import("./components/Home.jsx"));

  const About = lazy(() => import("./components/About.jsx"));

  const router = createBrowserRouter([

    {
      path: "/",
      element: <MainLayout />,
      element: <ErrorPage />,
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
      <Suspence fallback={<Loading />}>
        <RouterProvider router={router}></RouterProvider>
      </Suspence>
    </>
  );

};

export default App;
import React from "react";
import { lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import MainLayout from "../layouts/MainLayout";

// Lazy Loaded Pages
const Home = lazy(() => import("pages/Home"));
const FAQ = lazy(() => import("pages/FAQ"));
const ContactUs = lazy(() => import("pages/ContactUs"));

const router = createBrowserRouter([
  {
    path: "",
    errorElement: <ErrorPage />,
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

export { router };

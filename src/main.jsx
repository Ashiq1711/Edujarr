import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./Layout/Rootlayout.jsx";
import Courses from "./Pages/Courses.jsx";
import Blog from "./Pages/Blog.jsx";
import Shop from "./Pages/Shop.jsx";
import Pages from "./Pages/Pages.jsx";
import Events from "./Pages/Events.jsx";
import Home from "./Pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/course",
        element: <Courses />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/pages",
        element: <Pages />,
      },
      {
        path: "/events",
        element: <Events />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

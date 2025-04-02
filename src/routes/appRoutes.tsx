import App from "@/components/pages/app";
import Home from "@/components/pages/home";
import NotFoundPage from "@/components/pages/notFoundPage";
import User from "@/components/pages/user/user";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "*", element: <NotFoundPage /> },
  { path: "/home", element: <Home /> },
  { path: "/user", element: <User /> },
]);

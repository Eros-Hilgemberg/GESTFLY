import App from "@/components/pages/app";
import CompanyCreate from "@/components/pages/company/companyCreate";
import Home from "@/components/pages/home";
import NotFoundPage from "@/components/pages/notFoundPage";
import User from "@/components/pages/user/user";
import UserLogin from "@/components/pages/user/userLogin";
import UserRegister from "@/components/pages/user/userRegister";
import BasePageLayout from "@/components/templates/basePageLayout";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "*", element: <NotFoundPage /> },
  { path: "/register", element: <UserRegister /> },
  { path: "/login", element: <UserLogin /> },
  {
    Component: BasePageLayout,
    children: [
      { path: "/user", element: <User /> },
      { path: "/company/create", element: <CompanyCreate /> },
      { path: "/home", element: <Home /> },
    ],
  },
]);

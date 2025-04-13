import App from "@/components/pages/app";
import CompanyCreate from "@/components/pages/company/companyCreate";
import Home from "@/components/pages/home";
import NotFoundPage from "@/components/pages/notFoundPage";
import User from "@/components/pages/user/user";
import UserLogin from "@/components/pages/user/userLogin";
import UserRegister from "@/components/pages/user/userRegister";
import BasePage from "@/components/templates/basePage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "*", element: <NotFoundPage /> },
  { path: "/user", element: <User /> },
  { path: "/register", element: <UserRegister /> },
  { path: "/login", element: <UserLogin /> },
  { path: "/company/create", element: <CompanyCreate /> },
  {
    Component: BasePage,
    children: [{ path: "/home", element: <Home /> }],
  },
]);

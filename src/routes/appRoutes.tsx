import App from "@/components/pages/app";
import CompanyCreate from "@/components/pages/company/companyCreate";
import Config from "@/components/pages/config/config";
import Home from "@/components/pages/home";
import NotFoundPage from "@/components/pages/notFoundPage";
import ProductCreate from "@/components/pages/product/productCreate";
import Products from "@/components/pages/product/products";
import ServiceCreate from "@/components/pages/service/serviceCreate";
import Services from "@/components/pages/service/services";
import User from "@/components/pages/user/user";
import UserLogin from "@/components/pages/user/userLogin";
import UserRegister from "@/components/pages/user/userRegister";
import BasePageLayout from "@/components/templates/basePageLayout";
import { createBrowserRouter } from "react-router";
import { AuthGuard } from "./authGuard";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "*", element: <NotFoundPage /> },
  { path: "/register", element: <UserRegister /> },
  { path: "/login", element: <UserLogin /> },
  {
    element: <AuthGuard isPrivate />,
    children: [
      {
        Component: BasePageLayout,
        children: [
          { path: "/user", element: <User /> },
          { path: "/user/company/create/:id?", element: <CompanyCreate /> },
          { path: "/home", element: <Home /> },
          { path: "/products", element: <Products /> },
          { path: "/products/create/:id?", element: <ProductCreate /> },
          { path: "/services", element: <Services /> },
          { path: "/services/create/:id?", element: <ServiceCreate /> },
          { path: "/config", element: <Config /> },
        ],
      },
    ],
  },
]);

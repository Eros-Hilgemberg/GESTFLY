import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes/appRoutes";
import { AuthProvider } from "./services/auth/authContext";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

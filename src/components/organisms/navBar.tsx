import { getCompany } from "@/services/assistants/getLocalsStorage";
import { CompanyType } from "@/types/companyType";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";

interface navbarProps {
  type?: string;
}
function NavBar({ type }: navbarProps) {
  const dataCompany: Partial<CompanyType> = getCompany() || {};
  switch (type) {
    case "isLogged":
      return (
        <nav
          className="bg-primary rounded-2xl mt-2 text-white text-center gap-2 p-2 flex items-center mx-2"
          style={{ backgroundColor: dataCompany.color }}
        >
          <SidebarTrigger />
          <div>
            <h1 className="text-lg font-bold">GESTFLY</h1>
          </div>
        </nav>
      );
    default:
      return (
        <nav className="bg-primary text-white p-3 flex justify-between items-center fixed w-full">
          <div>
            <h1 className="text-lg font-bold">GESTFLY</h1>
          </div>
          <div className="flex justify-between gap-3">
            {location.pathname == "/" || location.pathname == "/register" ? (
              <Link to="/login">
                <Button variant={"outline"} className="bg-primary">
                  Login
                </Button>
              </Link>
            ) : (
              ""
            )}
            {location.pathname == "/" || location.pathname == "/login" ? (
              <Link to={"/register"}>
                <Button variant={"secondary"}>Cadastre-se</Button>
              </Link>
            ) : (
              ""
            )}
          </div>
        </nav>
      );
  }
}

export default NavBar;

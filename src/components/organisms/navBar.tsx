import { Link } from "react-router";
import { Button } from "../ui/button";

interface navbarProps {
  type?: string;
  isLogged?: boolean;
}
function NavBar({ type, isLogged }: navbarProps) {
  switch (type) {
    default:
      return (
        <nav className="bg-primary text-white p-3 flex justify-between items-center fixed w-full">
          <div>
            <Link to="/">
              <h1 className="text-lg font-bold">GESTFLY</h1>
            </Link>
          </div>
          {!isLogged ? (
            <div className="flex">
              <Link to={"/"}>
                <Button variant={"secondary"} className="text-destructive w-30">
                  Sair
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex justify-between gap-3">
              <Link to={"/"}>
                <Button variant={"secondary"}>Cadastre-se</Button>
              </Link>
              <Link to="/user">
                <Button variant={"outline"} className="bg-primary">
                  Login
                </Button>
              </Link>
            </div>
          )}
        </nav>
      );

    case "company":
      return <div>Navbar Company</div>;
  }
}

export default NavBar;

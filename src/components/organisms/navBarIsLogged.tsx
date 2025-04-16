import { List } from "@phosphor-icons/react";

interface navbarProps {
  type?: string;
}
function NavBarIsLogged({ type }: navbarProps) {
  switch (type) {
    default:
      return (
        <nav className="bg-primary text-white text-center gap-2 p-2 flex items-center w-full">
          <button className="hover:bg-primary rounded-sm">
            <List size={32} />
          </button>
          <div>
            <h1 className="text-lg font-bold">GESTFLY</h1>
          </div>
        </nav>
      );

    case "company":
      return <div>Navbar Company</div>;
  }
}

export default NavBarIsLogged;

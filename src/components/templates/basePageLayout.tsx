import { Outlet } from "react-router";
import NavBarIsLogged from "../organisms/navBarIsLogged";
import Sidebar from "../organisms/sidebar";
import { Card } from "../ui/card";

function BasePageLayout() {
  return (
    <div className="w-screen h-screen flex flex-col ">
      <NavBarIsLogged />
      <div className="flex grow-1 p-2 gap-1">
        <Sidebar children={undefined} />
        <Card className="flex grow-1">
          <Outlet />
        </Card>
      </div>
    </div>
  );
}

export default BasePageLayout;

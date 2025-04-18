import { Outlet } from "react-router";
import { AppSidebar } from "../organisms/appSidebar";
import NavBar from "../organisms/navBar";
import { Card } from "../ui/card";
import { SidebarProvider } from "../ui/sidebar";

function BasePageLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-screen h-screen flex flex-col ">
        <NavBar type="isLogged" />
        <div className="flex grow-1 p-2 gap-1">
          <Card className="flex grow-1">
            <Outlet />
          </Card>
        </div>
      </main>
    </SidebarProvider>
  );
}

export default BasePageLayout;

import { Outlet } from "react-router";

function BasePage() {
  return (
    <div className="flex w-screen h-screen">
      <Outlet />
    </div>
  );
}

export default BasePage;

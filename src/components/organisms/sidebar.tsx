import { createContext } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
interface SidebarProps {
  children: React.ReactNode;
}

interface SicdeBarMenuItemProps {
  icon: React.ReactNode;
  text: string;
  isActive: boolean;
  hasAlert?: boolean;
}
export const SideBarContext = createContext({
  isSideBarExpanded: true,
});
function Sidebar(children: SidebarProps) {
  return (
    <div className="w-2/3 sm:w-2/6 md:w-2/6  lg:w-1/5 xl:w-1/5 ">
      <Card className="h-full w-full">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Sidebar;

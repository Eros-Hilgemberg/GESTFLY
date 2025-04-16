import { SideBarContext } from "@/components/organisms/sidebar";
import { useContext, useState } from "react";

export default function toogleSideBar() {
  alert("teste");
  const { isSideBarExpanded } = useContext(SideBarContext);
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);
  const toggleSidebars = () => setSidebarExpanded((prevState) => !prevState);
  return isSideBarExpanded;
}

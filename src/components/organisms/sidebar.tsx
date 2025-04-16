import {
  Archive,
  Calendar,
  CurrencyCircleDollar,
  FileText,
  Hand,
  House,
  Users,
} from "@phosphor-icons/react";
import { createContext } from "react";
import ItemSidebar from "../molecules/itemSidebar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";

const items = [
  {
    title: "Home",
    url: "/home",
    icon: House,
    subtitle: "Página Inicial",
  },
  {
    title: "Vendas",
    url: "/sales",
    icon: CurrencyCircleDollar,
    subtitle: "Menu de vendas",
  },
  {
    title: "Agendamentos",
    url: "/appointments",
    icon: Calendar,
    subtitle: "Atendimentos agendados",
  },
  {
    title: "Produtos",
    url: "/products",
    icon: Archive,
    subtitle: "Cadastros de produtos",
  },
  {
    title: "Serviços",
    url: "/services",
    icon: Hand,
    subtitle: "Cadastros de serviços",
  },
  {
    title: "Clientes",
    url: "/clients",
    icon: Users,
    subtitle: "Cadastros de clientes",
  },
  {
    title: "Relatórios",
    url: "/records",
    icon: FileText,
    subtitle: "Analise seus relatórios",
  },
];

interface SidebarProps {
  children: React.ReactNode;
}

interface SicdeBarMenuItemProps {
  icon: React.ReactNode;
  text: string;
  isActive: boolean;
  hasAlert?: boolean;
}
const SideBarContext = createContext({
  isSideBarExpanded: true,
});
function Sidebar(children: SidebarProps) {
  return (
    <div className="w-2/3 sm:w-2/6 md:w-2/6  lg:w-1/5 xl:w-1/5 ">
      <Card className="h-full w-full gap-0">
        <CardHeader className="m-0">
          <CardTitle className="font-bold">Menu</CardTitle>
        </CardHeader>
        <Separator className="mt-2" />
        <CardContent className="p-2 m-0">
          {items.map((item) => (
            <ItemSidebar
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              url={item.url}
            >
              <item.icon size={28} />
            </ItemSidebar>
          ))}
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Sidebar;

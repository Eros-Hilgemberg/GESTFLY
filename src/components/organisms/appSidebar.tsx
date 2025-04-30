import {
  Archive,
  Calendar,
  FileText,
  Gear,
  Hand,
  House,
  SignOut,
  Users,
} from "@phosphor-icons/react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { useAuth } from "@/hooks/useAuth";
import { getCompany } from "@/services/Helpers/getLocalsStorage";
import { CompanyType } from "@/types/companyType";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/home",
    icon: House,
    subtitle: "Página Inicial",
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

const itemsFooter = [
  {
    title: "Configurações",
    url: "/config",
    icon: Gear,
    subtitle: "Acesse as configurações",
  },
  {
    title: "Sair",
    url: "/login",
    icon: SignOut,
    subtitle: "Menu de vendas",
  },
];

export function AppSidebar() {
  const { signOut } = useAuth();
  const dataCompany: Partial<CompanyType> = getCompany() || {};
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent className="bg-card rounded-2xl">
        <SidebarGroup className="h-full">
          <SidebarGroupLabel className="font-bold text-lg">
            Menu
          </SidebarGroupLabel>
          <SidebarSeparator />
          <div className="flex justify-center mt-4">
            {location.pathname.match("/user") ? (
              ""
            ) : dataCompany?.photo ? (
              <div className=" group-data-[collapsible=icon]:size-6 w-20 h-20 rounded-2xl ">
                <img
                  src={"data:image/png;base64," + dataCompany?.photo}
                  className="rounded-2xl"
                />
              </div>
            ) : (
              <div className=" group-data-[collapsible=icon]:size-6 w-20 h-20 rounded-2xl ">
                <img src="public/img/empty.png" alt="imagem" />
              </div>
            )}
          </div>
          <SidebarGroupContent className="flex flex-col justify-between grow-1">
            {location.pathname.match("/user") ? (
              ""
            ) : (
              <SidebarMenu className="flex flex-col mt-2">
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton className="font-semibold" asChild>
                      <a className="h-12" href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            )}
            <SidebarMenu className="flex flex-col mt-2">
              <SidebarMenuItem>
                <SidebarMenuButton className={"font-semibold"} asChild>
                  <a
                    className="h-12"
                    href={
                      location.pathname.match("/user")
                        ? "/user/config"
                        : "/config"
                    }
                  >
                    <Gear />
                    <span>Configurações</span>
                  </a>
                </SidebarMenuButton>
                <SidebarMenuButton
                  className={"font-semibold text-destructive"}
                  onClick={() => signOut()}
                  asChild
                >
                  <a className="h-12" href={"/login"}>
                    <SignOut />
                    <span>Sair</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

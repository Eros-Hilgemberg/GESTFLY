import ItemCard from "@/components/molecules/itemCard";
import NavBar from "@/components/organisms/navBar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { company } from "@/types/data/company";
import { motion } from "framer-motion";

function User() {
  return (
    <div className="h-screen w-screen relative">
      <NavBar isLogged="Sair" />
      <div className="flex flex-col items-center justify-center flex-1  h-full">
        <Card className="flex size-4/5 md:size-4/5 lg:size-4/5">
          <CardHeader>
            <CardTitle className="h-1/6">Empresas</CardTitle>
            <CardDescription>Selecione a empresa:</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col py-3 gap-3 scroll-auto overflow-y-auto bg-background">
            {company.map((comp) => (
              <motion.div
                whileInView={{
                  y: [-10, 10],
                  opacity: [0.5, 1],
                }}
                transition={{ duration: 0.8 }}
              >
                <ItemCard
                  key={comp.userId}
                  id={comp.userId}
                  name={comp.name}
                  description={comp.address}
                />
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default User;

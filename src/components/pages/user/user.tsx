import ItemCard from "@/components/molecules/itemCard";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";

import { company } from "@/types/data/company";
import { PlusCircle } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router";

function User() {
  const { signedUserId } = useAuth();
  useEffect(() => {
    console.log("teste:" + signedUserId);
  }, []);
  return (
    <div className="flex flex-col grow-1">
      <CardHeader className="flex justify-between">
        <div>
          <CardTitle className="">Empresas</CardTitle>
          <CardDescription>Selecione a empresa:</CardDescription>
        </div>
        <div>
          <Link to={"/user/company/create"}>
            <Button variant={"include"} type="submit">
              <PlusCircle className="flex-1" />
              Nova Empresa
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col py-3 gap-3 scroll-auto overflow-y-auto bg-background">
        {company.map((comp) => (
          <motion.div
            key={comp.userId}
            whileInView={{
              y: [-10, 10],
              opacity: [0.5, 1],
            }}
            transition={{ duration: 0.8 }}
          >
            <ItemCard
              id={comp.userId}
              name={comp.name}
              description={comp.address}
            />
          </motion.div>
        ))}
      </CardContent>
    </div>
  );
}

export default User;

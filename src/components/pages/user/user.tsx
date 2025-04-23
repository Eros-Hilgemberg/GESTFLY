import ItemCard from "@/components/molecules/itemCard";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import getItems from "@/services/controller/getItems";
import { CompanyType } from "@/types/companyType";
import { PlusCircle } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function User() {
  const [companys, setCompanys] = useState<CompanyType[]>([]);
  const { signedUserId } = useAuth();
  async function getCompany(signedUserId: string) {
    const data = await getItems(`/company?userId=${signedUserId}`);
    setCompanys(await data);
  }
  useEffect(() => {
    console.log("teste" + signedUserId);
    getCompany(signedUserId);
  }, []);

  async function deleteItem(id: string) {
    alert("produto deletado!" + id);
  }

  return (
    <div className="flex flex-col grow-1">
      <CardHeader className="flex justify-between mb-5">
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
        {companys.map((comp) => (
          <motion.div
            key={comp.userId}
            whileInView={{
              y: [-10, 10],
              opacity: [0.5, 1],
            }}
            transition={{ duration: 0.8 }}
          >
            <ItemCard
              deleteItem={deleteItem}
              id={comp.userId}
              image={comp.photo}
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

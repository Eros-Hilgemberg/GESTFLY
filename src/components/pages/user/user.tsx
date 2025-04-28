import ItemCard from "@/components/molecules/itemCard";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getItems } from "@/services/Helpers/getItems";
import { getUserId } from "@/services/Helpers/getLocalsStorage";
import { deleteItem } from "@/services/Helpers/onDelete";
import { CompanyType } from "@/types/companyType";
import { setCompany } from "@/utils/companyContext";
import { PlusCircle } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

function User() {
  const [companys, setCompanys] = useState<CompanyType[]>([]);
  const userId = getUserId();
  const navigate = useNavigate();
  async function getCompany(userId: string | null) {
    const data = await getItems(`/company?userId=${userId}`);
    setCompanys(await data);
  }
  useEffect(() => {
    getCompany(userId);
  }, []);
  async function deleteCompany(id: string) {
    await deleteItem(`/company/${id}`)
      .then(() => {
        getCompany(userId);
        toast.success("Registro apagado com sucesso");
      })
      .catch(() => {
        toast.error("Erro ao apagar registro!");
      });
  }
  async function selectCompany(data: CompanyType) {
    setCompany(data);
    navigate("/home");
    window.location.reload();
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
            key={comp.id}
            whileInView={{
              y: [-10, 10],
              opacity: [0.5, 1],
            }}
            transition={{ duration: 0.8 }}
            onDoubleClick={() => selectCompany(comp)}
          >
            <ItemCard
              deleteItem={() => {
                deleteCompany(comp.id);
              }}
              linkUpdate={`/user/company/create/${comp.id}`}
              id={comp.id}
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

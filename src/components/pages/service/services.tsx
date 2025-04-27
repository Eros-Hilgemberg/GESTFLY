import { motion } from "framer-motion";

import ItemCard from "@/components/molecules/itemCard";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getItems } from "@/services/assistants/getItems";
import { getCompany } from "@/services/assistants/getLocalsStorage";
import { deleteItem } from "@/services/assistants/onDelete";
import { ProductType } from "@/types/productType";
import { PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function Services() {
  const [services, setServices] = useState<ProductType[]>();
  const dataCompany = getCompany();
  async function getServices(companyId: string | null) {
    const data = await getItems(`/service?companyId=${companyId}`);
    setServices(await data);
  }
  useEffect(() => {
    getServices(dataCompany?.id);
  }, []);
  async function deleteService(id: string) {
    getServices(dataCompany?.id);
    await deleteItem(`/service/${id}`);
  }
  return (
    <div className="flex flex-col grow-1">
      <CardHeader className="flex justify-between mb-5">
        <div>
          <CardTitle className="">Serviços</CardTitle>
          <CardDescription>Gerencie seus serviços:</CardDescription>
        </div>
        <div>
          <Link to={"/services/create"}>
            <Button variant={"include"} type="submit">
              <PlusCircle className="flex-1" />
              Novo Serviço
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col py-3 gap-3 scroll-auto overflow-y-auto bg-background">
        {services?.map((service) => (
          <motion.div
            key={service.id}
            whileInView={{
              y: [-10, 10],
              opacity: [0.5, 1],
            }}
            transition={{ duration: 0.8 }}
          >
            <ItemCard
              deleteItem={() => deleteService(service.id)}
              linkUpdate={`/services/create/${service.id}`}
              id={service.id}
              image={service.photo ?? ""}
              name={service.name}
              description={service.price.toString()}
            />
          </motion.div>
        ))}
      </CardContent>
    </div>
  );
}

export default Services;

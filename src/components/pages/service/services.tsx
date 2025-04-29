import { motion } from "framer-motion";

import ItemCard from "@/components/molecules/itemCard";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getItems } from "@/services/Helpers/getItems";
import { getCompany } from "@/services/Helpers/getLocalsStorage";
import { deleteItem } from "@/services/Helpers/onDelete";
import { ServiceType } from "@/types/serviceType";
import { PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function Services() {
  const [services, setServices] = useState<ServiceType[]>();
  const [search, setSearch] = useState("");
  const dataCompany = getCompany();
  async function getServices(companyId: string | null) {
    const data = await getItems(`/service?companyId=${companyId}`);
    setServices(await data);
  }
  useEffect(() => {
    getServices(dataCompany.id as string);
  }, []);
  async function deleteService(id: string) {
    getServices(dataCompany.id as string);
    await deleteItem(`/service/${id}`);
  }
  return (
    <div className="flex flex-col grow-1">
      <CardHeader className="flex flex-col justify-between mb-5">
        <div className="w-full">
          <CardTitle className="">Serviços</CardTitle>
          <CardDescription>Gerencie seus serviços:</CardDescription>
        </div>
        <div className="flex w-full justify-center items-center gap-3">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="p-1 rounded-sm border-1 border-gray-300 w-full"
            placeholder="Digite para buscar"
          />
          <Link to={"/services/create"}>
            <Button variant={"include"} type="submit">
              <PlusCircle className="flex-1" />
              Novo Serviço
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col h-full mx-3 rounded-2xl py-3 gap-3 scroll-auto overflow-y-auto bg-background">
        {services
          ?.filter((service) =>
            service.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((service) => (
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

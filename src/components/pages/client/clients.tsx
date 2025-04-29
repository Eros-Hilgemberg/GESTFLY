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
import { ClientType } from "@/types/clientType";
import { PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function Clients() {
  const [client, setClients] = useState<ClientType[]>();
  const [search, setSearch] = useState("");
  const dataCompany = getCompany();
  async function getClients(companyId: string | null) {
    const data = await getItems(`/client?companyId=${companyId}`);
    setClients(await data);
  }
  useEffect(() => {
    getClients(dataCompany.id as string);
  }, []);
  async function deleteClient(id: string) {
    getClients(dataCompany.id as string);
    await deleteItem(`/client/${id}`);
  }
  return (
    <div className="flex flex-col grow-1">
      <CardHeader className="flex flex-col justify-between mb-5">
        <div className="w-full">
          <CardTitle className="">Clientes</CardTitle>
          <CardDescription>Gerencie seus clientes:</CardDescription>
        </div>
        <div className="flex w-full justify-center items-center gap-3">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="p-1 rounded-sm border-1 border-gray-300 w-full"
            placeholder="Digite para buscar"
          />
          <Link to={"/clients/create"}>
            <Button variant={"include"} type="submit">
              <PlusCircle className="flex-1" />
              Novo Cliente
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col h-full mx-3 rounded-2xl py-3 gap-3 scroll-auto overflow-y-auto bg-background">
        {client
          ?.filter((client) =>
            client.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((client) => (
            <motion.div
              key={client.id}
              whileInView={{
                y: [-10, 10],
                opacity: [0.5, 1],
              }}
              transition={{ duration: 0.8 }}
            >
              <ItemCard
                deleteItem={() => deleteClient(client.id)}
                linkUpdate={`/clients/create/${client.id}`}
                id={client.id}
                name={client.name}
              />
            </motion.div>
          ))}
      </CardContent>
    </div>
  );
}

export default Clients;

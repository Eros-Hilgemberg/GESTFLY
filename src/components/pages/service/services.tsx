import { motion } from "framer-motion";

import ItemCard from "@/components/molecules/itemCard";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { produtos } from "@/types/data/products";
import { ProductType } from "@/types/productType";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

function Services() {
  const [services, setServices] = useState<ProductType[]>(produtos);
  async function deleteItem(id: string) {
    alert("produto deletado!" + id);
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
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileInView={{
              y: [-10, 10],
              opacity: [0.5, 1],
            }}
            transition={{ duration: 0.8 }}
          >
            <ItemCard
              deleteItem={deleteItem}
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

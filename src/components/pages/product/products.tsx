import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router";
function Products() {
  return (
    <motion.div
      whileInView={{ opacity: [0.5, 1], scale: [0.8, 1] }}
      transition={{ duration: 0.8 }}
      className="flex flex-col grow-1"
    >
      <CardHeader className="flex justify-between">
        <div>
          <CardTitle>Produtos</CardTitle>
          <CardDescription>Gerencie seus produtos</CardDescription>
        </div>
        <div>
          <Link to={"/products/create"}>
            <Button variant={"include"} type="submit">
              <PlusCircle className="flex-1" />
              Novo Produto
            </Button>
          </Link>
        </div>
      </CardHeader>
      <Separator className="my-4" />
      <CardContent></CardContent>
    </motion.div>
  );
}

export default Products;

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

function Services() {
  return (
    <motion.div
      whileInView={{ opacity: [0.5, 1], scale: [0.8, 1] }}
      transition={{ duration: 0.8 }}
      className="flex flex-col grow-1"
    >
      <CardHeader className="flex justify-between">
        <div>
          <CardTitle>Serviços</CardTitle>
          <CardDescription>Gerencie seus serviços</CardDescription>
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
      <Separator className="my-4" />
      <CardContent></CardContent>
    </motion.div>
  );
}

export default Services;

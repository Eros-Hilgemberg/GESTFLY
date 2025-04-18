import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { motion } from "framer-motion";
function ConfigCompany() {
  return (
    <motion.div
      whileInView={{ opacity: [0.5, 1], scale: [0.8, 1] }}
      transition={{ duration: 0.8 }}
      className="flex flex-col grow-1"
    >
      <CardHeader>
        <CardTitle>Configurações da empresa</CardTitle>
        <CardDescription>
          Gerencie as configurações de sua empresa
        </CardDescription>
      </CardHeader>
      <Separator className="my-4" />
      <CardContent></CardContent>
    </motion.div>
  );
}

export default ConfigCompany;

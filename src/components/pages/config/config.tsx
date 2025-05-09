import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { useState } from "react";
import ConfigShedule from "./configShedule";
import ConfigUser from "./configUser";

function Config() {
  const [render, setRender] = useState<string>("");

  return (
    <motion.div
      whileInView={{ opacity: [0.5, 1], scale: [0.8, 1] }}
      transition={{ duration: 0.8 }}
      className="flex flex-col grow-1"
    >
      <CardHeader>
        <CardTitle>Configurações</CardTitle>
        <CardDescription>Gerencie suas configurações</CardDescription>
        <div className=" flex gap-3">
          {location.pathname.match("/user") ? (
            <Button onClick={() => setRender("user")} variant={"outline"}>
              Usuário
            </Button>
          ) : (
            <Button onClick={() => setRender("company")} variant={"outline"}>
              Agendamento
            </Button>
          )}
        </div>
      </CardHeader>
      <Separator className="my-4" />
      <CardContent>
        {render == "user" ? <ConfigUser /> : <ConfigShedule />}
      </CardContent>
    </motion.div>
  );
}

export default Config;

import { motion } from "framer-motion";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";

function Home() {
  return (
    <motion.div
      whileInView={{ opacity: [0.5, 1], scale: [0.8, 1] }}
      transition={{ duration: 0.8 }}
      className="flex flex-col grow-1"
    >
      <CardHeader>
        <CardTitle>Home</CardTitle>
        <CardDescription>Tela inicial</CardDescription>
      </CardHeader>
      <Separator className="my-4" />
      <CardContent></CardContent>
    </motion.div>
  );
}

export default Home;

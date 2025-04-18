import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
const userSchema = z.object({
  name: z
    .string({
      required_error: "Preencha o campo nome!",
    })
    .min(5, "Mínimo 5 caracteres!"),
  email: z
    .string({
      required_error: "Preencha o campo email!",
      invalid_type_error: "Digite um e-mail válido!",
    })
    .email("Digite um e-mail válido!"),
  password: z
    .string({
      required_error: "Preencha o campo nome!",
    })
    .min(5, "Mínimo 6 caracteres!"),
});

function ConfigUser() {
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  function onSubmit(data: z.infer<typeof userSchema>) {
    console.log(JSON.stringify(data));
  }
  return (
    <motion.div
      whileInView={{ opacity: [0.5, 1], scale: [0.8, 1] }}
      transition={{ duration: 0.8 }}
      className="flex flex-col grow-1"
    >
      <CardHeader>
        <CardTitle>Dados de usuário</CardTitle>
        <CardDescription>Gerencie seu usuário</CardDescription>
      </CardHeader>
      <Separator className="my-4" />
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 flex gap-x-1 flex-wrap justify-between"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Digite o nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full md:w-full lg:w-full xl:w-2/5">
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input placeholder="Senha" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-full flex justify-center items-center gap-2">
              <Button
                variant={"outline"}
                className="w-1/2 md:w-1/3 text-destructive"
                type="button"
              >
                Cancelar
              </Button>
              <Button className="w-1/2 md:w-1/3" type="submit">
                Salvar
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </motion.div>
  );
}

export default ConfigUser;

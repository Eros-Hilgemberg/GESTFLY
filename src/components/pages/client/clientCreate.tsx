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
import { getItems } from "@/services/Helpers/getItems";
import { getCompany } from "@/services/Helpers/getLocalsStorage";
import { onPost } from "@/services/Helpers/onPost";
import { onPut } from "@/services/Helpers/onPut";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { z } from "zod";
const clientSchema = z.object({
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
  cellPhone: z
    .string({
      required_error: "Preencha o campo telefone!",
    })
    .length(9, "Mínimo 9 dígitos!"),
});

function ClientCreate() {
  const navigate = useNavigate();
  const dataCompany = getCompany();
  const { id } = useParams();
  const form = useForm<z.infer<typeof clientSchema>>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      cellPhone: "",
    },
  });
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        await getItems(`/client/${id}`).then((response) => {
          form.setValue("name", response.name);
          form.setValue("email", response.email);
          form.setValue("password", response.password);
          form.setValue("cellPhone", response.cellPhone);
        });
      };
      fetchData();
    }
    return;
  }, []);
  async function onSubmit(data: z.infer<typeof clientSchema>) {
    const companyId = dataCompany?.id;
    if (id) {
      await onPut({ ...data, companyId }, `/client/${id}`).then(() => {
        navigate("/clients");
      });
    } else {
      await onPost({ ...data, companyId }, "/client").then(() => {
        navigate("/clients");
      });
    }
  }
  return (
    <motion.div
      whileInView={{ opacity: [0.5, 1], scale: [0.8, 1] }}
      transition={{ duration: 0.8 }}
      className="flex flex-col grow-1"
    >
      <CardHeader>
        <CardTitle>Registro de Cliente</CardTitle>
        <CardDescription>Registre um novo cliente</CardDescription>
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Informe um email"
                      type="email"
                      {...field}
                    />
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
                    <Input placeholder="Digite o preço do senha" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cellPhone"
              render={({ field }) => (
                <FormItem className="w-full lg:w-2/5">
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o telefone" {...field} />
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
                onClick={() => navigate("/clients")}
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

export default ClientCreate;

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
const serviceSchema = z.object({
  name: z
    .string({
      required_error: "Preencha o campo nome!",
    })
    .min(5, "Mínimo 5 caracteres!"),
  description: z
    .string({ required_error: "Preencha o campo descrição!" })
    .min(5, "Mínimo 5 caracteres!"),
  price: z
    .number({
      required_error: "Preencha o campo duração",
    })
    .min(1, "Mínimo 1 caracter!"),
  expectedMinutes: z
    .number({
      required_error: "Preencha o campo duração",
    })
    .min(1, "Mínimo 1 caracter!"),
});

function ServiceCreate() {
  const navigate = useNavigate();
  const dataCompany = getCompany();
  const { id } = useParams();
  const form = useForm<z.infer<typeof serviceSchema>>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      name: "",
      price: 0,
      description: "",
      expectedMinutes: 0,
    },
  });
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        await getItems(`/service/${id}`).then((response) => {
          form.setValue("name", response.name);
          form.setValue("price", response.price);
          form.setValue("description", response.description);
          form.setValue("expectedMinutes", response.expectedMinutes);
        });
      };
      fetchData();
    }
    return;
  }, []);
  async function onSubmit(data: z.infer<typeof serviceSchema>) {
    const companyId = dataCompany?.id;
    if (id) {
      await onPut({ ...data, companyId }, `/service/${id}`).then(() => {
        navigate("/services");
      });
    } else {
      await onPost({ ...data, companyId }, "/service").then(() => {
        navigate("/services");
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
        <CardTitle>Registro de serviço</CardTitle>
        <CardDescription>Registre um novo serviço</CardDescription>
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
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Informe um breve descrição"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="w-full md:w-full lg:w-full xl:w-2/5">
                  <FormLabel>Preço(R$)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Digite o preço"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expectedMinutes"
              render={({ field }) => (
                <FormItem className="w-full md:w-full lg:w-full xl:w-2/5">
                  <FormLabel>Duração(min)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Digite o tempo necessário"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
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
                onClick={() => navigate("/services")}
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

export default ServiceCreate;

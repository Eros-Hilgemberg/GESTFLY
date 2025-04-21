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
import { useAuth } from "@/hooks/useAuth";
import { httpClient } from "@/services/auth/httpClient";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
const companySchema = z.object({
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
  address: z
    .string({ required_error: "Preencha o campo endereço!" })
    .min(5, "Mínimo 5 caracteres!"),
  address_number: z
    .string({
      required_error: "Preencha o campo número!",
    })
    .min(1, "Mínimo 1 dígito!"),
  zipCode: z
    .string({
      required_error: "Preencha o campo CEP!",
    })
    .length(8, "Mínimo 8 dígitos!"),
  cellPhone: z
    .string({
      required_error: "Preencha o campo telefone!",
    })
    .length(9, "Mínimo 9 dígitos!"),
  color: z.string({
    required_error: "Selecione uma cor!",
  }),
});

function CompanyCreate() {
  const { signedUserId } = useAuth();
  const form = useForm<z.infer<typeof companySchema>>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      address_number: "",
      zipCode: "",
      cellPhone: "",
      color: "",
    },
  });
  async function onSubmit(data: z.infer<typeof companySchema>) {
    try {
      await httpClient
        .post("/company", {
          ...data,
          UserId: signedUserId,
        })
        .then((response) => {
          toast.success("Registro realizado com sucesso!");
        });
    } catch (error) {
      console.log(error);
      toast.error("Falha ao realizar registro!");
    }
  }
  return (
    <motion.div
      whileInView={{ opacity: [0.5, 1], scale: [0.8, 1] }}
      transition={{ duration: 0.8 }}
      className="flex flex-col grow-1"
    >
      <CardHeader>
        <CardTitle>Registro de Empresa</CardTitle>
        <CardDescription>Registre uma nova empresa</CardDescription>
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
                      type="email"
                      placeholder="Digite um email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="w-full md:w-full lg:w-full xl:w-2/5 ">
                  <FormLabel>Endereço</FormLabel>
                  <FormControl>
                    <Input
                      className="relative"
                      placeholder="Digite o endereço"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address_number"
              render={({ field }) => (
                <FormItem className="w-full lg:w-auto">
                  <FormLabel>Número</FormLabel>
                  <FormControl>
                    <Input
                      className="relative"
                      placeholder="Número do endereço"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zipCode"
              render={({ field }) => (
                <FormItem className="w-full lg:w-1/5">
                  <FormLabel>CEP</FormLabel>
                  <FormControl>
                    <Input
                      className="relative"
                      placeholder="Digite o CEP"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cellPhone"
              render={({ field }) => (
                <FormItem className="w-full lg:w-auto">
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input
                      className="relative"
                      placeholder="Informe o telefone"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="color"
              render={({ field }) => (
                <div className="w-full flex justify-center ">
                  <FormItem className="w-full md:w-1/2">
                    <FormLabel>Cor</FormLabel>
                    <FormControl className="p-1">
                      <Input type="color" className="relative" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
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

export default CompanyCreate;

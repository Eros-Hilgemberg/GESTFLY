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
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { number, z } from "zod";

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
  address_number: number({
    required_error: "Preencha o campo número!",
  }),
  zipCode: z
    .string({
      required_error: "Preencha o campo CEP!",
    })
    .length(8, "O CEP deve ter 8 dígitos!"),
  cellPhone: z.string({
    required_error: "Preencha o campo telefone!",
  }),
  color: z.string({
    required_error: "Selecione uma cor!",
  }),
});

function CompanyCreate() {
  const form = useForm<z.infer<typeof companySchema>>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      address_number: 0,
      zipCode: "",
      cellPhone: "",
      color: "",
    },
  });

  function onSubmit(data: z.infer<typeof companySchema>) {
    console.log(JSON.stringify(data));
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
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 flex lg:gap-x-1 flex-wrap justify-between"
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
                <FormItem className="w-4/5 lg:w-2/5">
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
                <FormItem className="w-1/5 lg:w-auto">
                  <FormLabel>Número</FormLabel>
                  <FormControl>
                    <Input
                      className="relative"
                      placeholder="Digite o número do endereço"
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
                <FormItem>
                  <FormLabel>Cor</FormLabel>
                  <FormControl>
                    <Input
                      className="relative"
                      placeholder="Informe a cor"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Salvar
            </Button>
          </form>
        </Form>
      </CardContent>
    </motion.div>
  );
}

export default CompanyCreate;

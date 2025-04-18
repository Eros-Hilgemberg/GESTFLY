import NavBar from "@/components/organisms/navBar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { GoogleLogo } from "@phosphor-icons/react";
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

function UserRegister() {
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
    <div className="h-screen w-screen">
      <NavBar />
      <motion.div
        whileInView={{ opacity: [0.5, 1], scale: [0.8, 1] }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center flex-1  h-full"
      >
        <Card className="flex  w-5/6 h-auto lg:w-1/3">
          <CardHeader>
            <CardTitle>Registro de Usuário</CardTitle>
            <CardDescription>Realize seu registro</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Digite seu nome"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
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
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input
                          className="relative"
                          type="password"
                          placeholder="Digite uma senha"
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
          <CardFooter>
            <Button className="w-full" variant={"outline"}>
              <GoogleLogo size={32} />
              Continuar com Google
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}

export default UserRegister;

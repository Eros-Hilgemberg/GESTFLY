import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@radix-ui/react-separator";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { z } from "zod";
const days = [
  {
    id: "0",
    label: "Domingo",
  },
  {
    id: "1",
    label: "Segunda",
  },
  {
    id: "2",
    label: "Terça",
  },
  {
    id: "3",
    label: "Quarta",
  },
  {
    id: "4",
    label: "Quinta",
  },
  {
    id: "5",
    label: "Sexta",
  },
  {
    id: "6",
    label: "Sábado",
  },
] as const;

const sheduleSchema = z.object({
  startTime: z
    .string({ required_error: "Hora inicial é obrigatório!" })
    .refine((value) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(value), {
      message: "O campo deve ser um horário válido!",
    }),
  endTime: z
    .string({ required_error: "Hora final é obrigatório!" })
    .refine((value) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(value), {
      message: "O campo deve ser um horário válido!",
    }),
  intervalInMinutes: z
    .number({
      required_error: "Preencha o campo intervalo",
    })
    .min(1, "Mínimo 1 caracter!"),
  days: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Mínimo um dia",
  }),

  periodStart: z
    .string({ required_error: "Data inicial é obrigatória!" })
    .date(),
  periodEnd: z.string({ required_error: "Data final é obrigatória!" }).date(),
});
function ConfigShedule() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof sheduleSchema>>({
    resolver: zodResolver(sheduleSchema),
    defaultValues: {
      startTime: "",
      endTime: "",
      intervalInMinutes: 0,
      days: ["1", "2", "3", "4", "5"],
      periodStart: "",
      periodEnd: "",
    },
  });

  async function onSubmit(data: z.infer<typeof sheduleSchema>) {
    console.log(data);
  }

  return (
    <motion.div
      whileInView={{ opacity: [0.5, 1], scale: [0.8, 1] }}
      transition={{ duration: 0.8 }}
      className="flex flex-col grow-1"
    >
      <CardHeader>
        <CardTitle>Configurações da agendamentos</CardTitle>
        <CardDescription>
          Gerencie as configurações de agentamentos
        </CardDescription>
      </CardHeader>
      <Separator className="my-4" />
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 flex items-center gap-x-1 flex-wrap justify-between"
          >
            <FormField
              control={form.control}
              name="days"
              render={() => (
                <FormItem className="w-full order-last lg:order-first">
                  <div className="mb-4">
                    <FormLabel className="text-base">Dias</FormLabel>
                    <FormDescription>
                      Selecione os dias de atendimento.
                    </FormDescription>
                  </div>
                  <div className="flex flex-col gap-5 lg:flex-row ">
                    {days.map((day) => (
                      <FormField
                        key={day.id}
                        control={form.control}
                        name="days"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={day.id}
                              className="flex flex-row items-start lg:justify-center lg:items-center"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(day.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, day.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== day.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">
                                {day.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="startTime"
              render={({ field }) => (
                <FormItem className="w-full lg:w-1/5">
                  <FormLabel>Hora início:</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endTime"
              render={({ field }) => (
                <FormItem className="w-full lg:w-1/5">
                  <FormLabel>Hora final:</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="intervalInMinutes"
              render={({ field }) => (
                <FormItem className="w-full lg:w-1/5">
                  <FormLabel>Intervalos(min):</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
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
              name="periodStart"
              render={({ field }) => (
                <FormItem className="w-full lg:w-1/5">
                  <FormLabel>Período inicial:</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="periodEnd"
              render={({ field }) => (
                <FormItem className="w-full lg:w-1/5">
                  <FormLabel>Período Final:</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full order-last flex justify-center items-center gap-2">
              <Button
                variant={"outline"}
                className="w-1/2 md:w-1/3 text-destructive"
                type="button"
                onClick={() => navigate("/home")}
              >
                voltar
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

export default ConfigShedule;

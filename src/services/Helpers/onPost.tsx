import axios from "axios";
import { toast } from "sonner";
import { httpClient } from "../auth/httpClient";
import { getToken } from "./getLocalsStorage";

export async function onPost(data: object, url: string) {
  const token = getToken();
  try {
    const response = await httpClient.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    toast.success("Sucesso ao salvar registro!");
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Erro na resposta da API:",
        error.response?.data || error.message
      );
      toast.error("Erro ao salvar registro!");
    } else {
      console.error("Erro desconhecido:", error);
      toast.error("Erro desconhecido ao salvar registro!");
    }
    throw error;
  }
}

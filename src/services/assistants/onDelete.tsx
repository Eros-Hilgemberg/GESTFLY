import axios from "axios";
import { toast } from "sonner";
import { httpClient } from "../auth/httpClient";
import { getToken } from "./getLocalsStorage";

export async function deleteItem(url: string) {
  const token = getToken();
  try {
    const response = await httpClient.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    toast.success("Registro deletado com sucesso!");
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      toast.error("Erro ao deletar registro!");
      console.error(
        "Erro na resposta da API:",
        error.response?.data || error.message
      );
      console.error("Erro desconhecido:", error);
    } else {
      console.error("Erro desconhecido:", error);
      toast.error("Erro desconhecido ao deletar registro!");
    }
    throw error;
  }
}

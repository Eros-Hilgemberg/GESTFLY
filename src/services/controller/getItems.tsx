import axios from "axios";
import { toast } from "sonner";
import { httpClient } from "../auth/httpClient";
import { getToken } from "./Controller";

export async function getItems(url: string) {
  const token = getToken();
  try {
    const response = await httpClient.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      toast.error("Erro ao carregar registros");
      console.error(
        "Erro na resposta da API:",
        error.response?.data || error.message
      );
    } else {
      console.error("Erro desconhecido:", error);
    }
    throw error;
  }
}

export default getItems;

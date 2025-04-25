import axios from "axios";
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
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Erro na resposta da API:",
        error.response?.data || error.message
      );
      console.error(error);
    } else {
      console.error("Erro desconhecido:", error);
    }
    throw error;
  }
}

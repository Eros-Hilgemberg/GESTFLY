import { storageKeys } from "@/utils/storageKeys";
import axios from "axios";
import { httpClient } from "../auth/httpClient";

interface PostItemParams<T> {
  url: string;
  data: object;
}

export function getToken(): string | null {
  return localStorage.getItem(storageKeys.accessToken);
}
export function getUserId(): string | null {
  return localStorage.getItem(storageKeys.accessToken);
}

export async function postItem<TRequest = any, TResponse = any>({
  url,
  data,
}: PostItemParams<TRequest>): Promise<TResponse | undefined> {
  const token = getToken();

  if (!token) {
    console.error("Token JWT não encontrado.");
    return;
  }

  try {
    const response = await httpClient.post<TResponse>(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    console.log("POST realizado com sucesso:", response.data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
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

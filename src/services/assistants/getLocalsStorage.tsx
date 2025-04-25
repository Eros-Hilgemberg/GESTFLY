import { storageKeys } from "@/utils/storageKeys";

export function getToken(): string | null {
  return localStorage.getItem(storageKeys.accessToken);
}
export function getUserId(): string | null {
  return localStorage.getItem(storageKeys.signedUserId);
}

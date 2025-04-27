import { storageKeys } from "@/utils/storageKeys";

export function getToken(): string | null {
  return localStorage.getItem(storageKeys.accessToken);
}
export function getUserId(): string | null {
  return localStorage.getItem(storageKeys.signedUserId);
}
export function getCompany(): string | null {
  return localStorage.getItem("company")
    ? JSON.parse(localStorage.getItem("company") as string)
    : null;
}

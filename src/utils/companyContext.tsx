import { CompanyType } from "@/types/companyType";
import { createContext } from "react";

export function setCompany(data: CompanyType) {
  localStorage.setItem("company", JSON.stringify(data));
}
export function removeCompany() {
  localStorage.removeItem("company");
}

const dataCompany: CompanyType | null = localStorage.getItem("company")
  ? JSON.parse(localStorage.getItem("company") as string)
  : null;

export const CompanyContext = createContext<{
  dataCompany: CompanyType | null;
}>({ dataCompany });

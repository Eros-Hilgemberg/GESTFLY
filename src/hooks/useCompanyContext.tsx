import { CompanyContext } from "@/utils/companyContext";
import { useContext } from "react";

export function useCompanyContext() {
  return useContext(CompanyContext);
}

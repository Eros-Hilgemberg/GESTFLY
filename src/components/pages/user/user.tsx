import ItemCard from "@/components/molecules/itemCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { company } from "@/types/data/company";

function User() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-screen">
        <Card className="flex size-4/5 md:size-4/5 lg:size-4/5">
          <CardHeader>
            <CardTitle className="h-1/6">Empresas</CardTitle>
            <CardDescription>Selecione a empresa:</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col py-3 gap-3 scroll-auto overflow-y-auto bg-background">
            {company.map((comp) => (
              <ItemCard
                key={comp.userId}
                id={comp.userId}
                name={comp.name}
                description={comp.address}
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default User;

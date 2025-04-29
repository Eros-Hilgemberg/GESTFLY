import { motion } from "framer-motion";

import ItemCard from "@/components/molecules/itemCard";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getItems } from "@/services/Helpers/getItems";
import { getCompany } from "@/services/Helpers/getLocalsStorage";
import { deleteItem } from "@/services/Helpers/onDelete";
import { ProductType } from "@/types/productType";
import { PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
function Products() {
  const [products, setProducts] = useState<ProductType[]>();
  const [search, setSearch] = useState("");
  const dataCompany = getCompany();
  async function getProducts(companyId: string) {
    const data = await getItems(`/product?companyId=${companyId}`);
    setProducts(await data);
  }
  useEffect(() => {
    getProducts(dataCompany?.id as string);
  }, []);
  async function deleteProduct(id: string) {
    getProducts(dataCompany?.id as string);
    await deleteItem(`/product/${id}`);
  }
  return (
    <div className="flex flex-col grow-1">
      <CardHeader className="flex flex-col justify-between mb-5">
        <div className="w-full">
          <CardTitle className="">Produtos</CardTitle>
          <CardDescription>Gerencie seus produtos:</CardDescription>
        </div>
        <div className="flex w-full justify-center items-center gap-3">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="p-1 rounded-sm border-1 border-gray-300 w-full"
            placeholder="Digite para buscar"
          />
          <Link to={"/products/create"}>
            <Button variant={"include"} type="submit">
              <PlusCircle className="flex-1" />
              Novo
            </Button>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col h-full mx-3 rounded-2xl py-3 gap-3 scroll-auto overflow-y-auto bg-background">
        {products
          ?.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((product) => (
            <motion.div
              key={product.id}
              whileInView={{
                y: [-10, 10],
                opacity: [0.5, 1],
              }}
              transition={{ duration: 0.8 }}
            >
              <ItemCard
                deleteItem={() => deleteProduct(product.id)}
                linkUpdate={`/products/create/${product.id}`}
                id={product.id}
                image={product.photo ?? ""}
                name={product.name}
                description={product.price.toString()}
              />
            </motion.div>
          ))}
      </CardContent>
    </div>
  );
}

export default Products;

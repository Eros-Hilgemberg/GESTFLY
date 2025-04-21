import { Info, PencilSimple, TrashSimple } from "@phosphor-icons/react";
import { Link } from "react-router";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface ItemCardProps {
  id: string;
  name: string;
  description: string;
  image?: string;
}
function ItemCard({ name, description, image }: ItemCardProps) {
  console.log(image);
  return (
    <Card className="flex flex-col md:flex-row justify-between">
      <CardHeader className="justify-center md:justify-start flex-1 flex h-full gap-5 items-center">
        <div className="w-15 h-15 bg-red-300 rounded-2xl">
          {image ? (
            <img
              src={"data:image/png;base64," + image}
              className="rounded-2xl"
            />
          ) : (
            <img src="public/img/empty.png" alt="imagem" />
          )}
        </div>
        <span>
          <CardTitle className="">{name}</CardTitle>
          <CardDescription>
            <p>{description}</p>
          </CardDescription>
        </span>
      </CardHeader>
      <CardFooter className="flex md:flex-row gap-2 justify-center items-center">
        <Link to="">
          <Button variant={"outline"}>
            <Info className="flex-1" />
          </Button>
        </Link>
        <Link to="">
          <Button variant={"outline"}>
            <PencilSimple className="flex-1" />
          </Button>
        </Link>
        <Link to="">
          <Button variant={"destructive"}>
            <TrashSimple className="flex-1" color="white" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default ItemCard;

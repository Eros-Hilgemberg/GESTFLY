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
}
function ItemCard({ name, description }: ItemCardProps) {
  return (
    <Card className="flex flex-col md:flex-row justify-between">
      <CardHeader className="flex-1">
        <CardTitle className="">{name}</CardTitle>
        <CardDescription>
          <p>{description}</p>
        </CardDescription>
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

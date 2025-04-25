import { Info, PencilSimple, TrashSimple } from "@phosphor-icons/react";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { Link, useNavigate } from "react-router";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";

interface ItemCardProps {
  id: string;
  name: string;
  description: string;
  image?: string;
  deleteItem: (id: string) => void;
}
function ItemCard({ id, deleteItem, name, description, image }: ItemCardProps) {
  const navigate = useNavigate();
  return (
    <Card className="flex flex-col md:flex-row justify-between ">
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
      <CardFooter className="flex md:flex-row gap-2 justify-center items-center ">
        <Link to="">
          <Button variant={"outline"}>
            <Info className="flex-1" />
          </Button>
        </Link>
        <Link to={`/user/company/create/id=${id}`}>
          <Button variant={"outline"}>
            <PencilSimple className="flex-1" />
          </Button>
        </Link>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"destructive"}>
              <TrashSimple className="flex-1" color="white" />
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Deletar item</DialogTitle>
              <DialogDescription>
                Tem certeza que gostaria de deletar {name}?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Close
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  onClick={() => deleteItem(id)}
                  type="button"
                  variant="destructive"
                >
                  Confirmar
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}

export default ItemCard;

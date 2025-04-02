import { Link } from "react-router";
import { Button } from "../ui/button";

function NotFoundPage() {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="flex flex-col gap-5 items-center justify-center h-full w-full">
          <h1 className="text-2xl md:text-4xl ">
            Página não encontrada! <span className="font-bold">404</span>
          </h1>
          <h2 className="text-lg text-center md:text-2xl">
            A página pode ter sido removida ou o endereço digitado está
            incorreto.
          </h2>
          <Link to="/">
            <Button variant={"destructive"}>Voltar para página inicial</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;

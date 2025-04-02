import { Link } from "react-router";
import { Button } from "../ui/button";

function App() {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="flex flex-col gap-5 items-center justify-center h-full w-full">
          <h1 className="text-2xl md:text-4xl ">
            Seja bem vindo ao <span className="font-bold">GESTFLY</span>
          </h1>
          <h2 className="text-lg text-center md:text-2xl">
            Uma plataforma projetada para facilitar o agendamento de serviços e
            o gerenciamento de vendas.
          </h2>
          <div className="flex gap-5 justify-between">
            <Link to="/">
              <Button variant={"default"}>Cadastre-se</Button>
            </Link>
            <Link to="/user">
              <Button variant={"outline"}>Realize seu login</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import NavBar from "@/components/NavBar"
import { CategoriaItem } from "./CategoriaItem";
import { Button } from "@nextui-org/button";

export default async function Categorias() {

  async function getCategorias (){
    const resp = await fetch("http://localhost:8080/categoria")
    return await resp.json()
  }

  const categorias : Array<Categoria> = await getCategorias()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="categorias" />
     
      <section className="flex flex-col gap-2 bg-slate-900 mt-4 p-3 rounded min-w-[500px]">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Categorias Cadastradas</h2>
          <Button>nova categoria</Button>
        </div>

        {categorias.map(categoria => <CategoriaItem categoria={categoria} /> )}

      </section>

    </main>
  );
}

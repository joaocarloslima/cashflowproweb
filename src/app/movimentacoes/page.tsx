import NavBar from "@/components/NavBar";
import { get } from "../actions/movimentacoes/get";
import { MovimentacaoData } from "./MovimentacaoData";
import { getCategorias } from "../actions/categorias";

export default async function Movimentacoes() {
  const movimentacoes = await get()
  const categorias: Array<Categoria> = await getCategorias()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="movimentacoes" />

      <MovimentacaoData 
        movimentacoes={movimentacoes} 
        categorias={categorias}
       />

    </main>

  );
}

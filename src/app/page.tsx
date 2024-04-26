import CardStats from "@/components/Card"
import MovimentacaoTable from "@/components/MovimentacaoTable";
import NavBar from "@/components/NavBar"
import { get } from "./actions/movimentacoes/get";
import { getMaior, getMenor, getUltima } from "./actions/movimentacoes/dashboard";

export default async function Home() {

  // criar um server action para buscar esses dados da API
  const maior = {
    icon: "arrow-up",
    title: "Maior movimentação",
    value: await getMaior()
  }

  const menor = {
    icon: "arrow-down",
    title: "Menor movimentação",
    value: await getMenor()
  }

  const ultimo = {
    icon: "calendar",
    title: "Última movimentação",
    value: await getUltima()
  }

  const totais = [
    maior,
    menor,
    ultimo
  ]

  // criar um server action para buscar esses dados da API (5 últimas movimentações)
  const data = await get()
  const ultimasMovimentacoes: Movimentacao[] = data.content

  return (
    <main className="flex min-h-screen flex-col items-center gap-4">
      <NavBar active="dashboard"/>
      <h2 className="text-2xl font-bold">Dashboard</h2>

      <section className="grid grid-flow-col-dense  gap-5">
        { totais.map( t => <CardStats {...t} /> ) }
      </section>

      <section>
        <h3 className="text-lg font-bold">Últimas movimentações</h3>
        <MovimentacaoTable data={ultimasMovimentacoes}  />
      </section>


    </main>
  );
}

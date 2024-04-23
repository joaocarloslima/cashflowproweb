import CardStats from "@/components/Card"
import MovimentacaoTable from "@/components/MovimentacaoTable";
import NavBar from "@/components/NavBar"

export default function Home() {

  // criar um server action para buscar esses dados da API
  const maior = {
    icon: "arrow-up",
    title: "Maior movimentação",
    value: 99.00
  }

  const menor = {
    icon: "arrow-down",
    title: "Menor movimentação",
    value: 10.00
  }

  const ultimo = {
    icon: "calendar",
    title: "Última movimentação",
    value: 50.00
  }

  const totais = [
    maior,
    menor,
    ultimo
  ]

  // criar um server action para buscar esses dados da API (5 últimas movimentações)
  const ultimasMovimentacoes: Movimentacao[] = [
    {
      id: 1,
      data: "19/04/2024",
      descricao: "Compra no mercado",
      valor: 100.00,
      tipo: "SAIDA",
    },
    {
      id: 2,
      data: "18/04/2024",
      descricao: "Compra de passagem",
      valor: 25.00,
      tipo: "SAIDA",
    },
    {
      id: 3,
      data: "17/04/2024",
      descricao: "Compra de livro",
      valor: 50.00,
      tipo: "SAIDA",
    },
    {
      id: 4,
      data: "16/04/2024",
      descricao: "Venda de livro",
      valor: 20.00,
      tipo: "ENTRADA",
    },
    {
      id: 5,
      data: "15/04/2024",
      descricao: "Venda de livro",
      valor: 20.00,
      tipo: "ENTRADA",
    },
  ]

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

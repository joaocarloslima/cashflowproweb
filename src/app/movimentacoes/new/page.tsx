import NavBar from "@/components/NavBar";
import { getCategorias } from "@/app/actions/categorias/getCategorias";
import { Form } from "./Form";


export default async function CadastrarMovimentacoes() {
    const categorias = await getCategorias()

    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="movimentacoes" />

            <Form categorias={categorias} />
            
        </main>


    )
}
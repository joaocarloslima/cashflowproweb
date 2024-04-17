import NavBar from "@/components/NavBar";
import { EditForm } from "./EditForm";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getById } from "@/app/actions/categorias/get-by-id";

export default async function EditarCategoria({params}: Params){
    const id = params.id

    const categoria = await getById(id)

    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="categorias" />

            <EditForm {...categoria} />

        </main>
    )
}
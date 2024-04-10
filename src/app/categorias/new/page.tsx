import NavBar from "@/components/NavBar";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function FormCategoria(){

    async function create(formData: FormData){
        "use server"
        const data = {
            nome: formData.get("nome"),
            icone: "apple"
        }

        const options = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }

        await fetch("http://localhost:8080/categoria", options)

        redirect("/categorias")
    }

    return(
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="categorias" />

            <form action={create} className="flex flex-col gap-4 bg-slate-900 p-6 m-6 rounded">
                <h2 className="text-2xl font-bold">Cadastrar Categoria</h2>

                <Input 
                    name="nome"
                    label="Nome"
                    labelPlacement="outside"
                />

                <div className="flex justify-around">
                    <Link href="/categorias">
                        <Button variant="bordered">cancelar</Button>
                    </Link>

                    <Button type="submit" color="primary">salvar</Button>
                </div>

            </form>
        </main>
    )
}
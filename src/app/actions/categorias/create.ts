"use server"
import { redirect } from "next/navigation"

interface ValidationError {
    campo: string,
    mensagem: string
}

export async function create(prevState: any, formData: FormData){
    await new Promise(r => setTimeout(r, 4000))

    const data = {
        nome: formData.get("nome"),
        icone: formData.get("icone")
    }

    const options = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(process.env.API_BASE_URL + "/categoria", options)

    if (resp.ok){
        redirect("/categorias")
    }

    if (resp.status == 400){
        const data : ValidationError[] = await resp.json()
        return {
            message: data.find(erro=> erro.campo == "nome")?.mensagem
        }
    }

}
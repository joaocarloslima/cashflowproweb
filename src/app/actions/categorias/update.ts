"use server"
import { redirect } from "next/navigation"

interface ValidationError {
    campo: string,
    mensagem: string
}

export async function update(prevState: any, formData: FormData){
    await new Promise(r => setTimeout(r, 4000))
    const id = formData.get("id")
    const data = {
        nome: formData.get("nome"),
        icone: formData.get("icone")
    }

    const options = {
        method: "put",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(process.env.API_BASE_URL + "/categoria/" + id, options)

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
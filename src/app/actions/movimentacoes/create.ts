"use server"

import { redirect } from "next/navigation"

export async function create(prevState: any, formData: FormData){
    await new Promise( r => setTimeout(r, 2000))

    const date = formData.get("data");
    const partes = String(date).split('-');
    formData.set("data", partes[2] + '/' + partes[1] + '/' + partes[0]);
    
    const data = {
        descricao: formData.get("descricao"),
        valor: formData.get("valor"),
        tipo: formData.get("tipo"),
        categoria: {
            id: formData.get("categoria")
        },
        data: formData.get("data"),
    }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }

    }
    const resp = await fetch(process.env.API_BASE_URL + "/movimentacao", options)

    if (resp.ok){
        redirect("/movimentacoes")
    }

    if(resp.status == 400){
        const messages = await resp.json()

        return {
            message_descricao: messages.find( (m: any) => m.campo == "descricao")?.mensagem || '',
            message_valor: messages.find( (m: any) => m.campo == "valor")?.mensagem || '',
            message_data: messages.find( (m: any) => m.campo == "data")?.mensagem || '',
        }
    }
    
}
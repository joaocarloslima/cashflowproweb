"use server"

import { redirect } from "next/navigation"

export async function destroy(id: number){
    await new Promise( r => setTimeout(r, 3000))
    
    const options = {
        method: "DELETE"
    }

    const resp = await fetch(process.env.API_BASE_URL + "/movimentacao/" + id, options)

    if (!resp.ok){
        throw new Error("erro ao apagar")
    }
    
    if (resp.ok){
        redirect("/movimentacoes")
    }



}
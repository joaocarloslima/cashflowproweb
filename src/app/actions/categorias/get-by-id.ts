"use server"

export async function getById(id: number){

    const resp = await fetch(process.env.API_BASE_URL + "/categoria/" + id, {next: {revalidate: 0}})

    if (resp.ok){
        return await resp.json()
    }
    
    if (!resp.ok){
        throw new Error("Erro ao buscar categoria")
    }

}
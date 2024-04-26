"use server"

export async function getMenor(){
    const resp = await fetch(process.env.API_BASE_URL + "/movimentacao/menor")
    const json = await resp.json()
    return json.valor
}

export async function getMaior(){
    const resp = await fetch(process.env.API_BASE_URL + "/movimentacao/maior")
    const json = await resp.json()
    return json.valor
}


export async function getUltima(){
    const resp = await fetch(process.env.API_BASE_URL + "/movimentacao/ultima")
    const json = await resp.json()
    return json.valor
}
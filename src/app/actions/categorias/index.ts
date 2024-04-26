export async function getCategorias() {
    const resp = await fetch(process.env.API_BASE_URL + "/categoria", {
        next: {
            tags: ["categorias"]
        }
    })
    return await resp.json()
}
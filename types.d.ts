interface Categoria {
    id: number,
    nome: string,
    icone: string
}

interface Movimentacao {
    id: number,
    descricao: string,
    valor: number,
    data: string,
    tipo: "ENTRADA" | "SAIDA"
    
}
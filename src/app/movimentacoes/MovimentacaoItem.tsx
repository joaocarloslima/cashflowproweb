"use client"

import DropDownActions from "@/components/DropDownActions";
import { Icon } from "@/components/Icon";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { destroy } from "../actions/movimentacoes/destroy";
import { ArrowDown, ArrowUp } from "lucide-react";


interface MovimentacaoItemProps{
    movimentacao : Movimentacao
}

export function MovimentacaoItem({ movimentacao }: MovimentacaoItemProps){
    const router = useRouter()

    function handleDelete(){
        toast.promise(
            destroy(movimentacao.id),
             {
               loading: "apagando...",
               success: "apagado com sucesso",
               error: "erro ao apagar",
             }
           );

    }

    return (
        <div className="flex justify-between p-2 hover:bg-slate-600 rounded cursor-pointer">
            <div className="flex gap-2 items-center">
                <Icon name={movimentacao.categoria.icone} />
                <span>{movimentacao.data}</span>
                <span>{movimentacao.descricao}</span>
            </div>
            <div className="flex gap-2 items-center">
                <div className="flex gap-2 items-center">
                    R$ {movimentacao.valor.toFixed(2)}
                    {movimentacao.tipo === "ENTRADA" ? 
                        <ArrowDown className="text-green-500" size={18} /> : 
                        <ArrowUp className="text-red-500" size={18} />
                    }
                </div>
                <DropDownActions 
                    onDelete={handleDelete} 
                    onEdit={() => toast("não implementado")} 
                />
            </div>
        </div>
    )
}
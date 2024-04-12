"use client"

import DropDownActions from "@/components/DropDownActions";
import { Icon } from "@/components/Icon";
import { destroy } from "../actions/categorias/destroy";
import toast from "react-hot-toast";


interface CategoriaItemProps {
    categoria: Categoria
}

export function CategoriaItem({ categoria }: CategoriaItemProps) {

    function handleDelete() {
        toast.promise(
            destroy(categoria.id),
            {
                loading: `apagando categoria ${categoria.nome}...`,
                success: "categoria apagada",
                error: "erro ao apagar categoria",
            }
        );

    }

    return (
        <div className="flex justify-between p-2">
            <div className="flex items-center gap-2">
                <Icon name={categoria.icone} />
                <span>{categoria.nome}</span>
            </div>
            <DropDownActions onDelete={handleDelete} />
        </div>
    )
}
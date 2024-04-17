"use client"

import { update } from "@/app/actions/categorias/update"
import { icons } from "@/app/utils/icons"
import { SubmitButton } from "@/components/SubmitButton"
import { Autocomplete, AutocompleteItem, Button, Input } from "@nextui-org/react"
import Link from "next/link"
import { useFormState } from "react-dom"

export function EditForm(categoria: Categoria){
    const initialState = {
        message: ""
    }

    const [state, formAction] = useFormState(update, initialState)

    return (
        <form action={formAction} className="flex flex-col gap-4 bg-slate-900 p-6 m-6 rounded">
                <h2 className="text-2xl font-bold">Editar Categoria {categoria.nome}</h2>
                <input type="hidden" name="id" value={categoria.id} />
                <Input 
                    name="nome"
                    label="Nome"
                    defaultValue={categoria.nome}
                    labelPlacement="outside"
                    variant="bordered"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />

            <Autocomplete
                label="selecione um ícone"
                placeholder="buscar..."
                defaultInputValue={categoria.icone}
                variant="bordered"
                labelPlacement="outside"
                defaultItems={icons}
                name="icone"
            >
                {(item) => <AutocompleteItem key={item.name} startContent={item.icon}>
                    {item.name}
                </AutocompleteItem>}
            </Autocomplete>

                <div className="flex justify-around">
                    <Link href="/categorias">
                        <Button variant="bordered">cancelar</Button>
                    </Link>

                    <SubmitButton />
                </div>

            </form>
    )
}
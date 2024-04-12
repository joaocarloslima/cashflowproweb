"use client"
import { create } from "@/app/actions/categorias/create";
import NavBar from "@/components/NavBar";
import { SubmitButton } from "@/components/SubmitButton";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useFormState } from "react-dom";
import AutocompleteIcon from "../AutocompleteIcon";

const initialState = {
    message: ""
}

export default function FormCategoria(){
    const [state, formAction] = useFormState(create, initialState)

    return(
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="categorias" />

            <form action={formAction} className="flex flex-col gap-4 bg-slate-900 p-6 m-6 rounded">
                <h2 className="text-2xl font-bold">Cadastrar Categoria</h2>

                <Input 
                    name="nome"
                    label="Nome"
                    labelPlacement="outside"
                    variant="bordered"
                    isInvalid={state?.message != ""}
                    errorMessage={state?.message}
                />

                <AutocompleteIcon />

                <div className="flex justify-around">
                    <Link href="/categorias">
                        <Button variant="bordered">cancelar</Button>
                    </Link>

                    <SubmitButton />
                </div>

            </form>
        </main>
    )
}
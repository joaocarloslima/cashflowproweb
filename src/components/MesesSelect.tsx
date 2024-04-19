"use client"

import { meses } from "@/app/util/meses";
import { Select, SelectItem } from "@nextui-org/react";

export function MesesSelect() {
    return (
        <Select 
            label="Mês" 
            variant="bordered"
            name="mes"
            placeholder="Selecione um mês"
            labelPlacement="outside"
            items={meses}
        >
            {(mes) => <SelectItem key={mes.id}>{mes.nome}</SelectItem>}
        </Select>

    )
}

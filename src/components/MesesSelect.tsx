"use client"

import { meses } from "@/app/util/meses";
import { Select, SelectItem } from "@nextui-org/react";
import { ChangeEventHandler } from "react";

interface MesesSelectProps {
    onChange: ChangeEventHandler,
    mes: number
}

export function MesesSelect({onChange, mes}: MesesSelectProps) {
    return (
        <Select 
            label="Mês" 
            variant="bordered"
            name="mes"
            value={mes}
            placeholder="Selecione um mês"
            labelPlacement="outside"
            items={meses}
            onChange={onChange}
        >
            {(mes) => <SelectItem key={mes.id}>{mes.nome}</SelectItem>}
        </Select>

    )
}

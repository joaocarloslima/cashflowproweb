"use client"

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useCallback } from "react";

const columns = [
    {
        key: "data",
        label: "Data",
    },
    {
        key: "descricao",
        label: "Descrição",
    },
    {
        key: "valor",
        label: "valor",
    },

];

interface MovimentacaoTableProps {
    data: Movimentacao[];
}

export default function MovimentacaoTable({data}: MovimentacaoTableProps) {
    const renderCell = useCallback((item: any, columnKey: any) => {
        const cellValue = item[columnKey];

        switch (columnKey) {
          case "valor":
            return (
                <span className="flex items-center">
                    R$ {cellValue.toFixed(2)}
                    {item.tipo === "SAIDA" && <ArrowUp className="text-red-500" size={16} />}
                    {item.tipo === "ENTRADA" && <ArrowDown className="text-green-500" size={16} />}
                </span>
            )            
          default:
            return cellValue;
        }
      }, []);
    
    return (
        <Table aria-label="ultimas movimentações" className="w-[570px]">
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={data}>
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}

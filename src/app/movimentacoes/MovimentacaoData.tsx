'use client'

import { CategoriaSelect } from "@/components/CategoriaSelect";
import { MesesSelect } from "@/components/MesesSelect";
import { Button, Pagination } from "@nextui-org/react";
import { Filter, Plus } from "lucide-react";
import Link from "next/link";
import { MovimentacaoItem } from "./MovimentacaoItem";
import { useEffect, useState } from "react";
import { get } from "../actions/movimentacoes/get";

interface MovimentacaoDataProps {
    movimentacoes: {
        content: Array<Movimentacao>
    },
    categorias: Array<Categoria>
}

export function MovimentacaoData({ movimentacoes, categorias }: MovimentacaoDataProps) {

    const [filteredMovimentacoes, setFilteredMovimentacoes] = useState(movimentacoes.content)
    const [filter, setFilter] = useState({ categoria: '', mes: new Date().getMonth() + 1 })
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(10)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await get(filter.categoria, Number(filter.mes), page)
                setFilteredMovimentacoes(data.content)
                setTotalPages(data.totalPages)
            } catch (error) {
                throw new Error("falha ao filtrar movimentações.")
            }
        };

        fetchData();
    }, [filter, page]);

    const changeFilter = (e: any) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
    }

    const clearFilter = () => {
        setFilter({ categoria: '', mes: new Date().getMonth() + 1 });
    }

    const handlePageChange = (page: number) => {
        setPage(page);
    }

    return (
        <>
            <section className="flex flex-col gap-4 bg-slate-800 w-4/5 max-w-[1024px] min-h-[565px] mt-4 p-6 rounded">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Movimentações</h2>
                    <Link href="/movimentacoes/new">
                        <Button color="primary" startContent={<Plus />}>nova movimentação</Button>
                    </Link>
                </div>

                <div className="flex gap-4 items-end border-1 border-white/10 p-4 rounded">
                    <Filter size={44} />
                    <CategoriaSelect categorias={categorias} onChange={changeFilter} />
                    <MesesSelect onChange={changeFilter} mes={filter.mes}/>
                    <Button onClick={clearFilter}>limpar</Button>
                </div>

                {filteredMovimentacoes.map(movimentacao =>
                    <MovimentacaoItem key={movimentacao.id} movimentacao={movimentacao} />
                )}

            </section>

            <Pagination 
                onChange={handlePageChange}
                isCompact 
                showControls 
                total={totalPages} 
                page={1}
                className="mt-6"
             />

        </>
    )
}
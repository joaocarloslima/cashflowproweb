import DropDownActions from "@/components/DropDownActions";
import NavBar from "@/components/NavBar";
import { Button, Skeleton } from "@nextui-org/react";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function Loading() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="movimentacoes" />

            <section className="flex flex-col gap-2 bg-slate-800 min-w-[600px] mt-4 p-2 rounded">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Movimentações</h2>
                    <Link href="/categorias/new">
                        <Button color="primary" startContent={<Plus />}>nova movimentação</Button>
                    </Link>
                </div>

                {[1,2,3].map( () => {
                    return (
                        <div className="flex justify-between p-2 items-center">
                            <div className="flex gap-2 items-center">
                                <Skeleton className="rounded-full size-10"/>
                                <Skeleton className="h-3 w-40 rounded-lg"/>
                            </div>
                        </div>
                    )
                } )}

            </section>



        </main>
    )
}
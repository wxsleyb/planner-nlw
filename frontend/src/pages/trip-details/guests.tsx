import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";


export function Guests() {

    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Convidados</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Juliana Cavalcanti</span>
                        <span className="block text-sm font-medium text-zinc-400 truncate hover:text-zinc-200">cavalcanti.juliana@gmail.com</span>

                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0"></CircleDashed>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Wesley Braga</span>
                        <span className="block text-sm font-medium text-zinc-400 truncate hover:text-zinc-200">wesleyfbraga@gmail.com</span>

                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0"></CircleDashed>
                </div>
            </div>

            <Button variant="secondary" size="full">
                <UserCog className='size-5'></UserCog>
                Gerenciar convidados
            </Button>
        </div>
    )
}
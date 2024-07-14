import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {

    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links Importantes</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
                        <a href="#" className="block text-xs font-medium text-zinc-400 truncate hover:text-zinc-200">https://www.airbnb.com.br/rooms/21931931238129398</a>

                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0"></Link2>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Reserva do Restaurante</span>
                        <a href="#" className="block text-xs font-medium text-zinc-400 truncate hover:text-zinc-200">https://www.restaurante.com.br/table/13123123</a>

                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0"></Link2>
                </div>
            </div>

            <Button variant="secondary" size="full">
                <Plus className='size-5'></Plus>
                Cadastrar novo link
            </Button>
        </div>
    )
}
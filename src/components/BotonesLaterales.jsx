import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { Calendar, Phone, Trophy } from "lucide-react";



export default function BotonesLaterales() {
    return (
        <div className="fixed z-20 flex flex-col bottom-12 right-10 gap-y-4">
            <Tooltip content="Proximas Fechas" placement={"left"} color="primary" classNames={{
                base: "py-2 px-4 shadow-xl text-white font-medium ",
                
            }}>
                <Button isIconOnly aria-label="Proximas Fechas" color="primary" startContent={<Calendar />}></Button>
            </Tooltip>
            <Tooltip content="Torneos Futbol/Hockey" placement={"left"} color="warning" classNames={{
                base: "py-2 px-4 shadow-xl text-white font-medium ",
                
            }}>
                <Button isIconOnly aria-label="Torneos" color="warning" className="text-white" startContent={<Trophy />}></Button>
            </Tooltip>
            <Tooltip content="Escribenos por WhatsApp" placement={"left"} color="success" classNames={{
                base: "py-2 px-4 shadow-xl text-white font-medium ",
                
            }}>
                <Button isIconOnly aria-label="Whatsapp" color="success" className="text-white" startContent={<Phone />}></Button>
            </Tooltip>
        </div>

    )
}

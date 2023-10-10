import Image from "next/image";
import arbitro from "../../../../public/arbitro.svg";


export default function Juez() {
    return (
        <Image src={arbitro} alt='whistle' className="w-5 h-5 uppercase" />
    )
}

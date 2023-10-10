import Image from "next/image";
import manager from "../../../../public/manager.svg";


export default function Manager() {
    return (
        <Image src={manager} alt='whistle' className="w-5 h-5 uppercase" />
    )
}

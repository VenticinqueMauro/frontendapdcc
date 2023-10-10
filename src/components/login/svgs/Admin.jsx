import Image from "next/image";
import admin from "../../../../public/admin.svg";


export default function Admin() {
    return (
        <Image src={admin} alt='whistle' className="w-5 h-5 uppercase " />
    )
}

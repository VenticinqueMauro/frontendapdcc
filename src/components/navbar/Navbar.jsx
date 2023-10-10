import Image from "next/image";
import logo from "../../../public/logo-2.png";
import { Button } from "@nextui-org/button";
import { LogIn, MenuSquare } from "lucide-react";
import Link from "next/link";
import MenudropDown from "./MenudropDown";


const navSections = [
    {
        name: 'inicio',
        href: '/',
        order: 'first'
    },
    {
        name: 'hockey',
        href: '/hockey',
        order: '2'
    },
    {
        name: 'nosotros',
        href: '#nosotros',
        order: '4'
    },
    {
        name: 'reglamento',
        href: '/reglamento',
        order: '2'
    },
    {
        name: 'galeria',
        href: '/galeria',
        order: '3'
    },
    {
        name: 'contacto',
        href: '/#contacto',
        order: '5'
    },
]


export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 z-20 flex justify-between w-full px-6 py-1 cristal navbar">
            <Link href={'/'}>
                <Image src={logo} alt='logo' priority className="absolute top-0 w-14 left-4 xl:relative " />
            </Link>
            <ul className="flex hidden gap-2 px-4 py-2 mt-3 rounded-xl xl:inline-flex">
                {
                    navSections.map(section => (
                        <li key={section.name} className={`order-${section.order}`}>
                            <Link href={section.href} >
                                <Button variant="light" className="text-white capitalize text-md">
                                    {section.name}
                                </Button>
                            </Link>
                        </li>
                    ))
                }
                <MenudropDown />
                <li className="order-last">
                    <Link href="#">
                        <Button href="/promos" variant="solid" color="danger" className="font-bold text-md">
                            Novedades
                        </Button>
                    </Link>
                </li>
            </ul>
            <Link href="/login">
                <Button className="hidden mt-5 text-white xl:inline-flex" isIconOnly radius="sm" variant="flat" startContent={<LogIn size={20} />}></Button>
            </Link>
            <Button className="absolute text-white top-3 right-3 xl:hidden" isIconOnly radius="sm" variant="light" startContent={<MenuSquare size={40} />}></Button>
        </nav>
    )
}

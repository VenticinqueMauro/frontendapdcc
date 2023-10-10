'use client';

import { Button } from "@nextui-org/button";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
import Link from "next/link";
import React from "react";


export default function MenudropDown() {
    return (
        <li className="order-1">
            <Dropdown >
                <DropdownTrigger>
                    <Button
                        variant="light"
                        className="text-white text-md"
                    >
                        Futbol
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions" >
                    <DropdownItem key="masculino" >
                        <Link href={'/futbol/masculino'}>
                            Masculino
                        </Link>
                    </DropdownItem>
                    <DropdownItem key="femenino">
                        <Link href={'/futbol/masculino'}>
                            Femenino
                        </Link>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </li>
    );
}

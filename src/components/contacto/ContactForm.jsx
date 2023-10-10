'use client';

import { Button, Divider, Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Send, SendHorizonal } from "lucide-react";

export default function ContactForm() {
    return (
        <section className='grid min-h-screen px-3 mx-auto max-w-7xl md:px-6' id="contacto">
            <h2 className="pt-24 pb-10 text-5xl font-bold text-center md:text-7xl lg:text-9xl text-foreground md:text-start">Contacto</h2>
            <div className="flex flex-col items-center justify-center gap-2 rounded-md md:gap-0 sm:px-3 md:m-10 bg-foreground-100/50">
                <div className="flex flex-col w-full text-center">
                    <a href="mailto:info@apdcc.com.ar" target="_blank" rel="noreferrer" className="text-foreground-500 hover:text-foreground-700">
                        info@apdcc.com.ar
                    </a>
                    <h2 className="font-semibold tracking-tight md:text-xl">
                        Envianos tus consultas o comentarios y te responderemos a la brevedad
                    </h2>
                </div>
                <form className="flex flex-col w-full max-w-4xl gap-4 p-3 md:p-10"> {/* Cambiamos el tamaño máximo del formulario */}
                    <div className="flex gap-4">
                        <Input type="email" label="Nombre y Apellido" placeholder="Pepe Juarez" />
                        <Input type="email" label="Email" placeholder="ejemplo@ejemplo" />
                    </div>
                    <div className="flex gap-4">
                        <Input type="email" label="Teléfono / Celular" placeholder="11-xxxxxxxx" />
                        <Input type="email" label="Localidad" placeholder="La Plata" />
                    </div>
                    <Textarea
                        label="Mensaje"
                        labelPlacement="outside"
                        placeholder="Escriba su mensaje"
                        className="w-full"
                    />
                    <Button type="submit" className="w-full mt-2" variant="solid" color="default">
                        Enviar
                    </Button>
                </form>
            </div>
        </section>
    )
}

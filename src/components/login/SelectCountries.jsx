"use client";

import { Select, SelectItem } from "@nextui-org/select";

const barriosPrivados = [
    'Nordelta',
    'San Isidro Labrador',
    'Ayres de Pilar',
    'Los Alisos',
    'Santa Bárbara',
    'Terravista',
    'La Comarca',
    'Pilar del Este',
    'El Cantón',
    'Altos del Golf',
    'Los Lagartos Country Club',
    'Haras Santa María',
    'Los Castaños',
    'La Delfina',
    'Barrio Parque Almirante Brown'
];


export default function SelectCountries({ register, isManagerSelected }) {


    return (
        <Select
            className="max-w-xs"
            {...(isManagerSelected ? { isRequired: true } : {})}
            label="Countries"
            size="sm"
            variant="underlined"
            color="default"
            {...register("countries")}
        >
            {
                barriosPrivados.map(barrio => (
                    <SelectItem
                        key={barrio}
                        variant="flat"
                        className="uppercase"
                    >
                        {barrio}
                    </SelectItem>
                ))
            }

        </Select>
    );
}

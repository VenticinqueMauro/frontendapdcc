"use client";

import { Select, SelectItem } from "@nextui-org/select";
import Admin from "./svgs/Admin";
import Juez from "./svgs/Juez";
import Manager from "./svgs/Manager";



export default function SelectRole({ register, setIsManagerSelected }) {


    return (
        <Select
            isRequired
            id="role"
            label="Role"
            size="sm"
            variant="underlined"
            color="default"
            {...register("role")}
        >
            <SelectItem
                key="ADMIN"
                id="ADMIN"
                startContent={<Admin />}
                variant="flat"
                className="uppercase"
                onClick={() => setIsManagerSelected(false)}

            >
                Admin
            </SelectItem>
            <SelectItem
                key="MANAGER"
                id="MANAGER"
                startContent={<Manager />}
                className="uppercase"
                onClick={() => setIsManagerSelected(true)}
            >
                Manager
            </SelectItem>
            <SelectItem
                key="JUEZ"
                id="JUEZ"
                startContent={<Juez />}
                className="uppercase"
                onClick={() => setIsManagerSelected(false)}
            >
                Juez
            </SelectItem>
        </Select>
    );
}

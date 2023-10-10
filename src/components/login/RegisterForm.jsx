"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Eye, EyeOff, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { registerInfo } from "../validation/registerInfo";
import SelectCountries from "./SelectCountries";
import SelectRole from "./SelectRole";



export default function RegisterForm() {

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    const toggleVisibility2 = () => setIsVisible2(!isVisible2);

    const [isManagerSelected, setIsManagerSelected] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            mail: '',
            first_name: '',
            last_name: '',
            password: '',
            confirmPassword: '',
            role: '',
        }, resolver: zodResolver(registerInfo)
    })



    const onSubmit = async (data) => {
        toast.promise(
            async () => {
                try {
                    const response = await fetch('http://localhost:8080/api/auth/register', {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })

                    if (response.ok) {
                        const responseData = await response.json();
                        console.log(responseData);
                        return '¡Registro Exitoso! 😄 ¡Bienvenid@!'
                    } else {
                        throw new Error('Oops, algo salió mal en el registro. 😕')
                    }
                } catch (error) {
                    console.log(error);
                    throw error;
                }
            }, {
            loading: 'Loading...',
            success: (message) => message,
            error: (error) => error.message,
        }
        )
    }

    return (
        <div className="max-w-xs p-5 m-auto rounded md:max-w-xl md:p-10 bg-white/10">
            <h1 className="flex items-start justify-center gap-1 pb-2 text-xl font-medium text-center md:text-4xl md:gap-2">
                <User className="w-6 h-6 md:w-9 md:h-9" />
                Register
            </h1>
            <form className="flex flex-col items-center justify-center gap-3 " onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="Email"
                    id="mail"
                    type="email"
                    size="lg"
                    placeholder="ejemplo"
                    variant="underlined"
                    color="default"
                    isInvalid={false}
                    errorMessage={errors.mail?.message}
                    {...register("mail")}
                />
                <div className="flex flex-col w-full gap-4 md:flex-row">
                    <Input
                        type="text"
                        id="first_name"
                        size="lg"
                        label="Nombre"
                        variant="underlined"
                        placeholder="Juan"
                        className="max-w-xs"
                        color="default"
                        isInvalid={false}
                        errorMessage={errors.first_name?.message}
                        {...register("first_name")}
                    />
                    <Input
                        type="text"
                        id="last_name"
                        size="lg"
                        label="Apellido"
                        variant="underlined"
                        placeholder="Perez"
                        className="max-w-xs"
                        color="default"
                        isInvalid={false}
                        errorMessage={errors.last_name?.message}
                        {...register("last_name")}
                    />
                </div>
                <div className="flex flex-col order-3 gap-4 md:flex-row">
                    <Input
                        label="Contraseña"
                        id="password"
                        size="lg"
                        variant="underlined"
                        placeholder="Ingrese su contraseña"
                        color="default"
                        isInvalid={false}
                        errorMessage={errors.password?.message}
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                {isVisible ? (
                                    <Eye size={22} className="text-2xl pointer-events-none text-default-400" />
                                ) : (
                                    <EyeOff size={22} className="text-2xl pointer-events-none text-default-400" />
                                )}
                            </button>
                        }
                        type={isVisible ? "text" : "password"}
                        className="max-w-xs "
                        {...register("password")}
                    />
                    <Input
                        label="Repetir contraseña"
                        id="confirmPassword"
                        size="lg"
                        variant="underlined"
                        placeholder="Repita su contraseña"
                        color="default"
                        isInvalid={false}
                        errorMessage={errors.confirmPassword?.message}
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility2}>
                                {isVisible2 ? (
                                    <Eye size={22} className="text-2xl pointer-events-none text-default-400" />
                                ) : (
                                    <EyeOff size={22} className="text-2xl pointer-events-none text-default-400" />
                                )}
                            </button>
                        }
                        type={isVisible2 ? "text" : "password"}
                        className="max-w-xs"
                        {...register("confirmPassword")}
                    />
                </div>
                <div className="flex flex-col order-first w-full gap-4 md:flex-row">
                    <SelectRole register={register} setIsManagerSelected={setIsManagerSelected} />
                    {
                        isManagerSelected &&
                        <SelectCountries register={register} isManagerSelected={isManagerSelected} />
                    }
                </div>
                <Button type="submit" className="order-last w-full mt-2" variant="solid" color="default" >Login</Button>
            </form>
        </div>
    )
}

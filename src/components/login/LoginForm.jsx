"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Eye, EyeOff, Mail, User } from "lucide-react";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { toast } from "sonner";
import { loginInfo } from "../validation/loginInfo";


const urlBack = 'http://localhost:8080/api/auth/login'


export default function LoginForm() {

    const router = useRouter()

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            mail: '',
            password: ''
        }, resolver: zodResolver(loginInfo)
    })

    const onSubmit = async (data) => {
        toast.promise(
            async () => {
                try {
                    const response = await fetch(urlBack, {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    });

                    if (response.ok) {
                        const responseData = await response.json();
                        console.log(responseData);
                        router.push('/register')
                        return `¡Inicio de sesión exitoso! 😄 ¡Bienvenid@!`;

                    } else {
                        throw new Error(`Oops, algo salió mal en el inicio de sesión. 😕`);
                    }
                } catch (error) {
                    console.log(error);
                    throw error;
                }
            },
            {
                loading: 'Loading...',
                success: (message) => message,
                error: (error) => error.message,
            }
        );
        console.log(data);
    };


    return (
        <div className="max-w-xs p-10 m-auto rounded xl:max-w-lg bg-white/10">
            <h1 className="flex items-center justify-center gap-1 pb-2 text-2xl font-medium text-center md:text-4xl md:gap-2">
                <User className="w-6 h-6 md:w-9 md:h-9" />
                Login
            </h1>
            <form className="flex flex-col items-center justify-center gap-3 " onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="email"
                    id="mail"
                    size="lg"
                    label="Email"
                    variant="underlined"
                    placeholder="ejemplo@ejemplo.com"
                    className="max-w-xs "
                    color="default"
                    isInvalid={false}
                    errorMessage={errors.mail?.message}
                    endContent={<Mail className="text-default-400 " size={22} />}
                    {...register('mail')}
                />
                <Input
                    label="Password"
                    id="password"
                    size="lg"
                    variant="underlined"
                    placeholder="Enter your password"
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
                    {...register('password')}
                />
                <Button type="submit" className="w-full mt-2" variant="solid" color="default" >Login</Button>
            </form>
        </div>

    )
}

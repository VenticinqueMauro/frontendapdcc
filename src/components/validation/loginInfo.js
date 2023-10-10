import { z } from "zod";

export const loginInfo = z.object({
    mail: z.string().email({ message: 'Por favor, ingresa una dirección de correo electrónico válida' }),
    password: z.string().min(8, { message: 'La contraseña debe contener al menos 8 caracteres' })
})
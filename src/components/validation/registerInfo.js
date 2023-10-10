import { z } from "zod";

export const registerInfo = z.object({
    mail: z.string().email({ message: 'Por favor, ingresa una dirección de correo electrónico válida' }),
    first_name: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres' }),
    last_name: z.string().min(3, { message: 'El apellido debe tener al menos 3 caracteres' }),
    password: z.string().min(8, { message: 'La contraseña debe contener al menos 8 caracteres' }),
    confirmPassword: z.string().min(8, { message: 'La contraseña de confirmación debe contener al menos 8 caracteres' }),
    role: z.string(),
    countries: z.string().optional()

}).refine((data) => data.confirmPassword === data.password, {
    message: 'Las contraseñas no coinciden',
    path: ['confirmPassword'],
})
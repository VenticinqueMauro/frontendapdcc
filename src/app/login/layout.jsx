import { Toaster } from "sonner"


export const metadata = {
    title: 'Login | APDCC',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}) {
    return (
        <section className="flex items-center justify-center min-h-screen px-3 pb-3 bg-black">
            {children}
            <Toaster />
        </section>
    )
}
import Image from "next/image";
import subrallado from "../../../public/subrallado.png";
import pelota from "../../../public/balon.png";


export default function Portada() {
    return (
        <section className="z-10 flex items-center justify-center w-full h-screen portada">
            <div className="max-w-4xl p-2 text-center text-white rounded textShadow lg:p-10">
                <div className="flex flex-col items-center justify-center ">
                    <p className="text-sm font-medium text-center textShadow md:text-lg">{`"Desde 1984 Formando Futuro"`}</p>
                    <div className="flex items-end">
                        <h1 className="font-bold text-center text-7xl md:text-9xl textShadow">APDCC</h1>
                        <Image src={pelota} alt="pelota" className="w-16 rounded-full md:w-32" />

                    </div>
                </div>
                <Image src={subrallado} alt="subrallado" />
                <h2 className="p-1 font-semibold md:text-2xl textShadow">ASOCIACIÓN DE PROFESIONALES DOCENTES DE CLUBES DE CAMPO</h2>
                <h4 className="p-1 textShadow md:text-lg">En el campo netamente deportivo, planificamos y desarrollamos Torneos de Fútbol y Torneos de Hockey, desde una definida línea filosófica donde los valores educativos generan un marco de sana competencia y confraternidad.</h4>
            </div>
        </section>
    )
}

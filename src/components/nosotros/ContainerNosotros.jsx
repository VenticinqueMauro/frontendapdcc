
export default function ContainerNosotros() {
    return (
        <section className="grid min-h-screen grid-cols-12 gap-4 px-3 pt-24 pb-10 mx-auto md:px-6 md:p-4 lg:gap-10 max-w-7xl place-content-center" id="nosotros">
            <h2 className="col-span-12 text-5xl font-bold text-center lg:row-span-5 md:text-7xl lg:text-9xl text-foreground md:text-start">Nosotros</h2>
                <div className="col-span-12 p-2 transition-colors transition-transform duration-200 rounded-md cursor-pointer md:p-4 lg:col-span-8 bg-primary/10 hover:bg-primary/20 md:-rotate-2 hover:rotate-0">
                    {/* <p className="block text-lg tracking-tight">Nuestra</p> */}
                    <span className="tracking-tight block font-bold  from-[#5EA2EF] to-[#0072F5]  bg-clip-text text-transparent bg-gradient-to-b text-3xl text-3xl md:text-4xl lg:text-5xl  w-full">MISION</span>
                    <p className="pt-2 text-sm md:text-base">La Asociación de Profesionales Docentes de Clubes de Campo tiene como misión desarrollar actividades sociales, deportivas y recreativas para niños, adolescentes y jóvenes pertenecientes a countries y clubes de campo de zona noroeste del Gran Buenos Aires, en un ámbito profundamente marcado por la perspectiva docente.Cada líder o personalidad destacada en el ámbito deportivo, social o cultural tuvo una infancia. Nosotros contamos con el honor y la enorme responsabilidad de tener a nuestro cargo parte de la educación de quienes podrían ser los protagonistas del futuro.</p>
                </div>
                <div className="col-span-12 p-2 transition-colors transition-transform duration-200 rounded-md cursor-pointer md:p-4 lg:col-span-4 bg-danger/10 hover:bg-danger/20 hover:rotate-0 md:rotate-1 ">
                    {/* <p className="block text-lg tracking-tight">Nuestros</p> */}
                    <span className="tracking-tight block font-bold from-[#EE6F6F] to-[#C91717]  bg-clip-text text-transparent bg-gradient-to-b w-full  text-3xl md:text-4xl lg:text-5xl ">INICIOS</span>
                    <p className="pt-2 text-sm md:text-base">Nuestros valores incluyen el respeto por el prójimo, la solidaridad, la responsabilidad, el trabajo en equipo, el compromiso, el esfuerzo, la excelencia y la fortaleza y coraje para encarar el futuro.</p>
                </div>
                <div className="col-span-12 p-2 transition-colors transition-transform duration-200 rounded-md cursor-pointer md:p-4 lg:col-span-5 bg-success/10 hover:bg-success/20 md:rotate-2 hover:rotate-0">
                    {/* <p className="block text-lg tracking-tight">Nuestros</p> */}
                    <span className="tracking-tight block  font-bold from-[#6FEE8D] to-[#17c964]  bg-clip-text text-transparent bg-gradient-to-b w-full text-3xl md:text-4xl lg:text-5xl ">VALORES</span>
                    <p className="pt-2 text-sm md:text-base">Nuestros valores incluyen el respeto por el prójimo, la solidaridad, la responsabilidad, el trabajo en equipo, el compromiso, el esfuerzo, la excelencia y la fortaleza y coraje para encarar el futuro.</p>
                </div>
                <div className="col-span-12 p-2 transition-colors transition-transform duration-200 rounded-md cursor-pointer md:p-4 lg:col-span-7 bg-warning/10 hover:bg-warning/20 md:-rotate-2 hover:rotate-0">
                    {/* <p className="block text-lg tracking-tight">Nuestros</p> */}
                    <span className="tracking-tight block  font-bold from-[#FF705B] to-[#FFB457]  bg-clip-text text-transparent bg-gradient-to-b w-full text-3xl md:text-4xl lg:text-5xl ">FUTURO</span>
                    <p className="pt-2 text-sm md:text-base">Nuestros valores incluyen el respeto por el prójimo, la solidaridad, la responsabilidad, el trabajo en equipo, el compromiso, el esfuerzo, la excelencia y la fortaleza y coraje para encarar el futuro.</p>
                </div>
        </section>
    )
}

import BotonesLaterales from "@/components/BotonesLaterales";
import ContactForm from "@/components/contacto/ContactForm";
import ContainerNosotros from "@/components/nosotros/ContainerNosotros";
import ContainerPortada from "../components/portada/Container";

export default function page() {
  return (
    <main>
      {/* PORTADA INICIAL  */}
      <ContainerPortada />
      {/* <CountriesImages /> */}
      {/* NOSOTROS  */}
      <ContainerNosotros />
      {/* CONTACTO  */}
      <ContactForm />
      {/* BOTONES LATERALES  */}
      <BotonesLaterales />
    </main>
  )
}
import "../Logistica/Logistica.css"
import { RegistroLogistica } from "./RegistroLogistica"

export function Logistica() {
    return (
        <>
            <section className="banner-logistica d-flex align-items-center justify-content-center text-center">
                <section className="informacion-logistica p-5 rounded shadow-lg">
                    <h2 className="mb-4 text-uppercase fw-bold">¿Cuál es tu deber como colaborador logístico?</h2>
                    <p className="lead mb-4">
                        Nuestra misión es garantizar la calidad de nuestros productos y servicios hacia el consumidor final. 
                        Como colaborador logístico, tu rol será emplear las mejores materias primas y herramientas, asegurando 
                        la conservación y entrega óptima de cada producto. Únete a nuestro equipo y sé parte de una comunidad 
                        que valora la excelencia y la satisfacción del cliente.
                    </p>
                    <h4 className="text-primary fw-bold">¡Llena el siguiente formulario para registrarte!</h4>
                </section>
            </section>
            <RegistroLogistica />
        </>
    )
}
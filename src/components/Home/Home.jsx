import "./Home.css";
import { RegistroProveedor } from "../RegistroProveedor/RegistroProveedor";

import { use, useEffect, useState } from "react";



export function Home() {
  //creo dos variables de estado para consumir el api 
const{datosProveedores, setDatosProveedor}=([])
const{carga, setCarga}=useState(false)

useEffect(()=>{},[])

  return (
    <>
      <section className="banner text-center d-flex align-items-center justify-content-center">
        <h1 className="display-3 text-white fw-bold shadow-lg">Bienvenido a ProveedorAPP</h1>
      </section>

      <section className="container my-5 text-center">
        <div className="row p-5 align-items-center">
          <div className="col-12 col-md-6">
            <h3 className="fw-bold mb-4">ProveedorAPP</h3>
            <img
              src="../../../src/assets/payaso.jpeg"
              alt="foto"
              className="img-fluid w-50 rounded shadow-lg border border-dark"
            />
          </div>
          <div className="col-12 col-md-6">
            <div className="shadow-lg rounded p-4 bg-light">
              <p className="lead">
                Conectamos la moda con la calidad que mereces. Somos tu mejor aliado para ofrecer prendas exclusivas, diseñadas con materiales premium que garantizan comodidad, estilo y durabilidad.
                Desde ropa casual hasta las últimas tendencias, trabajamos para que cada pieza represente tu personalidad y eleve tu imagen al siguiente nivel.
              </p>
              <ul className="list-unstyled text-start">
                <li>💪 ¡Impulsa tu marca con nosotros!</li>
                <li>🌐 Calidad garantizada, envíos rápidos y atención personalizada.</li>
                <li>🎯 Porque tu estilo merece lo mejor, elige <strong>ProveedorAPP</strong>.</li>
              </ul>
              <p className="fw-bold text-primary">La moda empieza aquí, y tú eres la estrella ⭐🔥</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container my-5 text-center">
        <div className="row">
          <div className="col-12">
            <h3 className="fw-bold">Regístrate como proveedor</h3>
            <hr className="w-50 mx-auto mb-4" />
            <p className="lead">
              Únete a nuestra comunidad y lleva tu marca al siguiente nivel con ProveedorAPP. La moda no espera, ¡empieza hoy!
            </p>
          </div>
          <RegistroProveedor />
        </div>
      </section>
    </>
  );
}
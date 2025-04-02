export function RegistroLogistica(){
    return(
        <>
            <form className="border rounded p-5 shadow-lg bg-light">
                <h3 className="text-center mb-4">Registro Logístico</h3>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Nombre del proveedor" name="nombre" id="nombre" required />
                </div>
                
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Correo del proveedor" name="correo" id="correo" required />
                </div>

                <div className="mb-3">
                    <input type="tel" className="form-control" placeholder="Contacto del proveedor" name="contacto" id="contacto" required pattern="[0-9]{10}" title="Debe contener 10 dígitos" />
                </div>

                <div className="mb-3">
                    <label htmlFor="fecha">Fecha de Registro</label>
                    <input type="date" className="form-control" name="fecha" id="fecha" required />
                </div>
                
                <button className="btn btn-primary w-100">Enviar</button>
            </form>
        </>
    )
}
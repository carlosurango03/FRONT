import { useState } from "react";

export function RegistroProveedor() {
  const [form, setForm] = useState({
    nombre: "",
    documento: "",
    direccion: "",
    ciudad: "",
    representante: "",
    telefono: "",
    correo: "",
    costo: "",
    fecha: "",
    descripcion: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario Enviado ✅", form);
    alert("Tilin, el formulario se ha enviado exitosamente 🔥🔥");
  };

  return (
    <form className="border rounded p-5 shadow-lg bg-light" onSubmit={handleSubmit}>
      <h3 className="text-center fw-bold mb-4 text-primary">Registro Proveedor Tilin 🔥</h3>

      {Object.keys(form).map((campo, index) => (
        <div key={index} className="mb-3">
          <input
            type={campo === "fecha" ? "date" : campo === "costo" ? "number" : "text"}
            name={campo}
            className="form-control"
            placeholder={campo.charAt(0).toUpperCase() + campo.slice(1)}
            onChange={handleChange}
            required
          />
        </div>
      ))}

      <button className="btn btn-primary w-100 mt-3" type="submit">
        Enviar 🚀
      </button>
    </form>
  );
}

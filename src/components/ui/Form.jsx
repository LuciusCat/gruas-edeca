import { useState, useEffect } from "react";
import styles from "./styles/form.module.css";

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Verificar si el mensaje ha sido enviado en la recarga de la página
    if (sessionStorage.getItem("formSubmitted") === "true") {
      alert("El mensaje fue enviado con éxito.");
      sessionStorage.removeItem("formSubmitted"); // Limpiar el estado
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir el envío por defecto

    setIsSubmitting(true); // Cambiar el estado del botón

    // Crear un FormData para enviar los datos del formulario
    const formData = new FormData(event.target);

    // Enviar los datos del formulario usando fetch
    fetch(event.target.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          // Guardar el estado en sessionStorage
          sessionStorage.setItem("formSubmitted", "true");
          // Redirigir a la URL una vez que el formulario haya sido enviado correctamente
          window.location.href = "https://luciuscat.github.io/gruas-edeca/";
        } else {
          // Manejar el error si el formulario no se envía correctamente
          setIsSubmitting(false);
          alert("Ocurrió un error al enviar el formulario.");
        }
      })
      .catch(() => {
        // Manejar cualquier error en el envío
        setIsSubmitting(false);
        alert("Ocurrió un error al enviar el formulario.");
      });
  };

  return (
    <form
      action="https://formsubmit.co/cesar.antonio.g_555@hotmail.com"
      method="POST"
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <fieldset>
        <legend>Déjenos un mensaje</legend>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Ingrese su nombre"
          autoComplete="name"
        />
        <label htmlFor="email">Correo:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="usuario@example.com"
          autoComplete="email"
        />
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Ingrese acá su mensaje"
        ></textarea>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando mensaje..." : "Enviar"}
        </button>
        <input type="hidden" name="_captcha" value="false" />
      </fieldset>
    </form>
  );
}

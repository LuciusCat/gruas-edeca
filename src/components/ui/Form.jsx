import styles from "./styles/form.module.css";

export default function Form() {
  return (
    <form
      action="https://formsubmit.co/cesar.antonio.g_555@hotmail.com"
      method="POST"
      className={styles.form}
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
        <button type="submit">Enviar</button>
        <input
          type="hidden"
          name="_next"
          value="http://localhost:5173/gruas-edeca"
        />
        <input type="hidden" name="_captcha" value="false" />
      </fieldset>
    </form>
  );
}

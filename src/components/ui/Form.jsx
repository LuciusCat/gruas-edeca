import styles from "./styles/form.module.css";

export default function Form() {
  return (
    <form action="#" className={styles.form}>
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
      </fieldset>
    </form>
  );
}

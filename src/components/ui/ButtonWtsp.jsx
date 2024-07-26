import Whatsapp from "../../assets/redes/Whatsapp";
import styles from "./styles/buttonWtsp.module.css";

export default function ButtonWtsp() {
  return (
    <a
      href="https://wa.me/+51933753428/?text=Hola%2C%20quisiera%20saber%20m%C3%A1s%20sobre%20sus%20servicios"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.buttonWtsp}
    >
      <Whatsapp />
      <p>Cotiza con nosotros</p>
    </a>
  );
}

import Whatsapp from "../../assets/redes/Whatsapp";
import styles from "./styles/buttonWtsp.module.css";

export default function ButtonWtsp() {
  return (
    <a href="#" className={styles.buttonWtsp}>
      <Whatsapp />
      <p>Cotiza con nosotros</p>
    </a>
  );
}

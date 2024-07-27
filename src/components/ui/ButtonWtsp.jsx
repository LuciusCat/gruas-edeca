import Whatsapp from "../../assets/redes/Whatsapp";
import styles from "./styles/buttonWtsp.module.css";

export default function ButtonWtsp() {
  return (
    <a
      href="https://wa.me/+51933753428/?text=Hola%2C%20vengo%20de%20la%20web%20y%20quiero%20una%20gr%C3%BAa"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.buttonWtsp}
    >
      <Whatsapp />
      <p>Cotiza con nosotros</p>
    </a>
  );
}

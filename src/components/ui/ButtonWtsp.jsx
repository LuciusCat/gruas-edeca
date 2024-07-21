import Whatsapp from "../../assets/redes/Whatsapp";
import Counter from "../logic/Counter";
import styles from "./styles/buttonWtsp.module.css";

export default function ButtonWtsp() {
  return (
    <a href="#" className={styles.buttonWtsp}>
      <Whatsapp /> Cotiza con nosotros <Counter />
    </a>
  );
}

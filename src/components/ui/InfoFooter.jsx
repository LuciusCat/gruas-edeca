import { grua } from "../../../public/img/edeca";
import styles from "./styles/infoFooter.module.css";

export default function InfoFooter() {
  return (
    <article id="aboutLink" className={styles.infoFooter}>
      <h3>
        Grúas <span>Edeca</span>
      </h3>
      <p>
        Servicio de grúa rápido y seguro en Lima las 24 horas, con atención
        inmediata. Especializado en traslado de autos, camionetas, camiones y
        maquinaria pesada. Contamos con grúas de alta capacidad operadas por
        profesionales capacitados.
      </p>

      <img src={grua} alt="Grúa blanco y negro" />
    </article>
  );
}

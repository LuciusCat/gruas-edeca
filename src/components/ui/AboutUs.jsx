import FastClock from "../../assets/icons/FastClock";
import styles from "./styles/aboutUs.module.css";

export default function AboutUs() {
  return (
    <>
      <article className={styles.aboutUs} id="aboutUsLink">
        <h2>
          GRÚAS <span>EDECA</span>
        </h2>
        <h3>
          <FastClock /> <span>24 horas</span> al día los <span>7 días</span> de
          la semana
        </h3>
        <p>
          Ofrecemos un servicio <span>profesional, seguro y confiable</span>{" "}
          respaldado por nuestros clientes. Contamos con grúas para todo tipo de
          rescate y traslado de vehículos livianos y pesados, un equipo
          capacitado y control GPS de rutas para garantizar calidad en nuestro
          servicio.
        </p>
      </article>
    </>
  );
}

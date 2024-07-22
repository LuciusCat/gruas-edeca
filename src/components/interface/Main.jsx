import AboutUs from "../ui/AboutUs";
import CardServices from "../ui/CardServices";
import styles from "./styles/main.module.css";
import {
  maquinaria,
  vehiculosLivianos,
  vehiculosPesados,
  alquiler,
} from "../../../public/img/servicios/index";

export default function Main() {
  return (
    <main className={styles.main}>
      <section>
        <AboutUs />
      </section>
      <section className={styles.section__services}>
        <CardServices
          service="Grúa y auxilio víal"
          src={vehiculosLivianos}
          alt="Grúa cargando vehículo liviano"
        />

        <CardServices
          service="Traslado de vehículos pesados"
          src={vehiculosPesados}
          alt="Grúa cargando vehículo camión"
        />

        <CardServices
          service="Transporte de maquinaria"
          src={maquinaria}
          alt="Grúa cargando maquinaria"
        />

        <CardServices
          service="Alquiler de grúas"
          src={alquiler}
          alt="Grúa disponible para alquiler"
        />
      </section>
    </main>
  );
}

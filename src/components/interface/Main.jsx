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
      <section className={styles.services}>
        <h2>Nuestros servicios</h2>
        <section className={styles.services__card}>
          <CardServices
            service="Auxilio mecánico"
            src={vehiculosLivianos}
            alt="Grúa cargando vehículo liviano"
            text="Nuestro personal está capacitado para atender problemas como batería descargada, apertura de puertas y cambio de llantas las 24 horas del día en toda Lima."
          />

          <CardServices
            service="Traslado de vehículos"
            src={vehiculosPesados}
            alt="Grúa cargando vehículo camión"
            text="Amplia experiencia en traslado, rescates, volcaduras y salvamento de vehículos livianos y pesados. Atención en Lima y provincias del Perú."
          />

          <CardServices
            service="Traslado de maquinaria"
            src={maquinaria}
            alt="Grúa cargando maquinaria"
            text="Especialistas en el transporte y rescate de maquinaria pesada, asegurando un servicio seguro y eficiente. Cobertura en Lima y provincias del Perú. "
          />

          <CardServices
            service="Alquiler de grúas"
            src={alquiler}
            alt="Grúa disponible para alquiler"
            text="Contamos con una flota de grúas de diferentes capacidades para el alquiler en Lima y provincias del Perú. Atendemos las 24 horas del día."
          />
        </section>
      </section>
    </main>
  );
}

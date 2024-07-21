import Nav from "../ui/Nav";
import { navHeaderData } from "../data/navData";
import { edecaLogo } from "../../../public/img/edeca/index";
import Carousel from "../ui/Carousel";
import styleHead from "./styles/header.module.css";
import styles from "../ui/styles/nav.module.css";
import ButtonWtsp from "../ui/ButtonWtsp";

export default function Header() {
  return (
    <header className={styleHead.header}>
      <Nav
        links={navHeaderData}
        className={styles.navHeader}
        src={edecaLogo}
        alt="Logo Grúas Edeca"
      />
      <section className={styleHead.sectionHead}>
        <aside>
          <article className={styleHead.sectionHead__title}>
            <h1>
              GRÚAS <span>EDECA</span>
            </h1>
            <h3>SERVICIO DE GRÚA Y TRANSPORTE</h3>
          </article>

          <article className={styleHead.sectionHead__adverstiment}>
            <h2>
              ¿Necesitas una <span>GRÚA</span>?
            </h2>
            <h1>
              ¡Te contestamos en <span>menos de un minuto</span>!
            </h1>
          </article>
          <ButtonWtsp />
        </aside>
        <Carousel />
      </section>
    </header>
  );
}

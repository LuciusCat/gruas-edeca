import Nav from "../ui/Nav";
import { navHeaderData } from "../../data/navData";
import { edecaLogo } from "../../../public/img/edeca/index";
import Carousel from "../ui/Carousel";
import styleHead from "./styles/header.module.css";
import styles from "../ui/styles/nav.module.css";
import ButtonWtsp from "../ui/ButtonWtsp";
import Counter from "../logic/Counter";
import DropDownNav from "../ui/DropDownNav";

export default function Header() {
  return (
    <header className={styleHead.header}>
      <Nav
        links={navHeaderData}
        className={styles.navHeader}
        src={edecaLogo}
        alt="Logo Grúas Edeca"
      />
      <a
        href="https://wa.me/+51933753428/?text=Hola%2C%20quisiera%20saber%20m%C3%A1s%20sobre%20sus%20servicios"
        target="_blank"
        rel="noopener noreferrer"
        className={styleHead.wtsp}
        title="Botón que redirecciona a Whatsapp"
      />
      <DropDownNav items={navHeaderData} />
      <section className={styleHead.sectionHead}>
        <aside>
          <article className={styleHead.sectionHead__title}>
            <h1 id="homeLink">
              GRÚAS <span>EDECA</span>
            </h1>
            <h3>SERVICIO DE GRÚA Y TRANSPORTE</h3>
          </article>

          <article className={styleHead.sectionHead__adverstiment}>
            <div>
              <h2>
                ¿Necesitas una <span>GRÚA</span>?
              </h2>
              <h1>
                ¡Te contestamos en <span>menos de un minuto</span> <Counter />!
              </h1>
            </div>

            <ButtonWtsp />
          </article>
        </aside>
        <Carousel />
      </section>
    </header>
  );
}

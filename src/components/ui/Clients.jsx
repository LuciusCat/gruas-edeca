import "./styles/clients.css";
import { clients } from "../../../public/img/empresas/index";

export default function Clients() {
  return (
    <>
      <h2 id="clientsLink" className="clients__title">
        Clientes que confían en nosotros
      </h2>
      <section className="clients__container">
        {clients.map(({ src, alt, id }, index) => (
          <figure className="clients__item" id={id} key={index}>
            <img src={src} alt={alt} />
          </figure>
        ))}
      </section>
    </>
  );
}

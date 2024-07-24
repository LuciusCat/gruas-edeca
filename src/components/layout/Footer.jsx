import { servicesFooterData } from "../../data/footerData";
import ContactFooter from "../ui/ContactFooter";
import InfoFooter from "../ui/InfoFooter";
import ServicesFooter from "../ui/ServicesFooter";
import styles from "./styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <InfoFooter />
      <ServicesFooter services={servicesFooterData} />
      <ContactFooter />
    </footer>
  );
}

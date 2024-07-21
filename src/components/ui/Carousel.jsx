import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./styles/carousel.css";
import { images } from "../../../public/img/gruas/index";

export default function Carousel() {
  return (
    <section className="carousel">
      <ImageGallery items={images} autoPlay={true} />
    </section>
  );
}

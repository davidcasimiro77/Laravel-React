import React from "react";
import { MenuAdmin } from "./menus/Menus";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires
import { Carousel } from "react-responsive-carousel";
import imagen1 from "./imagen1.jpg";
import imagen2 from "./imagen2.jpg";
import imagen3 from "./imagen3.jpg";

const Inicio = () => {
  return (
    <>
      <MenuAdmin />
      <div className="inicio">
        <Carousel>
          <div>
            <img src={imagen1} alt="logo" className="carrusel" />
          </div>
          <div>
            <img src={imagen2} alt="logo" className="carrusel" />
          </div>
          <div>
            <img src={imagen3} alt="logo" className="carrusel" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Inicio;

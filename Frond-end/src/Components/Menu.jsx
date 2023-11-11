import menuCerrar from "./../assets/Logos/Menu-cerrar.png";
import React, { useState, useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

function Menu({ changeState }) {
  const [textoCambiante, setTextoCambiante] = useState("");
  return (
    <div className="menu">
      <Navbar
        changeState={changeState}
        newState="Pagina"
        logoMenu={menuCerrar}
      ></Navbar>
      <ul className="menu__ul">
        <li
          onMouseEnter={() => setTextoCambiante("Inicio")}
          onMouseLeave={() => setTextoCambiante("")}
        >
          <Link to="/" onClick={() => changeState('Pagina')}>Inicio</Link>
        </li>
        <li
          onMouseEnter={() => setTextoCambiante("Sobre mí")}
          onMouseLeave={() => setTextoCambiante("")}
        >
          <Link to="/sobre-mi" onClick={() => changeState('Pagina')}>Sobre mí</Link>
        </li>
        <li
          onMouseEnter={() => setTextoCambiante("Portafolio")}
          onMouseLeave={() => setTextoCambiante("")}
        >
          <Link to="/portafolio" onClick={() => changeState('Pagina')}>Portafolio</Link>
        </li>
        <li
          onMouseEnter={() => setTextoCambiante("Contacto")}
          onMouseLeave={() => setTextoCambiante("")}
        >
          <Link to="/contacto" onClick={() => changeState('Pagina')}>Contacto</Link>
        </li>
      </ul>
      <SwitchTransition>
        <CSSTransition
          key={textoCambiante}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
          classNames="fade">
            <h2 className="textoCambiante" >{textoCambiante}</h2>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
export default Menu;

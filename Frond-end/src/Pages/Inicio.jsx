import React, { useRef, useEffect } from "react";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import FotoPerfil from "../assets/Foto de perfil-2.jpg";
import Typed from "typed.js";

function Inicio() {
  const span = useRef(null);
  useEffect(() => {
    const typed = new Typed(span.current, {
      strings: [
        "<b style='color: #fca311; font-weight: 300;'>Desarrollador web.</b>",
        "<b style='color: #fca311; font-weight: 300;'>Front-end.</b>",
        "<b style='color: #fca311; font-weight: 300;'>Back-end.</b>",
        "<b style='color: #fca311; font-weight: 300;'>Full Stack Developer.</b>",
      ],
      startDelay: 300,
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 80,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="Inicio">
      <div className="container__info">
        <picture className="container__info__img">
          <img src={FotoPerfil}></img>
        </picture>
        <div className="container__info__name">
          <h1 className="container__info__name-h1">
            <b>Camilo</b> López
          </h1>
          <h2 className="container__info__name-h2">
            Yo soy <span ref={span}></span>
          </h2>
        </div>
        <div className="container__info__redes">
          <a href="https://www.instagram.com/camilo__lp15/" target="__BLANK">
            <BsInstagram className="container__info__redes-elemento" />
          </a>
          <a href="https://twitter.com/Camilo__lp" target="__BLANK">
            <BsTwitter className="container__info__redes-elemento" />
          </a>
          <a
            href="https://www.linkedin.com/in/camilo-l%C3%B3pez-901099283/"
            target="__BLANK"
          >
            <BsLinkedin className="container__info__redes-elemento" />
          </a>
          <a href="https://github.com/CamiloLopez15" target="__BLANK">
            <BsGithub className="container__info__redes-elemento" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Inicio;

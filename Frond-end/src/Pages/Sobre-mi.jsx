import React from "react";
import FotoPerfil from "../assets/Foto de perfil-1.jpg";
import Footer from "../Components/Footer";
import hojaDeVida from "../assets/Hoja_de_vida_Camilo_Lopez.pdf";

function SobreMi() {
  return (
    <>
      <div className="SobreMi">
        <h1 className="SobreMi-h1">
          Sobre <b>mí</b>
        </h1>
        <div className="SobreMi-h1__descripcionContenedor">
          <div className="descripcionContenedor__descripcion">
            <h2>
              Soy un <b>desarrollador web Full Stack</b> que actualmente vive en
              Barranquilla, Colombia
            </h2>
            <p>
              Soy un joven que comenzó a programar desde los 14 años, desperté
              un gran interés por el desarrollo de páginas web, por ende, me he
              dedicado a mejorar y aprender nuevas habilidades al rededor de
              este tema, mediante la creación de proyectos y distintos cursos de
              programación.
            </p>
            <a
              href={hojaDeVida}
              target="__BLANCK"
              download="Hoja de vida Camilo López"
            >
              Descargar hoja de vida
            </a>
          </div>
          <img src={FotoPerfil} />
        </div>
        <div className="SobreMi__historia" id="Sobre-mi">
          <h2 className="timelineH2">
            Mi <b>historia</b>
          </h2>
          <div className="timeline">
            <ul>
              <li>
                <div className="content">
                  <h3>¿Como empezó todo?</h3>
                  <p>
                    Soy un joven que se interesó en el mundo de la programación
                    desde los catorce años, a medida que transcurrió el tiempo
                    he ido <b>creando y realizando proyectos</b> que han
                    mejorado mis habilidades como programador, luego de eso
                    decidí hacer cursos muchos más extensos y especializados
                    sobre el Frond-end de las páginas webs, donde aprendí mucho
                    más sobre
                    <b>HTML, CSS, JavaScript</b>, en la actualidad gracias a
                    esto, he hecho cursos de <b>más de 600 horas</b> de
                    contenido sin contar ejercicios, proyectos, etc.
                  </p>
                </div>
                <div className="time">
                  <h4>Información sobre mí</h4>
                </div>
              </li>
              <li>
                <div className="content">
                  <h3>Las tecnologías que manejo.</h3>
                  <p>
                    Cuento con habilidades y conocimiento en los siguientes
                    lenguajes y tecnologías de <b>Frond-end:</b> HTML 5, CSS 3,
                    ES6 o JavaScript, Bootstrap, React, jQuery, Redux, Sass.
                  </p>
                </div>
                <div className="time">
                  <h4>Tecnologías</h4>
                </div>
              </li>

              <li>
                <div className="content">
                  <h3>Mis certificaciones</h3>
                  <p>
                    En la actualidad cuento con las siguientes certificaciones,
                    pero aún sigo haciendo cursos para mejorar mi talento como
                    programador y{" "}
                    <b>estar actualizado en todas las tecnologías.</b>
                    <br />
                    <a
                      href="https://www.freecodecamp.org/certification/Camilo__Lopez/javascript-algorithms-and-data-structures"
                      title="JavaScript"
                      target="_blank"
                    >
                      Certificación de JavaScript.
                    </a>
                    <br />
                    <a
                      href="https://www.freecodecamp.org/espanol/certification/Camilo__Lopez/front-end-development-libraries"
                      title="Librerias de desarrollo"
                      target="_blank"
                    >
                      Certificación de librerías de desarrollo.
                    </a>
                  </p>
                </div>
                <div className="time last-time">
                  <h4>Certificados o diplomas</h4>
                </div>
              </li>
              <div style={{ clear: "both" }}></div>
            </ul>
          </div>
        </div>
        <div className="SobreMi__habilidades">
          <h2 className="SobreMi__habilidades-h2">
            Mis <b>habilidades</b>
          </h2>

          <div className="SobreMi__habilidades__container">
            <div className="SobreMi__habilidades__container__item">
              <h4>HTML</h4>
              <div>
                <div className="HTML">90%</div>
              </div>
            </div>
            <div className="SobreMi__habilidades__container__item">
              <h4>CSS</h4>
              <div>
                <div className="CSS">90%</div>
              </div>
            </div>
            <div className="SobreMi__habilidades__container__item">
              <h4>JavaScript</h4>
              <div>
                <div className="JavaScript">88%</div>
              </div>
            </div>
            <div className="SobreMi__habilidades__container__item">
              <h4>React</h4>
              <div>
                <div className="React">85%</div>
              </div>
            </div>
            <div className="SobreMi__habilidades__container__item">
              <h4>J Query</h4>
              <div>
                <div className="J-Query">80%</div>
              </div>
            </div>
            <div className="SobreMi__habilidades__container__item">
              <h4>Canvas</h4>
              <div>
                <div className="Canvas">95%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SobreMi;

import React from "react";
import FotoPerfil from "../assets/Fotos de Perfil/Foto de perfil-1.jpg";
import Footer from "../Components/Footer";

//Assets
import hojaDeVida from "../assets/Hoja_de_vida_Camilo_Lopez_2024_1.pdf.pdf";
import Certificado from "../Components/Certificado";
import CertificadoJavaScript from "../assets/Certificados/Certificado-freecodecamp-JavaScript.png";
import CertificadoReact from "../assets/Certificados/Certificado-freecodecamp-React.png";
import CertificadoJavaScriptPlatzi from "../assets/Certificados/Certificado-platzi-JavaScript.png";
import CertificadoFundamentosProgramacionGoogle from "../assets/Certificados/Certificado-fundamentos-programacion-google.png";
import CertificadoAnimacionesGoogle from "../assets/Certificados/Certificado-animaciones-google.png";
import CertificadoMetodosArreglosGoogle from "../assets/Certificados/Certificado-metodos-arreglos-google.png";
import CertificadoIntroduccionEntrevistaGoogle from "../assets/Certificados/Certificado-introduccion-entrevista-google.png";

import CertificadoFundamentosProgramacionIIGoogle from "../assets/Certificados/Certificado-fundamentos-programacion-II-google.png";

import CertificadoAnimacionesIIGoogle from "../assets/Certificados/Certificado-animaciones-II-google.png";

import CertificadoCodigoDepuracionGoogle from "../assets/Certificados/Certificado-codigo-depuracion-google.png";

function SobreMi() {
  return (
    <>
      <main className="SobreMi">
        <h1 className="SobreMi-h1">
          Sobre <b>mí</b>
        </h1>
        <section className="SobreMi-h1__descripcionContenedor">
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
        </section>
        <section className="SobreMi__historia" id="Sobre-mi">
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
        </section>
        <section className="SobreMi__habilidades">
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
        </section>

        <section className="sobreMi__certificados">
          <h2 className="SobreMi__certificados-h2">
            Mis <b>certificados</b>
          </h2>
          <article className="SobreMi__certificados__container">
            <Certificado
              img={CertificadoJavaScript}
              text={
                <>
                  Certificado de JavaScript de <b>FreeCodeCamp</b>
                </>
              }
            />
            <Certificado
              img={CertificadoReact}
              text={
                <>
                  Certificado de React de <b>FreeCodeCamp</b>
                </>
              }
            />
            <Certificado
              img={CertificadoJavaScriptPlatzi}
              text={
                <>
                  Certificado de JavaScript de <b>Platzi</b>
                </>
              }
            />
            <Certificado
              img={CertificadoFundamentosProgramacionGoogle}
              text={
                <>
                  Certificado de Fundamentos de Programación de <b>Google</b>
                </>
              }
            />

            <Certificado
              img={CertificadoAnimacionesGoogle}
              text={
                <>
                  Certificado de Animaciones de <b>Google</b>
                </>
              }
            />

            <Certificado
              img={CertificadoMetodosArreglosGoogle}
              text={
                <>
                  Certificado de Métodos de Arreglos de <b>Google</b>
                </>
              }
            />
            <Certificado
              img={CertificadoIntroduccionEntrevistaGoogle}
              text={
                <>
                  Certificado de Introducción a Entrevistas de <b>Google</b>
                </>
              }
            />
            <Certificado
              img={CertificadoFundamentosProgramacionIIGoogle}
              text={
                <>
                  Certificado de Fundamentos de Programación II de <b>Google</b>
                </>
              }
            />
            <Certificado
              img={CertificadoAnimacionesIIGoogle}
              text={
                <>
                  Certificado de Animaciones II de <b>Google</b>
                </>
              }
            />
            <Certificado
              img={CertificadoCodigoDepuracionGoogle}
              text={
                <>
                  Certificado de Código de Depuración de <b>Google</b>
                </>
              }
            />
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SobreMi;

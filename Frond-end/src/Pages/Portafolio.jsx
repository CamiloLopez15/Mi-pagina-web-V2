import React from 'react'
import Footer from "./../Components/Footer";
import Cajero_Img from './../assets/Imagenes proyectos/Banco.png'
import ChatRealTime_Img from './../assets/Imagenes proyectos/Chat en tiempo real.png'
import NotasEstudiantes_Img from './../assets/Imagenes proyectos/Notas de estudiante.png'
import Juez_Img from './../assets/Imagenes proyectos/Juez.png';


function Portafolio() {
  return (
    <>
      <div className='portafolioContenedor'>
        <div className='portafolioContenedor__titulo'>
          <h1><b>Mi</b> portafolio</h1>
          <h2>Mis proyectos más importantes</h2>
        </div>
        <div className='portafolioContenedor__proyectos'>
          <div className='portafolioContenedor__proyectos__proyecto portafolioContenedor__proyectos__proyecto-ChatRealTime'>
            <img className='portafolioContenedor__proyectos__proyecto-img' src={ChatRealTime_Img}/>
            <div className='portafolioContenedor__proyectos__proyecto__texto'>
              <h3>Chat real time.</h3>
              <p>Es mi proyecto favorito, ya que llevó mucho trabajo diseñar un chat a tiempo real sin uso de Back-end, básicamente si abres la misma página en dos ventanas pueden enviarse mensajes entre ellas.</p>
              <a href='./../../../public/Proyectos/Chat real time/index.html' target='__BLANK'>Ver más</a>
            </div>
          </div>
          <div className='portafolioContenedor__proyectos__proyecto'>
            <img className='portafolioContenedor__proyectos__proyecto-img'src={Cajero_Img}/>
            <div className='portafolioContenedor__proyectos__proyecto__texto portafolioContenedor__proyectos__proyecto__texto-Cajero'>
              <h3>Cajero</h3>
              <p>Acá realizo un algoritmo que simula al de un cajero en el cual nos devuelve la cantidad estipulada en pesos colombianos y tiene un límite de dinero.</p>
              <a href='./../../../public/Proyectos/Cajero/cajero.html' target='__BLANK'>Ver más</a>
            </div>
          </div>

          <div className='portafolioContenedor__proyectos__proyecto'>
            <img className='portafolioContenedor__proyectos__proyecto-img' src={Juez_Img}/>
            <div className='portafolioContenedor__proyectos__proyecto__texto'>
              <h3>Juez.</h3>
              <p>Es un algoritmo básico que toma una serie de parámetros para entregarte la posibilidad de que alguien haya cometido un delito.</p>
              <a href='./../../../public/Proyectos/Juez/juez.html' target='__BLANK'>Ver más</a>
            </div>
          </div>
          <div className='portafolioContenedor__proyectos__proyecto portafolioContenedor__proyectos__proyecto-NotaEstudiantes'>
            <img className='portafolioContenedor__proyectos__proyecto-img' src={NotasEstudiantes_Img}/>
            <div className='portafolioContenedor__proyectos__proyecto__texto'>
              <h3>Notas de estudiantes.</h3>
              <p>Es un algoritmo para obtener datos con la librería de Axios, llamo a un archivo y de este obtengo la información de los estudiantes aprobados y reprobados.</p>
              <a href='./../../../public/Proyectos/Notas de estudiantes/index.html' target='__BLANK'>Ver más</a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Portafolio
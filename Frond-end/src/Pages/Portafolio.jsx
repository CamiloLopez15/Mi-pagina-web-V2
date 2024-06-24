import React from 'react'
import Footer from "./../Components/Footer";
// import Cajero_Img from './../assets/Imagenes proyectos/Banco.png';
// import ChatRealTime_Img from './../assets/Imagenes proyectos/Chat en tiempo real.png';
// import MiPrimeraWeb from './../assets/Imagenes proyectos/Mi-primera-web.png';
import Task_Application from './../assets/Imagenes proyectos/Task-application.png';
import DashBoard from './../assets/Imagenes proyectos/Dashboard.png';
// import Pokemon from './../assets/Imagenes proyectos/Pokemon.png';
import Easyeats from './../assets/Imagenes proyectos/Easyeats.png';
import Nutritious_snack from './../assets/Imagenes proyectos/Nutritious-snack.png';
import drJhonn from './../assets/Imagenes proyectos/drJhonn.png';
import Proyecto from '../Components/Proyecto';



function Portafolio() {
  return (
    <section>
      <div className='portafolioContenedor'>
        <header className='portafolioContenedor__titulo'>
          <h1><b>Mi</b> portafolio</h1>
          <h2>Mis proyectos más importantes</h2>
        </header>
        <div className='portafolioContenedor__proyectos'>
        <Proyecto href="https://jhonn-barriosnuevo.vercel.app/" img={drJhonn} titulo="Dr Jhonn Barriosnuevo" descripcion="Se desarrolló una landing page para el doctor Jhonn Barriosnuevo. Esta página incluye una biografía detallada del doctor, una lista de sus servicios médicos, y una sección de ubicación y contacto con un mapa interactivo. El diseño es moderno y profesional, responsivo para dispositivos móviles y de escritorio, y optimizado para rendimiento y SEO."/>
        <Proyecto href="https://camilolopez15.github.io/Nutritious-snack/" img={Nutritious_snack} titulo="Nutritious Snack" descripcion="Esta página web la realicé como participación a un emprendimiento que tienen estudiantes del colegio en el que estudié, esta página web se basa en darles a los padres de familia menús de meriendas para sus hijos los siete días de la semana."/>
        <Proyecto href="https://camilolopez15.github.io/Easyeats/" img={Easyeats} titulo="EasyEats" descripcion="Actualmente, estoy desarrollando este proyecto, este se basa en una página web que genera recetas para las personas con inteligencia artificial, este seguirá unos parámetros para entregar estas recetas."/>
        <Proyecto href="https://camilolopez15.github.io/Dashboard-v1-practica/" img={DashBoard} titulo="Diseño de un Dashboard" descripcion="Este proyecto lo realicé para aprender una nueva tecnología de programación la cual es Tailwindcss, esta se centra en el diseño de la aplicación y por este proyecto es solo diseño."/>
        {/* <Proyecto href="https://camilolopez15.github.io/Pokemon/" img={Pokemon} titulo="App de Pokémon" descripcion="Desarrolle este proyecto para poner en práctica mis conocimientos de la obtención de datos de base de datos o de otros lugares, luego estos datos graficarlos en la web."/> */}
        <Proyecto href="https://camilolopez15.github.io/Task-application/" img={Task_Application} titulo="Aplicación de tareas" descripcion="Esta es una aplicación en la cual puedes gestionar tus tareas diarias, te permite crear una cuenta y en ella almacenar todas tus tareas. Este proyecto lo realicé para un técnico en aplicaciones informáticas que hice."/>
        {/* <Proyecto href="https://camilolopez15.github.io/Mi-pagina-web-V1/" img={MiPrimeraWeb} titulo="Mi primer portafolio" descripcion="Este fue uno de mis primeros proyecto en el año 2022, en este decidí crear mi primer portafolio web el cual pasó por muchos cambios y modificaciones hasta llegar a un diseño que me gustara."/> */}
        {/* <Proyecto href="https://camilolopez15.github.io/Chat-real-time/" img={ChatRealTime_Img} titulo="Chat real time" descripcion="Es mi proyecto favorito, ya que llevó mucho trabajo diseñar un chat a tiempo real sin uso de Back-end, básicamente si abres la misma página en dos ventanas pueden enviarse mensajes entre ellas."/> */}
        {/* <Proyecto href='https://camilolopez15.github.io/Cajero/' img={Cajero_Img} titulo="Cajero" descripcion="Acá realizo un algoritmo que simula al de un cajero en el cual nos devuelve la cantidad estipulada en pesos colombianos y tiene un límite de dinero."/> */}

{/*
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
          </div> */}


        </div>
      </div>
      <Footer/>
    </section>
  )
}

export default Portafolio
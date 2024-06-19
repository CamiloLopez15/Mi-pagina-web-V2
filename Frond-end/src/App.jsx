import menuAbrir from "./assets/Logos/Menu-abrir.png";
import Inicio from "./Pages/Inicio";
import SobreMi from "./Pages/Sobre-mi";
import Portafolio from "./Pages/Portafolio";
import Contacto from "./Pages/Contacto";
import Navbar from "./Components/navbar";
import Menu from "./Components/Menu";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [state, setState] = useState("Pagina");

  function changeState(newState) {
    setState(newState);
  }

  if (state == "Pagina") {
    return (
      <>
        <Navbar
          changeState={changeState}
          newState="Menu"
          logoMenu={menuAbrir}
        ></Navbar>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route
            path="/sobre-mi"
            element={<SobreMi />}
          />
          <Route
            path="/portafolio"
            element={<Portafolio />}
          />
          <Route
            path="/contacto"
            element={<Contacto />}
          />
          <Route
            path="/*"
            element={<Inicio />}
          />
        </Routes>
      </>
    );
  } else {
    return <Menu changeState={changeState} />;
  }
}

export default App;

import React, { useState, useEffect } from "react";
import Footer from "./../Components/Footer";
import { MdMap, MdContactMail, MdContactPhone, MdContacts } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Contacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('')
  const [msg, setMsg] = useState('')
  const navigate = useNavigate();

  const URL = 'http://localhost:8000/contacto'

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(URL, {
      "nombre": nombre,
      "email": email,
      "asunto": asunto,
      "msg": msg
    })
    setNombre('');
    setEmail('');
    setAsunto('');
    setMsg('');
    navigate('/contacto')
    alert('Mensaje enviado')
  }

  useEffect(()=> {
    alert('Por ahora este contacto no funciona, ya que, el hosting no permite el uso de Backend');
  }, [])

  return (
    <>
      <div className="Contacto">
      <h1>
        Contacta<b>me</b>
      </h1>
      <div className="Contacto__container">
        <form className="Contacto__container__form" onSubmit={handleSubmit}>
          <h2>Enviame un mensaje</h2>
          <div className="Contacto__container__form__divContainer">
            <div className="Contacto__container__form__divContainer-encabezadoContainer">
              <input className="Contacto__container__form__divContainer-nombre" type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required/>
              <input className="Contacto__container__form__divContainer-email" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
            </div>
            <input className="Contacto__container__form__divContainer-asunto" type="text" placeholder="Asunto" value={asunto} onChange={e => setAsunto(e.target.value)} required/> <br/>
            <textarea className="Contacto__container__form__divContainer-textArea" placeholder="Mensaje que me quieras comunicar" value={msg} onChange={e => setMsg(e.target.value)} required></textarea>
            <button type="submit" className="Contacto__container__form__divContainer-btn">Enviar</button>
          </div>
        </form>
        <div className="Contacto__container__info">
          <h2>Información sobre mí</h2>
          <div className="Contacto__container__info__infoContainer">
            <div className="Contacto__container__info__infoContainer-elemento">
              <MdContacts className="Contacto__container__info__infoContainer-elemento-icon"/>
              <div>
                Nombre:
                Camilo López
              </div>
            </div>
            <div className="Contacto__container__info__infoContainer-elemento">
              <MdMap className="Contacto__container__info__infoContainer-elemento-icon"/>
              <div>
                Ubicación:
                Barranquilla, Colombia
              </div>
            </div>
            <div className="Contacto__container__info__infoContainer-elemento">
              <MdContactPhone className="Contacto__container__info__infoContainer-elemento-icon"/>
              <div>
                Número:
                +57 316 4646908
              </div>
            </div>
            <div className="Contacto__container__info__infoContainer-elemento">
              <MdContactMail className="Contacto__container__info__infoContainer-elemento-icon"/>
              <div>
                Email:
                camilolopez1506@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contacto;

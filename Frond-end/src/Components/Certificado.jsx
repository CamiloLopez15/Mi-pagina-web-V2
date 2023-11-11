function Certificado({ img, text }) {
  return (
    <section
      className="SobreMi__certificados-certificado"
    >
      <figure>
        <img src={img} alt={text} />
      </figure>
        <h3 className="SobreMi__certificados-certificado-p">{text}</h3>
    </section>
  );
}

export default Certificado;
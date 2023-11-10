import React from 'react'

function Certificado({img, alt, text}) {
  return (
    <section className='SobreMi__certificados-certificado'>
      <figure>
        <img src={img} alt={alt} />
      </figure>
      <p>
        {text}
      </p>
    </section>
  )
}

export default Certificado
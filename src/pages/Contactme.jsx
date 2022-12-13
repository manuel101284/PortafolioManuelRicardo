import React from 'react'

const Contactme = () => {
  return (
    <section className="container container-04">
        <input type="text" placeholder="name"></input>
        <input type="email" placeholder="email"></input>
        <input type="text" placeholder="subject"></input>
        <input type="text" placeholder="message"></input>
        <div className="btn btn-SEND"><span>SEND</span></div>
    </section>
  )
}

export default Contactme

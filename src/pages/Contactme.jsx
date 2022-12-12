import React from 'react'

const Contactme = () => {
  return (
    <section className="container">
        <input type="text" placeholder="name"></input>
        <input type="email" placeholder="email"></input>
        <input type="text" placeholder="subject"></input>
        <input type="text" placeholder="message"></input>
        <div class="btn"><span>SEND</span></div>
    </section>
  )
}

export default Contactme

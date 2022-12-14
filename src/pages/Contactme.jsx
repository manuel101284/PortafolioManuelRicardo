import React, {useState} from 'react'


const Contactme = () => {
  const [inputText, setInputText] = useState('');
  
  const captureName = (e) => {
    const personName = e.target.value
    setInputText(personName);
    console.log(personName);
  }


  return (
    <section className="container" id="container-04">
        <input id="textName" type="text" placeholder="name" onChange={ captureName }></input>
        <input id="textEmail" type="email" placeholder="email"></input>
        <input id="textSubject" type="text" placeholder="subject"></input>
        <textarea id="textMessage" type="text" placeholder="message" rows={5} cols={20}></textarea>
        <button id="btnSend" class="bg-green-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-blue-500 rounded">SEND</button>
    </section>
  )
}

export default Contactme

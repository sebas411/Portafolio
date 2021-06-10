import React from 'react'
import ReactDOM from 'react-dom'
import lab3 from './imgs/lab3.png'
import lab4 from './imgs/lab4.png'
import lab5 from './imgs/lab5.png'
import lab7 from './imgs/lab7.png'
import proy1 from './imgs/proy1.png'
import './index.css'

const labs = [
  [lab3, 'HTML only', 'Pagina realizada solamente con HTML, consiste de un juego con multiples opciones en las que se maneja por distintas páginas'],
  [lab4, 'CSS only', 'Dibujo realizado solamente utilizando componentes básicos de HTML y dibujando con CSS'],
  [lab5, 'JS only', 'Un chat online que se conecta con el servidor y utiliza solamente javascript'],
  [lab7, 'Calculadora', 'Calculadora realizada en React con varios tests de funcionalidad'],
  [proy1, 'Copia de Wolfram', 'Una pagina web diseñada con react con el propósito de imitar la página web de Wolfram Alpha'],
].map((lista) => (
  <div>
    <div><img src={lista[0]} alt="" /></div>
    <div className="descrip">
      <h2>{lista[1]}</h2>
      <p>{lista[2]}</p>
    </div>
  </div>
))

const App = () => (
  <div id="react">
    <div className="perfil"><h1 className="nombre">Sebastián Maldonado</h1></div>
    <div className="labs">
      <h1 className="xp">Experiencia en tecnologías web</h1>
      {labs}
    </div>
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './components/Boton'

function App() {

  return (
    <>
    <Boton className="estiloBoton"
      titulo={"Boton 1"}
      accion={() => {
        alert("Haz hecho clicl en el boton 1")
      }}
    />
      <Boton className="estiloBoton"
      titulo={"Boton 2"}
      accion={() => {
        alert("Haz hecho clicl en el boton 2")
      }}
    />
    <Contar />
    </>
  )
}

function Contar(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Haz clickeado {count} veces
    </button>
  )
}

export default App

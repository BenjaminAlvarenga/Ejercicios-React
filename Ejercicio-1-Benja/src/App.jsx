import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Boton from '../components/Boton'
import Popover from '../components/Popover'

function App() {

  return (
    <>
      <Boton className="estiloBoton"
      titulo={"Boton 1"}
      accion={() => {
        alert("Haz hecho clicl en el boton 1")
      }}/>
      
      <br />
      <Popover data-bs-toggle="popover"
      data-bs-placement="top"
      data-bs-content="Top popover"
      titulo={"hOLA ChaVal"}
      />
    </>
  )
}

export default App

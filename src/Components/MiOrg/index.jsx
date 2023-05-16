import React from 'react'
import { useState } from 'react'
import './MiOrg.css'
import Org from '../Img/add.png'

function MiOrg(props) {
    //const [nombre de la variable, funcion que actualiza] = useState(valor incial) 
  /* const [mostrar, actualizarMostrar] = useState(true);
  

  const manejarClick = () => {

    actualizarMostrar(!mostrar);

  } */
  return (
    <section className='orgSection'>
        <h3 className='tittle'>Mi Organizacion</h3>
        <img src={Org} alt='add' onClick={props.cambiarMostrar}/>
    </section>
  )
}

export default MiOrg
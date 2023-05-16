import { useState } from 'react'
import React from 'react'
import './Campo.css'

function Campo(props) {
  const placeholderModificador = `${props.placeholder}...`
  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  }

  //Destructuracion
  const { type = 'text' } = props

  return (
    <div className={`campo campo-${type}`}>
      <label>{props.titulo.toUpperCase()}</label>
      <input 
      placeholder= {placeholderModificador} 
      required = {props.required} 
      value={props.valor}
      onChange = {manejarCambio}
      type={type}
      />
    </div>
  )
    
}

export default Campo
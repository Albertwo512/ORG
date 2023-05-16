import { useState } from 'react'
import React from 'react'
import './Formulario.css'
import Campo from '../Campo/CampoTexto'
import ListaOpciones from '../ListaOpciones/ListaOpciones'
import Boton from '../Boton/Boton'
import Colaborador from '../Colaborador/Colaborador'

function Formulario(props) {

   const {registrarColaborador,crearEquipo} = props;  

  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosEnviar = {
      nombre:nombre,
      puesto:puesto,
      foto:foto,
      equipo:equipo
    }
    props.registrarColaborador(datosEnviar);
  }

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({titulo, colorPrimario: color})
  }

  const [nombre,actualizarNombre] = useState('');
  const [puesto,actualizarPuesto] = useState('');
  const [foto,actualizarFoto] = useState('');
  const [equipo,actualizarEquipo] = useState('');
  const [titulo,actualizarTitulo] = useState('')
  const [color,actualizarColor] = useState('');

  
  return <section className='formulario'>
    <form onSubmit={manejarEnvio}>
        <h2>Rellena el formularo para crear el colaborador</h2>
        <Campo 
        titulo = 'Nombre' 
        placeholder = 'Ingresar nombre' 
        required valor={nombre} 
        actualizarValor={actualizarNombre}
        />
        <Campo 
        titulo = 'Puesto' 
        placeholder = 'Ingresa puesto' 
        required
        valor={puesto} 
        actualizarValor={actualizarPuesto}
        />
        <Campo 
        titulo = 'Foto' 
        placeholder = 'Ingresar enlace de foto'
        valor={foto}
        actualizarValor={actualizarFoto}
        />
        <ListaOpciones 
        valor={equipo}
        actualizarEquipo={actualizarEquipo}
        equipos={props.equipos}
        />
        <Boton>Crear</Boton>        
    </form>
    <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formularo para crear el equipo</h2>
        <Campo
        titulo = 'Titulo' 
        placeholder = 'Ingresa Titulo del equipo' 
        required valor={titulo} 
        actualizarValor={actualizarTitulo}
        />
        <Campo 
        titulo = 'Color' 
        placeholder = 'Ingresa color en Hex' 
        required
        valor={color} 
        actualizarValor={actualizarColor}
        type='color'
        />
        <Boton>Registrar equipo</Boton>        
        </form>
  </section>
}

export default Formulario
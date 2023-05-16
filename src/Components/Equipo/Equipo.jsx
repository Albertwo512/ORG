import React from 'react'
import './Equipo.css';
import Colaborador from '../Colaborador/Colaborador';
import hexToRgba from 'hex-to-rgba';

function Equipo(props) {
    const {colorPrimario, colorSecundario, id, titulo} = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props
    const color = {
        backgroundColor: hexToRgba (colorPrimario,0.6)
    }
    const tituloStyle = {borderColor: colorPrimario}
  return <>
          {colaboradores.length > 0 &&
            <section className='equipo' style={color}>
              <input
              type='color'
              className='input-color'
              value={hexToRgba (colorPrimario,0.6)}
              onChange={(event) => {
                actualizarColor(event.target.value,id)
              }}
              
              
              
              />
              <h3 style={tituloStyle}>{titulo}</h3>
              <div className='colaboradores'>
                {
                  colaboradores.map((colaborador, index) => <Colaborador 
                  datos={colaborador} 
                  key={index.nombre} 
                  colorPrimario={colorPrimario}
                  eliminarColaborador={eliminarColaborador}
                  like={like}
                  />)
                }
              </div>
          </section>
        }</>
}

export default Equipo
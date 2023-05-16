import React from 'react'
import './Colaborador.css'
import { RiDeleteBackFill } from 'react-icons/ri'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

function Colaborador(props) {
    const {nombre,puesto, foto, equipo, id, fav}= props.datos
    const {colorPrimario, eliminarColaborador, like}= props
  return( 
    <div className='colaborador'>
        <RiDeleteBackFill onClick={ () => eliminarColaborador(id)} className='eliminar'/>
        <div className='encabezado' style={{backgroundColor: colorPrimario}}>
        <img src={foto} alt={nombre} />
        </div>
        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color='red' onClick={() => like(id)}/>  :<AiOutlineHeart onClick={() => like(id)}/>  }
            
            
        </div>
    </div>
  
)}

export default Colaborador
import React from 'react'
import './Boton.css'

function Boton(props) {
  return (
    <div className='boton1'>
        <button className="boton">{props.children}</button>
    </div>
    
  )
}

export default Boton
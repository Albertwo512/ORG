import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './Components/Header/Header'
import Formulario from './Components/Formulario/Formulario';
import MiOrg from './Components/MiOrg';
import Equipo from './Components/Equipo/Equipo';
import Colaborador from './Components/Colaborador/Colaborador';
import Footer from './Components/Footer/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    nombre: 'Alberto',
    puesto: 'Dios',
    foto:'https://github.com/Albertwo512.png',
    equipo:'Front End',
    fav: true
  },
  {id: uuid(),
    nombre: 'Alberto 2',
    puesto: 'Dios',
    foto:'https://github.com/Albertwo512.png',
    equipo:'UX y Diseño',
    fav: false
  },
  {id: uuid(),
    nombre: 'Alberto 3',
    puesto: 'Dios',
    foto:'https://github.com/Albertwo512.png',
    equipo:'Programacion',
    fav: false
  },
  {id: uuid(),
    nombre: 'Guillermo',
    puesto: 'Instructor',
    foto:'https://github.com/membriux.png',
    equipo:'Programacion',
    fav: false
  }
  ]);

  const[equipos, actualizarEquipos] = useState ([
    
    {
      id: uuid(),
      titulo:"Programacion",
      colorPrimario: '#57c278',
      colorSecundario: '#d9f7e9'
    },

    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: '#82cffa',
      colorSecundario: '#e8f8ff'
    },

    
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario: '#a6d157',
      colorSecundario: '#f0f8e2'
    },

    {
      id: uuid(),
      titulo:"DevOps",
      colorPrimario: '#e06b69',
      colorSecundario: '#fde7e8'
    },

    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario: '#db6ebf',
      colorSecundario: '#fae9f5'
    },

    {
      id: uuid(),
      titulo:"Movil",
      colorPrimario: '#ffba05',
      colorSecundario: '#fff5d9'
    },

    {
      id: uuid(),
      titulo:"Inovacion y Gestion",
      colorPrimario: '#ff8a29',
      colorSecundario: '#ffeedf'
    }

])


  //Ternario --> condicion ? seMuestra : noseMuestra

  const cambiarMostrar = (props) => {
    actualizarMostrar(!mostrarFormulario);
  }


  //Registrar colaborador

  const registrarColaborador = (Colaborador) => {
    //Spread operator
    actualizarColaboradores([...colaboradores,Colaborador])
  }


  //Eliminar colaborador

  const eliminarColaborador = (id) => {
    console.log('Eliminar Colaborador',id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }


  //Actualizar color de equipo
  const actualizarColor = (color,id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados);
  }

  const crearEquipo = (nuevoEquipo) => {
    console.log(crearEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }



  return (
    <div>
        <Header/>
        {/* {mostrarFormulario ? <Formulario/> : <></> } */}
        {mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        /> }
        <MiOrg cambiarMostrar = {cambiarMostrar}/>
        {equipos.map( (equipo) => <Equipo  
        datos={equipo} 
        key={equipo.titulo}
        colaboradores ={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        actualizarEquipos={actualizarEquipos}
        like={like}
        />)}
  <Footer/>
    </div>
  );
}

export default App;

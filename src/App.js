import React, { useState } from 'react'
import { Cita } from './components/Cita';
import { Formulario } from "./components/Formulario";


function App() {

  const [citas, setCitas] = useState([]);


  // Agregar citas
  const crearCita = cita => {
    setCitas([
      ...citas,
      cita
    ])
  };

  // Eliminar cita
  const eliminarCita = (id) => {
    const newCitas = citas.filter( (cita) => cita.id !== id )
    setCitas(newCitas);
  };

  // Mensaje condicional
  
  
  return (
    <>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={ crearCita }
            />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            { citas.map( cita => (
              <Cita 
                key={ cita.id }
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ) ) }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

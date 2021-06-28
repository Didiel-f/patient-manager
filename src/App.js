import React, { useEffect, useState } from 'react'
import { Cita } from './components/Cita';
import { Formulario } from "./components/Formulario";


function App() {

  
  // Citas en el local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if ( !citasIniciales ) {
    citasIniciales = [];
  }

  const [citas, setCitas] = useState(citasIniciales);

  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasIniciales])

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
  const title = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';
  
  
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
            <h2>{ title }</h2>
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

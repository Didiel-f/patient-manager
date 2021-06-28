import React, { useState } from 'react';
import uuid from 'uuid/v4';

export const Formulario = ({ crearCita }) => {

    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, setError] = useState(false);
    
    const actualizarState = (e) => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const { mascota, propietario, fecha, hora, sintomas } = cita;
    
    const submitCita = (e) => {
        e.preventDefault();

        if ( mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ) {
            setError(true);
            return;
        }

        setError(false);

        cita.id = uuid();


        crearCita(cita);
        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });
        
    };

    return (
        <>
            <h2>Crear Cita</h2>
            
            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }

            <form onSubmit={ (e) => submitCita(e) }>
                <label>Nombre de Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={ mascota }
                />

                <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la mascota"
                    onChange={actualizarState}
                    value={ propietario }
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={ fecha }
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={ hora }
                />

                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={ sintomas }
                >
                </textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar Cita
                </button>

            </form>
        </>
    )
}

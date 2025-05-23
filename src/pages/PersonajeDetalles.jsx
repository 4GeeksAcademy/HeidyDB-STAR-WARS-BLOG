import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PersonajeDetalles = () => {

  const { uid } = useParams();
  const [personaje, setPersonaje] = useState(null);

      useEffect(() => {
        getPersonaje();
     }, [uid]);
 

    function getPersonaje() {
        
        fetch(`https://www.swapi.tech/api/people/${uid}`,
            {
                method: "GET"
            })
         .then(res => res.json())
         .then(data => {
         setPersonaje(data.result); // estoy guardando en el estado personaje data.resulta de la api
         })
         .catch(err => console.error("Error cargando detalles:", err));
     }
  

  if (!personaje) {
    return <div className="text-center p-4">Cargando...</div>; // evita el error
  }// para evitar el error de que de personaje null porq reenderiza antes 

    return (
        <div>
            <div className="container mt-4 d-flex  justify-content-center">
                <div className="card mt-10  mb-3" style={{ width: '800px', height: '300px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://picsum.photos/200/300?random=${uid}`}
                             className="img-fluid rounded-start h-100" alt="foto del personaje"
                              style={{ objectFit: "cover" }} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title"> {personaje.properties.name}  </h5>
                                <p className="card-text">Fecha de nacimiento: {personaje.properties.birth_year}</p>
                                <p className="card-text">Descripcion: {personaje.description}</p>
                                <p className="card-text">genero: {personaje.properties.gender}</p>
                                <p className="card-text  text-center mb-0"><small className="text-body-secondary">caracterisiticas fenotipicas </small></p>
                                <hr className="my-0" style={{ border: '1px solid #dc3545'}} />
                                <div className="d-flex gap-5 mb-0 text-muted small text-center">
                                     <div className="d-flex flex-column">
                                         <p className="card-text mt-3 mb-0">Estatura:</p>
                                         <span>{personaje.properties.height}</span> 
                                     </div>

                                     <div className="d-flex flex-column">
                                         <p className="card-text mt-3 mb-0">Color de la piel:</p>
                                         <span>{personaje.properties.skin_color}</span> 
                                     </div>

                                     <div className="d-flex flex-column">
                                         <p className="card-text mt-3 mb-0">Color del pelo:</p>
                                         <span>{personaje.properties.hair_color}</span> 
                                     </div>

                                       <div className="d-flex flex-column">
                                         <p className="card-text mt-3 mb-0">Color de los ojos:</p>
                                         <span>{personaje.properties.eye_color}</span> 
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonajeDetalles

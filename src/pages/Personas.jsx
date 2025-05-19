import React from 'react'

 function getPersonas() {
    //la URI, el metodo. lleva coma entre la URI y el metodo
    //fetch hace la peticion 
    fetch("https://www.swapi.tech/api/people",
      {
        method: "GET"
      })
      //el metodo GET no lleva ni body ni headers 

      //codigo del status , info en formato json .
      .then((response) => {
        console.log(response);
        if (!response.ok) throw new Error(`Error al obtener tareas  ${response.status}`);//si el codigo es 400 0 500
        //  enviar error que sera tratado por el catch 
        return response.json(); // sino trae la respuest json convertida a javascript
      })

      //info en formato JavaScript . //  maneja la respuesta si todo va bien (response.ok es un 200)
      .then((data) => {
        console.log(data);
        if (Array.isArray(data.personas)) { //para garntizar que contacts siempre sea aun array para luego hacerle .map
      
          //AQUI UN CAMBIO MUY GRANDE RESPECTO AL CODIGO ANTERIOR ********* se guarda todo en el store
          dispatch({    // envia los contactos al store.jsx para dese ahi usar en cualquier componentes los datos 
                  type: 'agregar_personas', // el caso creado en el store.jsx
                  payload: data.personas// lista de contactos 
                });
      } else {
        dispatch({    // envia los contactos al store.jsx para dese ahi usar en cualquier componentes los datos 
                  type: 'agregar_personas', // el caso creado en el store.jsx
                  payload: [] // lista de contactos 
                });
         }
      })
      //manejo de errores . captura cualquier error 
      .catch(error => {
        console.error("Error:", error);
         dispatch({
          type: 'agregar_personas',
          payload: []// Evita que quede undefined
      });
  });
   
 }

const Personas = () => {
  return (
    <div>

      	<div className="card" style={{width: '180px'}}>
					<img src="..." className="card-img-top" alt="..."/>
						<div className="card-body">
							<h5 className="card-title">personas.name</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
							<a href="#" className="btn " hover = "btn-primary">Learn more...</a>
             <i className ="fa-regular fa-heart" ></i>
						</div>
				</div>


      
    </div>
  )
}

export default Personas;

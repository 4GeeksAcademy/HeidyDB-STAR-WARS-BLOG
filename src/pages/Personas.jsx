import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useGlobalReducer from "../hooks/useGlobalReducer"; //sin llaves pues se exporto useGlobalReducer
//por default.   


const Personas = () => {

  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);


  useEffect(() => { // para que haga el get cada vez que se cargue bla pagina 
  getPersonas();
  }, []);

 
  const manejarClick = (personaje) => {
   
    const yaEsFavorito = store.favoritos.some(f => f.uid === personaje.uid);
         
        if (!personaje || !personaje.uid) return;
          dispatch({
             type: 'conmutador_favorito',
             payload: { uid: personaje.uid }
          });
        };

   /*
    // const yaEsFavorito = favorites.includes(uid);//incluye ese uid en el arreglo de favorit
       if (yaEsFavorito) {
         // Si ya es favorito, lo quitamos
         const nuevosFavoritos = favorites.filter((id) => id !== uid);
         setFavorites(nuevosFavoritos);
    }  else {
            // Si no está, lo agregamos
           const nuevosFavoritos = [...favorites, uid];
           setFavorites(nuevosFavoritos);
         }
      };
  
 */
  const { store, dispatch } = useGlobalReducer();

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
        if (Array.isArray(data.results)) { //para garntizar que contacts siempre sea aun array para luego hacerle .map

          //AQUI UN CAMBIO MUY GRANDE RESPECTO AL CODIGO ANTERIOR ********* se guarda todo en el store
          dispatch({    // envia los contactos al store.jsx para dese ahi usar en cualquier componentes los datos 
            type: 'agregar_personas', // el caso creado en el store.jsx
            payload: data.results// lista de contactos 
          });
        } else {
          dispatch({    // envia los contactos al store.jsx para dese ahi usar en cualquier componentes los datos 
            type: 'agregar_personas', // el caso creado en el store.jsx
            payload: [] // lista de favoritos vacio para q no de error el map
          });
        }
      })
      //manejo de errores . captura cualquier error 
      .catch(error => {
        console.error("Error:", error);
        dispatch({
          type: 'agregar_personas',
          payload: []// Evita que quede undefined en el map
        });
      });
  }


  return (

    <div>
      <div className="container s-flex align-items-center " role="alert" >
        <ul className="list-group">
          {store.personas.map((properties, index) => (
            <li key={index} className="list-group-item 
                  d-flex align-items-start justify-content-between  h-1 d-inline-block">

              <div className="card" style={{ width: '180px' }}>
                <img src="https://via.placeholder.com/180x100?text=Imagen"
                  className="card-img-top" alt="foto" />
                <div className="card-body">
                  <h5 className="card-title">{properties.name}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                  <a href="#" className="btn " onClick={() => navigate(`/personas/${properties.uid}`)}>Learn more...</a>
                  <i onClick={() => manejarClick(properties)} 

                    className={`fa-heart ${store.favoritos.some(f => f.uid === properties.uid) ? "fa-solid" : "fa-regular"}`} >
                  </i>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )    
}

export default Personas;

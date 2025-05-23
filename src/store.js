export const initialStore=()=>{
  return{
    favoritos : [],
    personas : [],
    planetas : [],
    vehiculos : []
   
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){

    case 'agregar_favoritos':
       return {
        ...store, 
        favoritos: [...store.favoritos, action.payload] //agregar un favoritos a la lista 
      }


     case 'conmutador_favorito': //pone el icono negro cdo lo marco y paso el personaje a favoritos array
        
          const yaExiste = store.favoritos.find((f) => f.uid === action.payload.uid);
          return {
          ...store,
           favoritos: yaExiste
           ? store.favoritos.filter((f) => f.uid !== action.payload.uid) 
           : [...store.favoritos,  {
          uid: action.payload.uid,
          name: action.payload.name, // agrego a favoritos el objeto entero (nombre e id)
        }]
  };


    case 'borrar_favoritos':

      return {
        ...store,
        favoritos: store.favoritos.filter((f)=> f.uid !== action.payload.uid)
     }
     
 case 'agregar_personas':

    return {
      ...store, 
      personas: action.payload
    }

    case 'mostrar_personaje':
      return {
        personas : action.payload.uid
      }
  
    default:
      throw Error('Unknown action.');
  }    
}

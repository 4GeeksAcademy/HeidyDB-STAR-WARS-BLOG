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


     case 'conmutador_favorito':
          const persona = action.payload; // ahora es un objeto { uid, name }
          const yaExiste = store.favoritos.find((f) => f.uid === persona.uid);
          return {
          ...store,
           favoritos: yaExiste
           ? store.favoritos.filter((f) => f.uid !== persona.uid)
           : [...store.favoritos, persona],
         };


    case 'borrar_favoritos':

      return {
        ...store,
        favoritos: store.favoritos.filter((favorite )=> favorite.uid !== action.payload)
     }
     
 case 'agregar_personas':

    return {
      ...store, 
      personas: action.payload
    }
  
    default:
      throw Error('Unknown action.');
  }    
}

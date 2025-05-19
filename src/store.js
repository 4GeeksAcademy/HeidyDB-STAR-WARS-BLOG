export const initialStore=()=>{
  return{
    favoritos : [],
    personas : [],
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ]
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'agregar_favoritos':
     return {
        ...store, 
        favoritos: [...store.favoritos, action.payload] //agregar un favoritos a la lista 
      }


    case 'borrar_favoritos':

      return {
        ...store,
        favoritos: store.favoritos.filter((favorite )=> favorite.id !== action.payload)
     }
     
 case 'agregar_personas':

    return {
      ...store, 
      personas: action.payload
    }

     

    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    default:
      throw Error('Unknown action.');
  }    
}

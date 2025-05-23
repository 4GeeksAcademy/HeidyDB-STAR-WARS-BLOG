//import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

import Personas from "./Personas";
import Planetas from "./Planetas";
import Vehiculos from "./Vehiculos";
import PersonajeDetalles from "./PersonajeDetalles.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		

		<div className="text-center mt-5">
			  <Personas />
			  <hr style={{ border: '1px solid #ccc', margin: '40px 0' }} />
			  
		</div>	
	);
}; 
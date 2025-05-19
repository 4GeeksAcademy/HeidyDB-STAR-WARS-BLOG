//import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

import Personas from "./Personas";
import Planetas from "./Planetas";
import Vehiculos from "./Vehiculos";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		

		<div className="text-center mt-5">
		<Personas />
			
		</div>	
	);
}; 
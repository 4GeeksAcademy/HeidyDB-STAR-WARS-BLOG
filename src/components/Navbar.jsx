import { Link } from "react-router-dom";
//import { useGlobalReducer } from "../useGlobalReducer";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

 
export const Navbar = () => {


	const { store, dispatch } = useGlobalReducer();
    const navigate = useNavigate();

  useEffect(() => { // para que haga el get cada vez que se cargue bla pagina 
	//getFavoritos();
	}, []);


  const eliminarFavorito = (uid) => {
    dispatch({
      type: 'commutador_favorito',
      payload: { uid } // solo necesitamos el uid para filtrar
    });
  };


	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<Link to="/">

					<img src="https://images.hdqwalls.com/download/star-wars-logo-4k-qw-320x240.jpg"
						style={{ width: '200px', height: '70px', objectFit: 'cover' }} />

				</Link>
				<div className="ml-auto">


					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites ({store.favoritos.length}) {/* devuelve la cantidad de favoritos*/}
						</button>
						<ul className="dropdown-menu">
							{store.favoritos.length === 0 ? 
							<li className="dropdown-item text-muted">No hay favoritos</li>
							: 
								store.favoritos.map((p, index)=> (
							<li key = {index} className="dropdown-item" >
								<span onClick ={() => navigate(`/personas/${p.uid}`)}>
								{p.name}
								</span>
											
							<button type="button" className="btn me-2 m-auto" aria-label="Close"
								onClick={() => eliminarFavorito(p,uid)}>
								<i className="fa-solid fa-trash"></i>
							</button>
							</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
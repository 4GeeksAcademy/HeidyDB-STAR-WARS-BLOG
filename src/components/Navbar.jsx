import { Link } from "react-router-dom";

export const Navbar = () => {

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
							Favorites
						</button>
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">aqui va people.length</a></li>
							<Link to="/"> link a people.id</Link>
							<button type="button" className="btn me-2 m-auto" aria-label="Close"
								onClick={() => eliminarPersona(index)}>
								<i className="fa-solid fa-trash"></i>
							</button>

						</ul>
					</div>


				</div>
			</div>
		</nav>
	);
};
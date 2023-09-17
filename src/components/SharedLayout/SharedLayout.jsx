import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { IoCarSportSharp } from "react-icons/io5";
import { Logo, NavMenu, NavLink, Header } from "./SharedLayout.styled";
import { Container } from "components";

const SharedLayout = () => {
	return (
		<>
			<Header>
				<Container>
					<nav>
						<NavMenu>
							<li>
								<Logo to="/">
									<IoCarSportSharp size={30} />
									<h1>Car rental</h1>
								</Logo>
							</li>
							<li>
								<NavLink to="/">Home</NavLink>
							</li>
							<li>
								<NavLink to="/catalog">Catalog</NavLink>
							</li>
							<li>
								<NavLink to="/favorites">Favorites</NavLink>
							</li>
						</NavMenu>
					</nav>
				</Container>
			</Header>

			<main>
				<Container>
					<Suspense fallback={<div>Завантаження ...</div>}>
						<Outlet />
					</Suspense>
				</Container>
			</main>
		</>
	);
};

export default SharedLayout;

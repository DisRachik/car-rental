import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { NavMenu } from "./SharedLayout.styled";

const SharedLayout = () => {
	return (
		<>
			<header>
				<nav>
					<NavMenu>
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
			</header>
			<main>
				<Suspense fallback={<div>Завантаження ...</div>}>
					<Outlet />
				</Suspense>
			</main>{" "}
		</>
	);
};

export default SharedLayout;

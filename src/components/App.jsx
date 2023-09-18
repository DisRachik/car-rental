import { Route, Routes } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
const Home = lazy(() => import("../pages/Home"));
const Catalog = lazy(() => import("../pages/Catalog"));
const Favorites = lazy(() => import("../pages/Favorites"));

import { SharedLayout } from "components";

const SAVED_FAVORITE = "favorite";

const savedFavorite = () => {
	const contactItem = localStorage.getItem(SAVED_FAVORITE);
	return contactItem ? JSON.parse(contactItem) : [];
};

function App() {
	const [favorite, setFavorite] = useState(savedFavorite);

	useEffect(() => {
		localStorage.setItem(SAVED_FAVORITE, JSON.stringify(favorite));
	}, [favorite]);

	const addFavorite = newFavorite => {
		const isAlreadyInContacts = favorite.find(({ id }) => id === newFavorite.id);

		if (isAlreadyInContacts) {
			setFavorite(prevState => prevState.filter(item => item.id !== newFavorite.id));
			return;
		}

		setFavorite(prevState => [...prevState, { ...newFavorite }]);
	};

	return (
		<Routes>
			<Route path="/" element={<SharedLayout />}>
				<Route index element={<Home />} />
				<Route path="catalog" element={<Catalog favorite={favorite} addFavorite={addFavorite} />} />
				<Route path="favorites" element={<Favorites favorite={favorite} addFavorite={addFavorite} />} />
			</Route>
		</Routes>
	);
}

export default App;

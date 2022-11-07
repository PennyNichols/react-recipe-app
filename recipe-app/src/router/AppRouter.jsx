import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import Navigation from "../components/navigation/Navigation";
import { BrowserRouter } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
	const [isAuth, setIsAuth] = useState(false);

	return (
		<BrowserRouter>
			<Navigation isAuth={isAuth} setIsAuth={setIsAuth} />
			<Routes>
				{/* Public routes */}
				<Route path="" element={<Home />} />
				<Route
					path="/login"
					element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}
				/>

				{/* <Route path="/" element={isAuth? <Home/>: <Login/> } /> */}

				{/* Private Routes / protected Routes */}
				<Route path="/about" element={<PrivateRouter isAuth={isAuth} />}>
					<Route path="" element={<About />} />
				</Route>
				<Route path="/details" element={<PrivateRouter isAuth={isAuth} />}>
					<Route path="" element={<Details />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;

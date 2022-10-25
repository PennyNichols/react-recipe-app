import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../../components/navigation/Navigation";
import { GiCupcake } from "react-icons/gi";
import Header from "../../components/header/Header";
import RecipeCard from "../../components/card/RecipeCard";

const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

const APP_ID = env.process.REACT_APP_APP_ID
const APP_KEY = env.process.REACT_APP_APP_KEY

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

const Home = () => {
	const [query, setQuery] = useState("");
	const [recipes, setRecipes] = useState([]);
	const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

	

	const fetchData = async () => {
		if (query !== "") {
			const result = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=46d25eed&app_key=30e9a9eccdf4236d8b3e549f17ac4268&mealType=${meal}`);
			console.log(result.data.hits);
			setRecipes(result.data.hits);
			setQuery("");
		} else {
			console.log("not working");
		}
	};
	// useEffect(() => {
	// 	fetchData();
	// }, [])

	return (
		<div className="home-wrapper">
			<Navigation />
			<Header
				setQuery={setQuery}
				query={query}
				fetchData={fetchData}
				mealTypes={mealTypes}
				setMeal={setMeal}
				meal={meal}
			/>
			{recipes ? (
				<div className="home-content-wrapper">
					{recipes.map((recipe, index) => (
						<RecipeCard key={index} recipe={recipe.recipe} />
					))}
				</div>
			) : (
				<div className="home-content-wrapper">
					<h2 className="home-content-title text-center mt-5">
						Search Your Favorite Family Recipes
					</h2>
					<GiCupcake className="home-brand d-flex m-auto mt-5" />
				</div>
			)}
		</div>
	);
};

export default Home;

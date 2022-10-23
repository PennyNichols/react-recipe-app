import React, { useState } from "react";
import axios from "axios";
import Navigation from "../../components/navigation/Navigation";
import { GiCupcake } from "react-icons/gi";
import Header from "../../components/header/Header";
import RecipeCard from "../../components/card/RecipeCard";

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

const Home = () => {
	const [query, setQuery] = useState("");
	const [recipes, setRecipes] = useState();
	const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

	const url = `https://api.edamam.com/search?q=${query}&app_id=46d25eed&app_key=30e9a9eccdf4236d8b3e549f17ac4268&mealType=${meal}`;

	const fetchData = async () => {
		if (query !== "") {
			const result = await axios.get(url);
			console.log(result.data.recipes);
			setRecipes(result.data.recipes);
			setQuery("");
		} else {
			console.log("empty form");
		}
	};

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

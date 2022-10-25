import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../../components/navigation/Navigation";
import Header from "../../components/header/Header";
import RecipeCard from "../../components/card/RecipeCard";
import DefaultHome from "./DefaultHome";


const APP_ID = process.env.REACT_APP_APP_ID
const APP_KEY = process.env.REACT_APP_APP_KEY

const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

const Home = () => {
	const [query, setQuery] = useState("");
	const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
	const [recipes, setRecipes] = useState([]);
	
	const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
	
	
	const fetchData = async () => {
	
			const result = await axios.get(url);
			console.log(result.data.hits);
			setRecipes(result.data.hits);
			setQuery("");
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
			{/* {recipes ? (
				<div className="home-content-wrapper">
					{recipes.map((recipe, index) => (
						<RecipeCard key={index} recipe={recipe.recipe} />
					))}
				</div>
			) : ( */}
				<DefaultHome/>
			{/* )} */}
		</div>
	);
};

export default Home;

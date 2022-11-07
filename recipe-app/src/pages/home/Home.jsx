import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import DefaultHome from "./DefaultHome";
import RecipeCard from '../../components/card/RecipeCard'


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
			<Header
				setQuery={setQuery}
				query={query}
				fetchData={fetchData}
				mealTypes={mealTypes}
				setMeal={setMeal}
				meal={meal}
			/>
			
				<div className="home-content-wrapper">
					{ recipes.map((recipe, index) => <RecipeCard key={ index.toString() } recipe={ recipe?.recipe} />)}
				</div>
			
		</div>
	);
};

export default Home;

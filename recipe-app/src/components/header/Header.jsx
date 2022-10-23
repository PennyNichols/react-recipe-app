import React from "react";
import SearchForm from "./SearchForm";

const Header = ({ setQuery, query, fetchData, mealTypes, setMeal, meal }) => {
	return (
		<div>
			<h1 className="title text-center mt-4 pb-4">Heirloom Recipes</h1>
			<SearchForm
				setQuery={setQuery}
				query={query}
				fetchData={fetchData}
				mealTypes={mealTypes}
				setMeal={setMeal}
				meal={meal}
			/>
		</div>
	);
};

export default Header;

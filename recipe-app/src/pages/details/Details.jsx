import React from "react";
import { useLocation } from "react-router-dom";
import { GiCupcake } from "react-icons/gi";
import { Container } from "reactstrap";

const Details = (props) => {
	const location = useLocation();
	const recipe = location.state.recipe;
	return (
		<div className="home-content-wrapper">
			<div className="details-header d-flex justify-content-around">
				<h2>{recipe.label}</h2>
				<GiCupcake />
			</div>
			<Container className="details">
				<div className="ingredients d-flex justify-content-around">
					{recipe.ingredientLines.map((line, index) => (
						<ul key={index}>
							<li>
								{index + 1} - {line}
							</li>
						</ul>
					))}
					<img src={recipe.image} alt={recipe.label} />
				</div>
				<div className="nutrients">
					<p>
						{recipe.totalNutrients.CA.label} :{" "}
						{Math.round(recipe.totalNutrients.CA.quantity)}
						{recipe.totalNutrients.CA.unit}
					</p>
					<p>
						{recipe.totalNutrients.CHOCDF.label} :{" "}
						{Math.round(recipe.totalNutrients.CHOCDF.quantity)}
						{recipe.totalNutrients.CHOCDF.unit}
					</p>
					<p>
						{recipe.totalNutrients.CHOLE.label} :{" "}
						{Math.round(recipe.totalNutrients.CHOLE.quantity)}
						{recipe.totalNutrients.CHOLE.unit}
					</p>
					<p>
						{recipe.totalNutrients.ENERC_KCAL.label} :{" "}
						{Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
						{recipe.totalNutrients.ENERC_KCAL.unit}
					</p>
					<p>{recipe.totalWeight}</p>
					<p>Calories: {Math.round(recipe.calories)}</p>
					{recipe.digest.slice(0, 4).map((item, index) => (
						<p key={index}>
							{item.label} : {Math.round(item.total)}
						</p>
					))}
				</div>
			</Container>
		</div>
	);
};

export default Details;

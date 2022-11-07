import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "reactstrap";
import defaultImage from "../../assets/bg-img.jpg";

const RecipeCard = ({ recipe }) => {
	const navigate = useNavigate();
	const selectRecipe = () => {
		navigate("details", { state: { recipe } });
	};
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Header>{recipe.label}</Card.Header>
			<Card.Img variant="top" src={recipe?.image || defaultImage} />
			<Button onClick={selectRecipe}>View Recipe</Button>
		</Card>
	);
};

export default RecipeCard;

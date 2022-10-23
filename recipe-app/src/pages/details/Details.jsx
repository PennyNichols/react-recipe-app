import React from "react";
import { useLocation } from "react-router-dom";
import { GiCupcake } from "react-icons/gi";
import { Container } from "reactstrap";

const Details = (props) => {
	const location = useLocation();
	const recipe = location.state.recipe;
	return (
		<div className="home-content-wrapper">
			<div className="details-header">
				<h2>{recipe.label}</h2>
				<GiCupcake />
			</div>
			<Container className="details"></Container>
		</div>
	);
};

export default Details;

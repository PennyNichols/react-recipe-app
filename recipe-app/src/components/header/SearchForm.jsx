import React from "react";
import { Button, Form, Input } from "reactstrap";

const SearchForm = ({
	setQuery,
	query,
	fetchData,
	mealTypes,
	setMeal,
	meal,
}) => {
	const handleChange = (e) =>{
		setMeal(e.target.value)
	}
	const handleSearch = (e) => {
		e.preventDefault();
		fetchData();
	};

	return (
		<Form className="search d-flex w-50 m-auto gap-2" onSubmit={handleSearch}>
			<Input
				type="text"
				className="search-input"
				onChange={(e) => setQuery(e.target.value)}
				value={query}
				placeholder="Search..."
			/>
			<Button className="submit-btn">
				SEARCH
			</Button>
			<select
				name="mealTypes"
				id="mealTypes"
				className="dropdown p-1"
				onChange={handleChange}
				
			>
				{mealTypes?.map((item,index) => (
					<option key={index} value={item.toLowerCase()}>
						{item}
					</option>
				))}
			</select>
		</Form>
	);
};

export default SearchForm;

import React, { useState } from "react";
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
				placeholder="Search..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<Button className="submit-btn" type="submit" onClick={handleSearch}>
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

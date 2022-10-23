import React, { useState } from "react";
import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Form,
	Input,
} from "reactstrap";
import Navigation from "./Navigation";
import {GiCupcake} from 'react-icons/gi'

const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime']


const Home = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // const[recipes, setRecipes] = useState();
    // const[query, setQuery] = useState('')
    // const [meal, setMeal] = useState(mealTypes[0].toLowerCase())

    // const url = (`https://api.edamam.com/search?q=${query}&app_id=46d25eed&app_key=30e9a9eccdf4236d8b3e549f17ac4268&mealType=${meal}`)


	const handleSearch = "";

	const toggle = () => setDropdownOpen((prevState) => !prevState);

	return (
		<div className="home-wrapper">
			<Navigation />
			<div >
				<h1 className="title text-center mt-4 pb-4">Heirloom Recipes</h1>
				<Form className="search d-flex w-50 m-auto gap-2" onSubmit={handleSearch}>
					<Input
						type="text"
						className="search-input"
						placeholder="Search..."
						required
					/>
					<Button className='submit-btn' type="submit">SEARCH</Button>
					<Dropdown className='dropdown-wrapper' isOpen={dropdownOpen} toggle={toggle} direction='down'>
						<DropdownToggle className="dropdown-main" caret>Meal Type</DropdownToggle>
						<DropdownMenu className="dropdown-menu" >
							<DropdownItem className="dropdown-header" header>Meal Types</DropdownItem>
                            <DropdownItem divider className="divider"></DropdownItem>
							<DropdownItem className='dropdown-item'>Breakfast</DropdownItem>
							<DropdownItem className='dropdown-item'>Lunch</DropdownItem>
							<DropdownItem className='dropdown-item'>Dinner</DropdownItem>
							<DropdownItem className='dropdown-item'>Snack</DropdownItem>
							<DropdownItem className='dropdown-item'>Teatime</DropdownItem>
							
						</DropdownMenu>
					</Dropdown>
				</Form>
			</div>
            <div className="home-brand-wrapper">
                <h2 className='home-brand-title text-center mt-5'>Search Your Favorite Family Recipes</h2>
                <GiCupcake className='home-brand d-flex m-auto mt-5'/>

            </div>
		</div>
	);
};

export default Home;

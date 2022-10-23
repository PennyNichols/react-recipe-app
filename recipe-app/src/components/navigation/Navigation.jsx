import React from "react";
import { Nav, NavbarBrand, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import { GiCupcake } from "react-icons/gi";

const Navigation = () => {
	return (
		<div className="nav-wrapper">
			<Nav variant="pills" activeKey="1" className="justify-content-between">
				<NavItem>
					<NavbarBrand>
						<Link to="/home">
							<GiCupcake className="brand" />
						</Link>
					</NavbarBrand>
				</NavItem>

				<div className="d-flex gap-5 me-2 nav-links">
					<NavItem>
						<Link to="/about">About</Link>
					</NavItem>
					<NavItem>
						<a
							href="https://www.github.com/PennyNichols"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
					</NavItem>
					<NavItem>
						<Link to="/">Log Out</Link>
					</NavItem>
				</div>
			</Nav>
		</div>
	);
};

export default Navigation;

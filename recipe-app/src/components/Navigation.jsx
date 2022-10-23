import React from "react";
import { Nav, NavbarBrand, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { SiCodechef } from "react-icons/si";

const Navigation = () => {
	return (
		<div>
			<Nav variant="pills" activeKey="1" className="justify-content-between">
				<NavItem>
					<NavbarBrand>
						<Link to="/home">
							<SiCodechef />
						</Link>
					</NavbarBrand>
				</NavItem>

				<div className="d-flex gap-2 me-2 nav-links">
					<NavItem>
						<Link to="/about">About</Link>
					</NavItem>
					<NavItem>
						<a href="https://www.github.com/PennyNichols" target="_blank" rel='noreferrer'>
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

import React from "react";
import { Button, Form, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { GiCupcake } from "react-icons/gi";

const Login = ({isAuth, setIsAuth}) => {
	const navigate = useNavigate();
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsAuth(true)
		navigate("/");
	};
	return (
		<div className="login-page-wrapper">
			<div className="login-wrapper">
				<Form className="login-form m-auto mt-5 " onSubmit={handleSubmit}>
					<GiCupcake className="login-brand m-auto mb-3 d-flex" />
					<h1 className="fw-bolder login-title text-center">Penny's Recipes</h1>
					<Input
						className="login-input"
						type="text"
						placeholder="Username"
						required
					/>
					<Input
						className="login-input"
						type="password"
						placeholder="Password"
						required
					/>
					<Button className="login-btn px-5" type="submit">
						LOGIN
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default Login;

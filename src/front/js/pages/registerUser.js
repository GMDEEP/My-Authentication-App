import React from "react";

export function RegisterUser() {
	return (
		<div className="container">
			<div className="form-floating mb-3">
				<input type="email" className="form-control" placeholder="name@example.com" />
				<label htmlFor="floatingInput">Email address</label>
			</div>
			<div className="form-floating">
				<input type="password" className="form-control" placeholder="Password" />
				<label htmlFor="floatingPassword">Password</label>
			</div>

			<button className="btn btn-primary mt-3">Register</button>
		</div>
	);
}

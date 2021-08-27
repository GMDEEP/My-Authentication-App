import React from "react";
import { Context } from "../store/appContext";

export function LoginUser() {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const { store, actions } = React.useContext(Context);

	return (
		<div className="container">
			<div className="form-floating mb-3">
				<input type="email" className="form-control" placeholder="name@example.com" />
				<label htmlFor="floatingInput">Email address</label>
			</div>
			<div className="form-floating">
				<label>Password</label>
				<input
					value={password}
					onChange={ev => setPassword(ev.target.value)}
					type="password"
					className="form-control"
					placeholder="Password"
				/>
			</div>
			<button className="btn btn-primary mt-3" onClick={() => actions.loginUser(email, password)}>
				Login
			</button>
		</div>
	);
}

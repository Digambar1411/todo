import { NavLink } from "react-router";
import "./auth.css";

const SignupForm = () => {
	return (
		<div className="auth-section">
			<div className="signup">
				<h2>Sign up</h2>
				<p>Enter your information to create an account</p>

				<form>
					<div className="grid-2">
						<div className="input-control">
							<label htmlFor="fname">First name</label>
							<input type="text" name="fname" placeholder="John" />
						</div>
						<div className="input-control">
							<label htmlFor="lname">Last name</label>
							<input type="text" name="lname" placeholder="Robert" />
						</div>
					</div>
					<div className="input-control">
						<label htmlFor="email">Email</label>
						<input type="email" name="email" placeholder="john@example.com" />
					</div>
					<div className="input-control">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" placeholder="password" />
					</div>

					<div className="input-control">
						<label htmlFor="confirm-password">Confirm Password</label>
						<input
							type="confirm-password"
							name="confirm-password"
							placeholder="confirm password"
						/>
					</div>

					<button className="btn form-btn">Create Account</button>

					<p>
						Already have an account? <NavLink to="/signin">Sign in</NavLink>{" "}
					</p>

					<button className="btn google-btn">
						<img src="icon-google.svg" alt="google-icon" />
						Sign up with Google
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignupForm;

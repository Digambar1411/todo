import { Navigate, NavLink } from "react-router-dom";
import "./auth.css";
import { useAuth } from '../Context/AuthContext';

const LoginForm = () => {
  const { isLoggedIn, handleLogin } = useAuth();

  if(isLoggedIn){
    return <Navigate to={"/"} replace />
  }

	return (
		<div className='auth-section'>
			<div className="login">
				<h2>Sign in</h2>
				<p>Enter your email below to login to your account</p>

				<form onSubmit={handleLogin}>
					<div className="input-control">
						<label htmlFor="email">Email</label>
						<input type="email" name="email" placeholder="John@example.com" />
					</div>
					<div className="input-control">
						<label htmlFor="password">Password</label>
						<div className="flex">
							<input type="password" name="password" placeholder="password" />
							<button type="button" className="toggle-btn">
								lo
							</button>
						</div>
					</div>

					<button className="btn form-btn">Login</button>

					<p>
						Don't have an account? <NavLink to={"/signup"}> Sign Up</NavLink>
					</p>

					<button className="btn google-btn">
						<img src="icon-google.svg" alt="google-icon" />
						Sign in with Google
					</button>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;

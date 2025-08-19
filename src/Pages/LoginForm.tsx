import { Navigate, NavLink } from "react-router-dom";
import "./auth.css";
import { useAuth } from '../Context/AuthContext';
import { useForm, type SubmitHandler } from "react-hook-form";
import { useState } from 'react';

type FormValueType = {
	email: string;
	password: string;
};

const LoginForm = () => {
	const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [showPass, setShowPass]= useState(false);

  const {
		register,
		handleSubmit,
		formState: { errors },
    reset
	} = useForm<FormValueType>();

	const onSubmit: SubmitHandler<FormValueType> = (data) => {
		console.log(data);
    reset();
    setIsLoggedIn(true);
	};

  const togglePassword = () => {
    setShowPass(prev => !prev);
  };


	if (isLoggedIn) {
		return <Navigate to={"/"} replace />;
	}


	return (
		<div className="auth-section">
			<div className="login">
				<h2 className='heading'>Sign in</h2>
				<p className='desc'>Enter your email below to login to your account</p>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="input-control">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							placeholder="John@example.com"
							{...register("email", { required: {value:true,message:'Email is required !'} })}
						/>
						{errors?.email && <p className='error'>{errors.email.message as string}</p>}
					</div>
					<div className="input-control">
						<label htmlFor="password">Password</label>
						<div className="flex">
							<input
								type={`${showPass ? 'text/number' : 'password'}`}
								placeholder="password"
								{...register("password", { required: {value:true,message:"Password is required !"} })}
							/>
							<button type="button" className="toggle-btn" onClick={togglePassword}>
								{ showPass ? <img src="view.png" width={15} alt="view password" /> :  <img src="hide.png" width={15} alt="hide password" /> }
							</button>
						</div>
						{errors?.password && <p className='error'>{errors.password.message as string}</p>}

					</div>

					<button className="btn form-btn mt-1">Login</button>

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

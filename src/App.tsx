import './App.css'
import ProtectedRoute from "./components/ProtectedRoute";
import LoginForm from "./Pages/LoginForm";
import SignupForm from "./Pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
	return (
			<BrowserRouter>
				<Routes>
					<Route path="/signin" element={<LoginForm />} />
					<Route path="/signup" element={<SignupForm />} />
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<h1>Welcome to the Todo App</h1>
							</ProtectedRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
	);
}

export default App

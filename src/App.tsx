import './App.css'
import ProtectedRoute from "./components/ProtectedRoute";
import LoginForm from "./Pages/LoginForm";
import NotFound from './Pages/NotFound';
import SignupForm from "./Pages/Signup";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<ProtectedRoute>
						<h1>Welcome to the Todo App</h1>
					</ProtectedRoute>
				}
			/>
			<Route path="/signin" element={<LoginForm />} />
			<Route path="/signup" element={<SignupForm />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import MyPackages from "./components/MyPackages";
import CustomPackage from "./components/CustomPackage";
import AboutUs from "./components/AboutUs";
import { ProtectedRoute } from './components/ProtectedRoute';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
		<div className='App'>
			<Router>
				<Routes>
					<Route exact path="/" element={<ProtectedRoute component={Home} />}/>
					<Route exact path="/login" element={<Login />}/>
					<Route exact path="/register" element={<Register />}/>
					<Route exact path="/mypackages" element={<ProtectedRoute component={MyPackages} />}/>
					<Route exact path="/custompackage" element={<ProtectedRoute component={CustomPackage} />}/>
					<Route exact path="/about" element={<ProtectedRoute component={AboutUs} />}/>
				</Routes>
			</Router>
		</div>
    );
}

export default App;

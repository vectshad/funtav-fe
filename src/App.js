import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import MyPackages from "./components/MyPackages";
import CustomPackage from "./components/CustomPackage";
import AboutUs from "./components/AboutUs";
import PackageDetail from "./components/PackageDetail";
import './App.css';

function App() {
    return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/login" element={<Login />}/>
					<Route path="/register" element={<Register />}/>
					<Route path="/mypackages" element={<MyPackages />}/>
					<Route path="/custompackage" element={<CustomPackage />}/>
					<Route path="/about" element={<AboutUs />}/>
					<Route path="/:id" element={<PackageDetail />}/>
				</Routes>
			</Router>
		</div>
    );
}

export default App;

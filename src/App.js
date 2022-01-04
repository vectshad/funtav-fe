import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import MyPackages from "./components/MyPackages";
import CustomPackage from "./components/CustomPackage";
import AboutUs from "./components/AboutUs";
import PackageDetail from "./components/PackageDetail";
import { ProtectedRoute } from './components/ProtectedRoute';
import './App.css';

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
					<Route path="/:id" element={<ProtectedRoute component={PackageDetail} />}/>
				</Routes>
			</Router>
		</div>
    );
}

export default App;

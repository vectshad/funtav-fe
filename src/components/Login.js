import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../styles/Login.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Login({setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const loginUser = async() => {
        await axios.post('https://funtav-api.herokuapp.com/user/validate', {
                username: username,
                password: password
            })
            .then((response) => {
                console.log(response.data.name);
                setToken(response.data.name);
            }, (error) => {
                console.log(error);
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(username, password)
        loginUser();
    }
    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit} className="form-signin">       
                <h2 className="form-signin-heading">Please login</h2>
                <input type="text" onChange={e => setUsername(e.target.value)} className="form-control" name="username" placeholder="Username" required="" autoFocus="" />
                <input type="password" onChange={e => setPassword(e.target.value)} className="form-control" name="password" placeholder="Password" required=""/>      
                <div className='text-start ms-1 mb-2'>
                    <Link to={{pathname: `/register`}}>
                        <p>Register</p>
                    </Link>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
            </form>
        </div>
    )
}

export default Login

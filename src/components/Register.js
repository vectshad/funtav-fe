import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/Register.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const register = async() => {
        await axios.post('https://funtav-api.herokuapp.com/user', {
                name: name,
                email: email,
                username: username,
                password: password
            })
            .then((response) => {
                console.log(response.data);
                navigate("/");
            }, (error) => {
                console.log(error);
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(name, email, username, password);
        register();
    }
    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit} className="form-signin">       
                <h2 className="form-signin-heading">Register</h2>
                <input type="text" onChange={e => setName(e.target.value)} className="form-control" name="name" placeholder="Name" required=""/>   
                <input type="text" onChange={e => setEmail(e.target.value)} className="form-control" name="email" placeholder="Email" required=""/>   
                <input type="text" onChange={e => setUsername(e.target.value)} className="form-control" name="username" placeholder="Username" required="" />
                <input type="password" onChange={e => setPassword(e.target.value)} className="form-control" name="password" placeholder="Password" required=""/>      
                <div className='text-start ms-1 mb-2'>
                    <Link to={{pathname: `/login`}}>
                        <p>Login</p>
                    </Link>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>   
            </form>
        </div>
    )
}

export default Register

import React, { useContext } from 'react';
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const { logIn } = useContext(AuthContext);
    const [error, setError] = useState("");
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        // const password = form.password.value;
        logIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                form.reset();
                navigate(from, { replace: true });

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(toast(errorMessage));
            });

    };
    return (
        <div>
            <form className='w-50 mx-auto' onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label htmlFor="username" class="form-label">Email</label>
                    <input type="text" class="form-control" name='email' id="email" placeholder="Enter your username" />
                </div>
                <div class="mb-3">
                    <label htmlFor="password" class="form-label">Password</label>
                    <input type={showPassword ? "text" : "password"} class="form-control" id="password" name='password' placeholder="Enter your username"
                        value={password}
                        onChange={handlePasswordChange} />
                </div>
                <Button variant="outline-secondary" onClick={handlePasswordToggle}>
                    {showPassword ? <EyeSlash /> : <Eye />}
                </Button>
                <div>
                    New to Dragon News? <Link to='/register'>Create a new account</Link>
                </div>
                {/* <div className="d-grid gap-2 m-4"> */}

                    <input className='btn btn-primary' type="submit" value="LogIn" />
                {/* </div> */}
            </form>


        </div>
    );
};

export default Login;
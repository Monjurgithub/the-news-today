import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';

import { Link, Navigate, useLocation, useNavigate, } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProvider';
import { Button } from 'react-bootstrap';




const Register = () => {
    const [error, setError] = useState("");
    const [sucess, setSucess] = useState('')
    const { createUser } = useContext(AuthContext)
    // const auth = getAuth(app);
    // const [showPassword, setShowPassword] = useState(false);
    // const [password, setPassword] = useState("");
    // const [email, setEmail] = useState("");

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // console.log(email, password);
        
        setError("");
        if (password !== confirm) {
            setError(toast("Your password did not match"));
            return;
        }
        else if (password.length <= 7) {
            setError(toast("Your password must be 8 character or longer"));
            return;
        }
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                form.reset();
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(toast(errorMessage));
            }
            )

    }


    return (
        <div>
            <form onSubmit={handleSignUp} className='w-50 mx-auto'>
                <div class="mb-3">
                    <label htmlFor="username">Username</label>
                    <input type="text" name='userName' class="form-control" id="username" placeholder="Enter your username" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' class="form-control" id="email" placeholder="Enter your email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' class="form-control" id="password" placeholder="Enter your Password" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' class="form-control" id="confirmPassword" placeholder="Enter your Password" required />
                </div>
                {/* <Button variant="outline-secondary" onClick={handlePasswordToggle}>
                    {showPassword ? <EyeSlash /> : <Eye />}
                </Button> */}
                <div>
                    already have an account? <Link to='/login'>LogIn here</Link>
                </div>

                {/* <div className="d-grid gap-2 m-4"> */}

                <input className='btn btn-primary' type="submit" value="Register" />
                {/* </div> */}
            </form>
        </div>
    );
};

export default Register;
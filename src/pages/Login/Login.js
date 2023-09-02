import React from 'react';
import './Login.css';
import {useLoginMutation} from "../../redux/api";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import {setUserAndToken} from "../../redux/authSlice"; // Імпорт стилів

const Login = () => {
    const [login, {isFetching, isSuccess, isError}] = useLoginMutation();
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const email = form.elements?.email?.value;
        const password = form.elements?.password?.value;
        if (email && password) {
            const res = await login({email, password })
            if (res.error) {
                const message = res.error.data.message;
                toast.error(message, {
                    position: "top-right",
                    autoClose: false,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
                const {user, token} = res.data;
                console.log('res!!!', res)
                toast.success(`Authentication successful!`, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setTimeout(() => {
                    dispatch(setUserAndToken({ user, token }));
                }, 2000);
            }

        } else {
            toast.error('Please fill all fields', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    return (
        <div className="wrap-container">
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin} autoComplete="off">
                    <label>
                        Email:
                        <input type="email"
                               required
                               name="email"
                        />
                    </label>
                    <label>
                        Password:
                        <input type="password"
                               name="password"
                               required
                        />
                    </label>
                    <button type="submit"
                            disabled={isFetching}
                    >
                        {isFetching ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Login;


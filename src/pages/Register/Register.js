import React from 'react';
import './Register.css';
import {useRegisterMutation} from "../../redux/api";
import {toast, ToastContainer} from "react-toastify";
import {setUserAndToken} from "../../redux/authSlice";
import {useDispatch} from "react-redux";

const Register = () => {
    const [register, {isFetching}] = useRegisterMutation();
    const dispatch = useDispatch()
    const handleRegister = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.elements?.name?.value;
        const email = form.elements?.email?.value;
        const password = form.elements?.password?.value;
        if (email && password && name) {
            const res = await register({email, password, name})
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
                toast.success(`You have been successfully registered!`, {
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
                    dispatch(setUserAndToken({user, token}));
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
    }
    return (
        <div className="wrap-container">
            <div className="register-container">
                <h2>Register</h2>
                <form onSubmit={handleRegister} autoComplete="off">
                    <label>
                        Name:
                        <input type="text"
                               required
                               name="name"
                        />
                    </label>
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
                               required
                               name="password"
                        />
                    </label>
                    <button type="submit"
                            disabled={isFetching}
                    >
                        {isFetching ? 'Registering...' : 'Register'}
                    </button>
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Register;

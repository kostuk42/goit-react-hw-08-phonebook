import React, {useState} from 'react';
import './Login.css';
import {useLoginMutation} from "../../redux/api";
import {useDispatch} from "react-redux";
import {toast, ToastContainer} from "react-toastify";
import {setUserAndToken} from "../../redux/authSlice";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import 'react-toastify/dist/ReactToastify.css';
import Copyright from "../../components/Copyright";

const defaultTheme = createTheme();



const Login = () => {

    const [login, {isFetching, isError}] = useLoginMutation();
    const dispatch = useDispatch();
    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const email = form.elements?.email?.value;
        const password = form.elements?.password?.value;
        if (email && password) {
            const res = await login({email, password})
            if (res.error) {
                console.log('res error', res)
                const message = res.error.data?.message || 'Authentication failed! Please try again!';
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
                toast.success(`Authentication successful! Redirecting...`, {
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
    };

    return (
        <div>
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Log in
                        </Typography>
                        <Box component="form" onSubmit={handleLogin} noValidate sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                disabled={isFetching}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                {isFetching ? 'Signing In...' : 'Sign In'}
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                </Grid>
                                <Grid item>
                                    <Link href="register" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{mt: 8, mb: 4}}/>
                </Container>
            </ThemeProvider>
            <ToastContainer/>
        </div>
    );
};

export default Login;



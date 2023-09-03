import React, {lazy} from 'react';
import {Route, Routes} from "react-router-dom";
import {Layout} from "../Layout";
import {RestrictedRoute} from "../RestrictedRoute";
import {PrivateRoute} from "../PrivateRoute";

const HomePage = lazy(() => import('../../pages/Home/Home'));
const RegisterPage = lazy(() => import('../../pages/Register/Register'));
const LoginPage = lazy(() => import('../../pages/Login/Login'));
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts'));

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route
                    path="/register"
                    element={
                        <RestrictedRoute redirectTo="/contacts" component={<RegisterPage/>}/>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <RestrictedRoute redirectTo="/contacts" component={<LoginPage/>}/>
                    }
                />
                <Route
                    path="/contacts"
                    element={
                        <PrivateRoute redirectTo="/login" component={<ContactsPage/>}/>
                    }
                />
            </Route>
        </Routes>
    );
};

export default App;

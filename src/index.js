import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom';
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./redux/store";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/900.css';
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@emotion/react";
import './index.css';

const defaultTheme = createTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif'
    },
});

ReactDOM.render(
    <ThemeProvider theme={defaultTheme}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter basename={'/goit-react-hw-08-phonebook'}>
                    <App/>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </ThemeProvider>
    , document.getElementById('root'));


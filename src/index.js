import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom';
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter basename={'/goit-react-hw-08-phonebook'}>
                <App/>
            </BrowserRouter>
        </PersistGate>
    </Provider>
    , document.getElementById('root'));


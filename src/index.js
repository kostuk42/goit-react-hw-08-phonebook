import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './components/App/App';


ReactDOM.render(
    <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
            <App />
        </Provider>
    </PersistGate>
    , document.getElementById('root'));


import {configureStore} from '@reduxjs/toolkit';
import {contactsReducer} from './contactSlice';
import {filterReducer} from "./filterSlice";
import storage from 'redux-persist/lib/storage'
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from 'redux-persist'
import {combineReducers} from "redux";

const persistConfig = {
    key: 'root1',
    storage,
    whitelist: ['contacts'],
    blacklist: ['filter']
}

const rootReducer = combineReducers({
    filter: filterReducer, contacts: contactsReducer
})

const persistReducerContacts = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistReducerContacts,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

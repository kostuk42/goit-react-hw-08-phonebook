import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {filterReducer} from "./filterSlice";
import { setupListeners } from '@reduxjs/toolkit/query'
import {api} from "./api";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {authReducer} from "./authSlice";

const persistConfig = {
    key: 'auth',
    version: 1,
    storage,
    blacklist: [api.reducerPath, 'filter'],
};

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    filter: filterReducer,
    auth: authReducer,
});

const persistingReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistingReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(api.middleware),
});

export const persistor = persistStore(store);

// export const store = configureStore({
//     reducer: {
//         [api.reducerPath]: api.reducer,
//         filter: filterReducer
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(api.middleware),
// });

setupListeners(store.dispatch)

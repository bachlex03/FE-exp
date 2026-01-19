import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from './storage';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
import counterReducer from './slices/counterSlice';
import postsReducer from './slices/postsSlice';
import userReducer from './slices/userSlice';
import postsSagaReducer from './slices/postsSagaSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    posts: postsReducer,
    user: userReducer,
    postsSaga: postsSagaReducer,
});

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(sagaMiddleware),
    });

    sagaMiddleware.run(rootSaga);

    return store;
};


// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

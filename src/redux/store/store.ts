import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userDataReducer from "../features/userData";
import inboxDataReducers from "../features/InboxData"
import navbarDataReducers from "../features/navbarData"
import docsDataReducers from '../features/docsData';



const rootReducer = combineReducers({
  userData: userDataReducer ,
  inboxData: inboxDataReducers,
  navbarData: navbarDataReducers,
  docsData:docsDataReducers
});

const persistConfig = {
  key: 'clickMe',
  storage,
  whitelist: [ "userData" , "inboxData", "navbarData" , "docsData" ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

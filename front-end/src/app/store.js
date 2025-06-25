// combinando Reducer de carrinho e de usuário
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import cartReducer from "./cartRedux"
import userReducer from "./userRedux"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  version: 1,
  storage,
}

// reducers combinados
const rootReducer = combineReducers({ user: userReducer, cart: cartReducer })

// passando os reducers combinados para fazer persistência
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  // passando a persistencia com os reducers combinados
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)

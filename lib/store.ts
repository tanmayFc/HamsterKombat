import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import profileSlice from './features/counter/profileSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, profileSlice)

export const makeStore = () => {
  return configureStore({
    reducer: {
      profile: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),

  })
}

export const store = makeStore();
export const persistor = persistStore(store);

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

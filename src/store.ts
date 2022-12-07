import { persistStore } from 'redux-persist'

import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './root-reducer'

const store = configureStore({
  reducer: rootReducer
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export default store

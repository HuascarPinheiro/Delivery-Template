import { configureStore } from '@reduxjs/toolkit'

import restaurantsReducer from './reducers/restaurant'

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

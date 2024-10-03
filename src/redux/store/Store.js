import { configureStore } from '@reduxjs/toolkit'
import Counter from '../counterSlice/Counter'

export const Store = configureStore({
  reducer: {
    counter: Counter
  },
})
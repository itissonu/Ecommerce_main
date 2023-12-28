import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../redux_toolkit/userSlice'
import productReducer from '../redux_toolkit/productSlice'
import wishlistReducer from '../redux_toolkit/wishlistSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    allproducts:productReducer,
    wishlistproducts:wishlistReducer
  },
})
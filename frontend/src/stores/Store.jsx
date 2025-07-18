import { configureStore } from "@reduxjs/toolkit";
import productSlice from './reducers/ProductSlice.jsx';
import cartSlice from './reducers/CartSlice.jsx';
import userSlice from './reducers/UserSlice.jsx';

export const store = configureStore({
  reducer: {
    usersReducer: userSlice,
    productsReducer: productSlice,
    cartsReducer: cartSlice,
  },
});


import { configureStore } from '@reduxjs/toolkit';
import dishes from './dishesSlice';
import cart from './cartSlice';

const store = configureStore({
    reducer: {
        dishes,
        cart
    }
  })
  
  export default store;
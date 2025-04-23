import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../Features/Products/productsSlice";
import orderSlice from "../Features/Orders/OrderSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    order: orderSlice,
  },
});

export default store;

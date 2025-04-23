import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOrder } from "./OrderApi";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  error: null,
  orderResponse: null,
};

export const postOrder = createAsyncThunk(
  "order/postOrder",
  async (orderData) => {
    const result = await createOrder(orderData);
    return result;
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(postOrder.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(postOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.orderResponse = action.payload;
      })
      .addCase(postOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default orderSlice.reducer;

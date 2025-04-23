import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOrder } from "./OrderApi";

const initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  error: null,
  orderResponse: null,
  quantities: {},
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
  reducers: {
    setQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      state.quantities[productId] = quantity;
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      if (!state.quantities[id]) {
        state.quantities[id] = 1;
      } else {
        state.quantities[id]++;
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const current = state.quantities[productId] || 1;
      if (current > 1) {
        state.quantities[productId] = current - 1;
      }
    },
    resetQuantities: (state) => {
      state.quantities = {};
    },
  },

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

export const { setQuantity, incrementQuantity, decrementQuantity, resetQuantities } =
  orderSlice.actions;

export default orderSlice.reducer;

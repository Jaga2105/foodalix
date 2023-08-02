import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    totalItemsCount: 0,
    deliveryAddress: {},
    paymentMethod: {},
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.items[action.payload.id];
      state.items[action.payload.id] = { ...action.payload, quantity: 1 };
      state.totalItemsCount = state.totalItemsCount + 1;
    },
    updateItem: (state, action) => {
      //     const item = state.items[action.payload.id];
      //   //   const quantity =
      //   //     item && item.hasOwnProperty("quantity")
      //   //       ? state.items[action.payload.id]?.quantity + 1
      //   //       : 1;
      //     state.items[action.payload.id] = { ...action.payload, quantity:1 };
      //     state.cartItemIds.push(action.payload.id);
      //   //   state.totalItemsCount = state.totalItemsCount + 1;
      if (Object.keys(state.items).length > Object.keys(action.payload).length){
        state.totalItemsCount = state.totalItemsCount - 1;
      }
      state.items = action.payload;
    },
    removeItem: (state, action) => {
      const item = state.items[action.payload];
      if (!item) return;
      if (item.quantity > 1) {
        item.quantity -= 1;
        state.totalItemsCount--;
      } else {
        state.totalItemsCount--;
        delete state.items[action.payload];
      }
    },
    clearCart: (state) => {
      state.items = {};
      state.totalItemsCount = 0;
    },
    updateDeliveryAddress: (state, action) => {
      state.deliveryAddress = action.payload;
    },
    updatePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
  },
});

export const {
  addItem,
  removeItem,
  updateItem,
  clearCart,
  updateDeliveryAddress,
  updatePaymentMethod,
} = cartSlice.actions;

export default cartSlice.reducer;

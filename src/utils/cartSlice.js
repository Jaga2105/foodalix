import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    orderItems:{},
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
    updateOrderItems: (state)=>{
      state.orderItems=state.items;
    },
    clearOrderItems: (state)=>{
      state.orderItems={};
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
  updateOrderItems,
  clearOrderItems,
  clearCart,
  updateDeliveryAddress,
  updatePaymentMethod,
} = cartSlice.actions;

export default cartSlice.reducer;

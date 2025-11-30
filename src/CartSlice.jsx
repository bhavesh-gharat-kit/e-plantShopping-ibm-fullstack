import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],  // Every cart item will have: name, image, description, cost, quantity
  },

  reducers: {
    // ===========================
    //        ADD ITEM
    // ===========================
    addItem: (state, action) => {
      const plant = action.payload;

      // Check if item already exists
      const existingItem = state.items.find(
        (item) => item.name === plant.name
      );

      if (existingItem) {
        // If already in cart, increase quantity
        existingItem.quantity += 1;
      } else {
        // Add NEW item with quantity = 1
        state.items.push({
          ...plant,
          quantity: 1,
        });
      }
    },

    // ===========================
    //     REMOVE ITEM
    // ===========================
    removeItem: (state, action) => {
      const plantName = action.payload;  // only name is passed

      // Filter out the item based on name
      state.items = state.items.filter(
        (item) => item.name !== plantName
      );
    },

    // ===========================
    //    UPDATE QUANTITY
    // ===========================
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;

      // Find the matching item
      const item = state.items.find((i) => i.name === name);

      if (item) {
        item.quantity = amount;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

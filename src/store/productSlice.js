import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log('action', action.payload); // bookshelf = {id: 1, title: 'Harry potter',}
      const itemFound = state.products.find(el => el.id === action.payload.id);
      console.log('itemFound', itemFound);
      if (itemFound) {
        const newProducts = state.products.map(item => {
          if (item.id === action.payload.id) {
            return {...item, quantity: item.quantity + 1};
          } else {
            return item;
          }
        });
        state.products = newProducts;
      } else {
        state.products = [...state.products, action.payload];
      }
    },
    increaseQty: (state, action) => {
      const newProducts = state.products.map(item => {
        if (item.id === action.payload) {
          return {...item, quantity: item.quantity + 1};
        } else {
          return item;
        }
      });
      state.products = newProducts;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addProduct, increaseQty} = productSlice.actions;

export default productSlice.reducer;

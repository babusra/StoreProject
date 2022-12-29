import {createSlice, current} from '@reduxjs/toolkit';
import { IProduct } from '../../models/ProductModel';

interface State {
  products:IProduct[],
  totalProduct:number
}

const initialState:State = {
  products: [
    {productName: 'Product 1', productAmount: 0},
    {productName: 'Product 2', productAmount: 0},
    {productName: 'Product 3', productAmount: 0},
    {productName: 'Product 4', productAmount: 0},
    {productName: 'Product 6', productAmount: 0},
    {productName: 'Product 7', productAmount: 0},
    {productName: 'Product 8', productAmount: 0},
    {productName: 'Product 9', productAmount: 0},
    {productName: 'Product 10', productAmount: 0},
    {productName: 'Product 11', productAmount: 0},
  ],
  totalProduct: 0,
};

const ProductSlice = createSlice({
  name: 'product',
  initialState: {value: initialState},
  reducers: {
    productAmountIncrement: (state, action) => {
      let currentProduct = state.value.products.slice();
      currentProduct.map(item => {
        if (item.productName === action.payload.product.productName) {
          item.productAmount++;
          console.log(item.productAmount);
        }
      });



      var toplam = 0;

      for (var i = 0; i < state.value.products.length; i++) {
        toplam += Number(state.value.products[i].productAmount);
        state.value.totalProduct = toplam;
      }
    },
    productAmountDecrement: (state, action) => {
      let currentProduct = state.value.products.slice();
      currentProduct.map(item => {
        if (item.productName === action.payload.product.productName) {
          if (item.productAmount !== 0) {
            item.productAmount--;
          } else {
            item.productAmount = 0;
          }
        }
      });


      
      var toplam = 0;

      for (var i = 0; i < state.value.products.length; i++) {
        toplam += Number(state.value.products[i].productAmount);
        state.value.totalProduct = toplam;
      }
    },
    productReset: (state, action) => {
      let currentProduct = state.value.products.slice();
      currentProduct.map(item => {
        if (item.productName === action.payload.item.productName) {
          item.productAmount = 0;
        }
      });


      var toplam = 0;

      for (var i = 0; i < state.value.products.length; i++) {
        toplam += Number(state.value.products[i].productAmount);
        state.value.totalProduct = toplam;
      }
    },
  },
});

export default ProductSlice.reducer;
export const {productAmountDecrement, productAmountIncrement, productReset} =
  ProductSlice.actions;

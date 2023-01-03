import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  product: any;
  variant: any;
  checkout: any;
  email: string;
  shippingAddress: any;
}

const initialState: ProductState = {
  product: null,
  variant: null,
  checkout: null,
  email: "",
  shippingAddress: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<any>) => {
      state.product = action.payload;
    },
    setVariant: (state, action: PayloadAction<any>) => {
      state.variant = action.payload;
    },
    setCheckout: (state, action: PayloadAction<any>) => {
      state.checkout = action.payload;
    },
    setEmail: (state, action: PayloadAction<any>) => {
      state.email = action.payload;
    },
    setShipping: (state, action: PayloadAction<any>) => {
      state.shippingAddress = action.payload;
    },
  },
});

export const { setProduct, setVariant, setCheckout, setEmail, setShipping } =
  productSlice.actions;

export default productSlice.reducer;

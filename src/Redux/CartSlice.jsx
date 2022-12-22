import { createSlice } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";

const products = [...Array(50)].map(()=> ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.datatype.number({min: 10, max: 1000}),
    rating: faker.datatype.number({min: 0, max: 5}),
    stock: faker.datatype.number({min: 0, max: 20}),
    fastDelivery: faker.datatype.boolean(),
    image: faker.image.image(),
}))

const initialState = {
    products: products,
    cart: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            return {...state, cart:[...state.cart, {...action.payload, qty: 1}]}
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((val)=> val.id !== action.payload.id)
        },

        changeQuantity: (state, action) => {
            state.cart = state.cart.filter((val) => val.id === action.payload.id? val.qty = action.payload.qty : val.qty)
        }
    }
})

export const {addToCart, removeFromCart, changeQuantity} = cartSlice.actions;

export default cartSlice.reducer;
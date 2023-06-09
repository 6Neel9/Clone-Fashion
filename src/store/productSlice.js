import { createSlice } from "@reduxjs/toolkit"
// import Products from "../components/Products";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUSES.IDLE
    },
    reducers: {
        setProducts(state, action) {

            state.data = action.payload;
        },
        setStatus(state,action){
            state.status = action.payload;
        }
    }
})



export const { setProducts,setStatus} = productSlice.actions
export default productSlice.reducer;


// Thunks

export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        // const prop = getState()
        try {
            const res = await fetch('https://api.escuelajs.co/api/v1/products');
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDLE))
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}
import { createSlice } from '@reduxjs/toolkit'

const initialState = [];
// export const getBasketTotal(add)=>{
//   add?.r
// }

export const cartTotal=(basket)=> basket?.reduce((amount,item)=> item.price + amount,0)

 const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   add(state,action){
    state.push(action.payload);
   },
   remove(state, action){
    return state.filter(item=>item.id!==action.payload)
   },

   }
  },
)

// Action creators are generated for each case reducer function
export const { add, remove } = cartSlice.actions

export default cartSlice.reducer
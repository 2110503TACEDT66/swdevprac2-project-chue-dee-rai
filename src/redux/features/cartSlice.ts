import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type CartState = {
	carItems: ReservationItem[]
}

const initialState: CartState = {carItems:[]}

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers:{
		addReservation: (state, action: PayloadAction<ReservationItem>)=>{

			state.carItems.push(action.payload)
			// const cars = createBooking({reservetionItem:action.payload.payload, carid:action.payload.payload.car})
		},
		removeReservation: (state, action:PayloadAction<ReservationItem>)=>{
			const remainItems = state.carItems.filter(obj =>{
				return ( (obj.car !== action.payload.car))
			})
			state.carItems = remainItems
		}
	}
})

export const {addReservation, removeReservation} = cartSlice.actions
export default cartSlice.reducer
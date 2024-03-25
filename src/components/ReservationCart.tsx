'use client'
import { removeReservation } from "@/redux/features/cartSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import deleteBooking from "@/libs/deleteBooking";
import updateBooking from "@/libs/updateBooking";
import Link from "next/link";
import { useEffect } from "react";

export default function ReservationCart( { bookingJson ,token} : { bookingJson:BookingJson, token:string }){
	
	

	// c = useAppSonst carItemselector( (state) =>
	// 	state.cartSlice.carItems )
	// const dispatch = useDispatch<AppDispatch>();

	const DeleteBooking = async (bookingId:string) => {
		try{
			
			const cars = await deleteBooking({ bookingId:bookingId, token:token})
				
		}
		catch(error){
			console.log(error)
		}
		
	}
	
	// useEffect (()=>{
	// 	window.location.reload();
	// }, [cars]);

	return (
		<>
			<button className="p-5" onClick={()=>{window.location.reload();}}>Refetch</button>
			<div className="space-y-5">
				{
					bookingJson?
					bookingJson.data.map((reservationItem:ReservationItem) => (
						<div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key = {reservationItem._id}>
							<div className="text-xl">{reservationItem._id}</div>
							<div className="text-sm">Pick-up : {reservationItem.startDate} </div>
							<div className="text-sm">Return :  {reservationItem.endDate}</div>
							{/* <div className="text-md">Duration: {reservationItem.startDate}</div> */}
							<div className="flex flex-row space-x-2">
								<button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" onClick={()=>{DeleteBooking(reservationItem._id)}}>
									Remove from Cart
								</button>
								<Link href={`/updatereservation?id=${reservationItem._id}`}>
									<button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">
										Update Reservation
									</button>
								</Link>
							</div>
						</div>
					))
					:
					<div>
						There No Booking
					</div>
				}
			</div>
		</>

	);
}
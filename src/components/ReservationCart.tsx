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
			<div className="mt-[40px]">
			{/* <button className="mx-5 p-2 border rounded-xl bg-violet-200 hover:bg-violet-500" onClick={()=>{window.location.reload();}}>Refetch</button> */}
			<div className="space-y-5">
				{
					bookingJson?
					bookingJson.data.map((reservationItem:ReservationItem) => (
						<div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key = {reservationItem._id}>
							<div className="text-xl">{reservationItem.car.name}</div>
							<div className="text-sm">Pick-up : {reservationItem.startDate} </div>
							<div className="text-sm">Return :  {reservationItem.endDate}</div>
							{/* <div className="text-md">Duration: {reservationItem.startDate}</div> */}
							<div className="flex flex-row space-x-2 my-1">
								<button className="block rounded-md bg-purple-600 hover:bg-red-600 px-3 py-2 text-white shadow-sm" onClick={()=>{DeleteBooking(reservationItem._id)}}>
									Remove from Cart
								</button>
								<Link href={`/updatereservation?id=${reservationItem._id}`}>
									<button className="block rounded-md bg-sky-600 hover:bg-indigo-800 px-3 py-2 text-white shadow-sm">
										Edit Booking
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
			</div>
		</>

	);
}
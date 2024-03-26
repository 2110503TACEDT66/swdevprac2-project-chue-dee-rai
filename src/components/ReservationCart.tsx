'use client'
import deleteBooking from "@/libs/deleteBooking";
import Link from "next/link";

export default function ReservationCart( { bookingJson ,token, role} : { bookingJson:BookingJson, token:string , role:string}){

	const DeleteBooking = async (bookingId:string) => {
		try{
			const cars = await deleteBooking({ bookingId:bookingId, token:token})
		}
		catch(error){
			console.log(error)
		}
		window.location.reload();
	}

	return (
		<>
			<div className="mt-[40px]">
			<div className="space-y-5">
				{
					bookingJson?
					bookingJson.data.map((reservationItem:ReservationItem) => (
						<div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key = {reservationItem._id}>
							{
								(role == 'admin')?<div className="text-xl">{reservationItem.user}</div>
								:null
							}
							
							<div className="text-xl">Car:{reservationItem.car.name}</div>
							<div className="text-sm">Pick-up : {reservationItem.startDate} </div>
							<div className="text-sm">Return :  {reservationItem.endDate}</div>
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
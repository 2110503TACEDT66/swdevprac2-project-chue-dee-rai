"use client"
import LocationDateReserve from "@/components/LocationDateReserve";
import { redirect, useSearchParams } from "next/navigation";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import updateBooking from "@/libs/updateBooking";
import { isRedirectError } from "next/dist/client/components/redirect";



export default function Reservations () {

	const urlParams = useSearchParams();
	const bookingid = urlParams.get('id')
	const {data: session} = useSession()
	const token = session?.user.token;
	const router=useRouter();


	const caritem:CarItem = {
		_id: "",
		name: "",
		address: "",
		district : "",
		province :"",
		postalcode :"",
		tel: "",
		region :"",
		provider:"",
		licensePlate:"",
		image:"",
	}

	const UpdateBooking = async () => {
		// "use server"
		// const startDate = addBookingForm.get("start")
		// const endDate = addBookingForm.get("end")
		// const createdAt = addBookingForm.get("createAt")

		// try{
			// console.log("hello world")
			if (pickupDate && returnDate&& token && bookingid){
				
				const item:ReservationItem = {
					_id:"",
					startDate : dayjs(pickupDate).format('YYYY/MM/DD'),
					endDate : dayjs(returnDate).format('YYYY/MM/DD'),
					user: "",
					car: caritem,
					createdAt : dayjs(new Date().toDateString()).format('YYYY/MM/DD')
				}
				const cars = await updateBooking( {reservetionItem: item, bookingid: bookingid, token:token} )
				// dispatch(addReservation(item))
				console.log("redirect")
		        router.push("/cart")
			}
		// } catch(error) {
        //     if(isRedirectError(error)){
        //         throw error;
        //     }
		// 	console.log(error)
		// }
		// revalidateTag("bookings")
		// redirect("/cart")
	}

	const [pickupDate, setPickupDate] = useState<Dayjs|null>(null);
	// const [pickupLocation, setPickupLocation] = useState<string>('BKK');
	const [returnDate, setReturnDate] = useState<Dayjs|null>(null);
	// const [returnLocation, setReturnLocation] = useState<string>('BKK');

	return (
		<main className="w-[100%] flex flex-col items-center space-y-4 mt-[40px]">
			<div className="text-xl font-medium">Update Booking</div>
			{/* <div className="text-xl font-medium">Car: {model}</div> */}


			<div className="w-auto bg-slate-100 rounded-xl p-10 content-center flex flex-col">
				<div className="text-medium text-left text-gray-600">Pick-Up Date</div>
				<LocationDateReserve onDateChange = {(value:Dayjs)=>{setPickupDate(value)}} /*onLocationChange={(value:string) => {setPickupLocation(value)}}*//>
				<div className="text-medium text-left text-gray-600">Return Date</div>
				<LocationDateReserve onDateChange={(value:Dayjs)=>{setReturnDate(value)}} /*onLocationChange={(value:string)=>{setReturnLocation(value)}}*//>
				{/* <input type="time">dada</input> */}
				<button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" onClick={UpdateBooking}>
					Update this booking
				</button>
			</div>
			
			
			
			
		</main>
	);
}



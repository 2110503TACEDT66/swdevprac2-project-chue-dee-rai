"use client"
import LocationDateReserve from "@/components/LocationDateReserve";
import { redirect, useSearchParams } from "next/navigation";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

import createBooking from "@/libs/createBooking";
import { useRouter } from "next/navigation";



export default function Reservations () {

	const router = useRouter();
	const urlParams = useSearchParams();
	const cid = urlParams.get('id')
	const model = urlParams.get('model')
	const userid = urlParams.get('userid')
	const token = urlParams.get('token')
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

	const addBooking = async () => {
		// "use server"
		// const startDate = addBookingForm.get("start")
		// const endDate = addBookingForm.get("end")
		// const createdAt = addBookingForm.get("createAt")

			if (cid && model && pickupDate && returnDate && userid && token){
				
				const item:ReservationItem = {
					_id:"",
					startDate : dayjs(pickupDate).format('YYYY/MM/DD'),
					endDate : dayjs(returnDate).format('YYYY/MM/DD'),
					user: userid,
					car: caritem,
					createdAt : dayjs(new Date().toDateString()).format('YYYY/MM/DD')
				}
				const cars = await createBooking({reservetionItem: item, carid: cid, token:token})
				// dispatch(addReservation(item))
				
				router.push("/cart")
			}
		
	}

	// const session = await getServerSession(authOptions)

	// if(!session || !session.user.token) return null
	
	// const profile = await getUserProfile(session.user.token);
	// var createdAt = new Date(profile.data.createdAt);
	

	// const dispatch = useDispatch<AppDispatch>()

	// const makeReservation = async ()=> {
	// 	if (cid && model && pickupDate && returnDate && userid && token){
	// 		const item:ReservationItem = {
	// 			startDate : dayjs(pickupDate).format('YYYY/MM/DD'),
	// 			endDate : dayjs(returnDate).format('YYYY/MM/DD'),
	// 			user: userid,
	// 			car: cid,
	// 			createdAt : dayjs(new Date().toDateString()).format('YYYY/MM/DD')
	// 		}
			
	// 		// dispatch(addReservation(item))
	// 		redirect("/cart")
	// 	}
	// }

	const [pickupDate, setPickupDate] = useState<Dayjs|null>(null);
	// const [pickupLocation, setPickupLocation] = useState<string>('BKK');
	const [returnDate, setReturnDate] = useState<Dayjs|null>(null);
	// const [returnLocation, setReturnLocation] = useState<string>('BKK');

	return (
		<main className="w-[100%] flex flex-col items-center space-y-4 mt-[20px]">
			<div className="text-xl font-medium">New Booking</div>
			<div className="text-xl font-medium">Car: {model}</div>

			<div className="w-auto bg-slate-100 rounded-xl p-10 content-center flex flex-col">
			<form action = {addBooking} className="w-fit space-y-2">
				<div className="text-medium text-gray-600 text-center">Pick-Up Date</div>
				<LocationDateReserve onDateChange = {(value:Dayjs)=>{setPickupDate(value)}} /*onLocationChange={(value:string) => {setPickupLocation(value)}}*//>
				<div className="text-medium text-gray-600 text-center">Return Date</div>
				<LocationDateReserve onDateChange={(value:Dayjs)=>{setReturnDate(value)}} /*onLocationChange={(value:string)=>{setReturnLocation(value)}}*//>
				{/* <input type="time">dada</input> */}
			</form>
			<button className="block rounded-xl bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm my-7" onClick={addBooking}>
				Reserve this Car
			</button>
			</div>
			
		</main>
	);
}



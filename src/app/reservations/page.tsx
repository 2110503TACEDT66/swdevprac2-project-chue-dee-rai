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
			if(pickupDate && returnDate && pickupDate > returnDate){
				alert("Pick-Up Date should come before Return Date");
			}
			else if (cid && model && pickupDate && returnDate && userid && token && (pickupDate < returnDate)){
				
				const item:ReservationItem = {
					_id:"",
					startDate : dayjs(pickupDate).format('YYYY/MM/DD'),
					endDate : dayjs(returnDate).format('YYYY/MM/DD'),
					user: userid,
					car: caritem,
					createdAt : dayjs(new Date().toDateString()).format('YYYY/MM/DD')
				}
				const cars = await createBooking({reservetionItem: item, carid: cid, token:token})
				
				router.push("/cart")
			}
	}

	const [pickupDate, setPickupDate] = useState<Dayjs|null>(null);
	const [returnDate, setReturnDate] = useState<Dayjs|null>(null);

	return (
		<main className="w-[100%] flex flex-col items-center space-y-4 mt-[20px]">
			<div className="text-xl font-medium">New Booking</div>
			<div className="text-xl font-medium">Car: {model}</div>

			<div className="w-auto bg-slate-100 rounded-xl p-10 content-center flex flex-col">
			<form action = {addBooking} className="w-fit space-y-2">
				<div className="text-medium text-gray-600 text-center">Pick-Up Date</div>
				<LocationDateReserve onDateChange = {(value:Dayjs)=>{setPickupDate(value)}}/>
				<div className="text-medium text-gray-600 text-center">Return Date</div>
				<LocationDateReserve onDateChange={(value:Dayjs)=>{setReturnDate(value)}}/>
			</form>
			<button className="block rounded-xl bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm my-7" onClick={addBooking}>
				Reserve this Car
			</button>
			</div>
			
		</main>
	);
}



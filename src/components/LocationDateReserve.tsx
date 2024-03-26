"use client"
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { Dayjs } from "dayjs";


export default function LocationDateReserve ({onDateChange, /*onLocationChange*/} : {onDateChange:Function, /*onLocationChange:Function*/}) {

	const [reserveDate, setReserveDate] = useState<Dayjs|null>(null)
	const [location, setLocation] = useState('BKK')


	return (
		<div className="bg-slate-0 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">

			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DatePicker className="bg-white" value = {reserveDate} onChange={(value)=>{setReserveDate(value); onDateChange(value)}}/>
			</LocalizationProvider>
		</div>
	);
}
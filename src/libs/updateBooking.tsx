export default async function updateBooking( { reservetionItem, bookingid, token } : { reservetionItem: ReservationItem, bookingid: string, token: string } ){
	console.log(reservetionItem.endDate)
	console.log(reservetionItem.startDate)
	const response = await fetch(`${process.env.BACKEND_URL}/api/v1/bookings/${bookingid}`,{
		method: "PUT",
		headers: {
			"Content-Type":"application/json",
			authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
            startDate : reservetionItem.startDate,
            endDate : reservetionItem.endDate
		}),
	})
	console.log(response)

	if (!response.ok){
		throw new Error("Failed to update-booking");
	}

	return await response.json();
}
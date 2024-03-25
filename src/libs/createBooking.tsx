export default async function createBooking( { reservetionItem, carid, token } : { reservetionItem: ReservationItem, carid: string, token: string } ){
	console.log(reservetionItem.endDate)
	console.log(reservetionItem.startDate)
	const response = await fetch(`http://localhost:5000/api/v1/cars/${carid}/bookings`,{
		// mode: 'no-cors',
		method: "POST",
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
		throw new Error("Failed to add-booking");
	}

	return await response.json();
}
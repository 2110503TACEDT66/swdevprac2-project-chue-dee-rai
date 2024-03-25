export default async function createBooking( { reservetionItem, carid, token } : { reservetionItem: ReservationItem, carid: string, token: string } ){
	console.log(reservetionItem.endDate)
	console.log(reservetionItem.startDate)
	const response = await fetch(`${process.env.BACKEND_URL}/api/v1/cars/${carid}/bookings`,{
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

	if (response.status == 400){
		alert("Cannot booking more than 3 booking");
	} else if (!response.ok){
		throw new Error("Failed to add-booking");
	}

	return await response.json();
}
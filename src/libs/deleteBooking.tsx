export default async function deleteBooking( { bookingId, token } : { bookingId: string, token: string } ){

	console.log(bookingId)
	const response = await fetch(`http://localhost:5000/api/v1/bookings/${bookingId}`,{
		method: "DELETE",
		headers: {
			authorization: `Bearer ${token}`,
			"Content-Type":"application/json"
		},
		
	})

	if (!response.ok){
		throw new Error("Failed to delete-booking");
	}

	return await response.json();
}
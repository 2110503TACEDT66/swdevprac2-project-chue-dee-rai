export default async function createCar( { carItem, token } : { carItem: CarItem, token: string } ){
	const response = await fetch(`${process.env.BACKEND_URL}/api/v1/cars`,{
		// mode: 'no-cors',
		method: "POST",
		headers: {
			"Content-Type":"application/json",
			authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			name: carItem.name,
			address: carItem.address,
			district : carItem.district,
			province :carItem.province,
			postalcode :carItem.postalcode,
			tel: carItem.tel,
			region :carItem.region,
			licensePlate:carItem.licensePlate,
			image:carItem.image
		}),
	})
	

	if (!response.ok){
		throw new Error("Failed to add-booking");
	}

	return await response.json();
}
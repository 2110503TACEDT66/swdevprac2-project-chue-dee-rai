import { resolve } from "path"

export default async function getCars(){

	await new Promise( (resolve) => setTimeout(resolve, 1000))
	
	const response = await fetch("http://localhost:5000/api/v1/cars", {next:{tags:['cars']}})
	if (!response.ok){
		throw new Error("Failed to fetch cars")
	}

	const cars :CarJson = await response.json();

	return cars
}
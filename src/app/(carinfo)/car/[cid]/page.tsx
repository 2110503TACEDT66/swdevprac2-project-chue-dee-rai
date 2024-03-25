import Image from "next/image"
import getCar from "@/libs/getCar"
import Link from "next/link";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function CarDetailPage( {params} : {params: {cid:string}}) {
	
	const carDetail = await getCar(params.cid)

	const session = await getServerSession(authOptions)

	/*if(!session || !session.user.token) {
		redirect('/api/auth/signin')
	}*/
	if(!session || !session.user.token) return null
	
	const profile = await getUserProfile(session.user.token);

	/**
	 * Mock Data for Demonstration Only
	 */
	// const mockCarRepo = new Map()
	// mockCarRepo.set("001",{name: "Honda Civic", image: "/img/civic.jpg"})
	// mockCarRepo.set("002",{name: "Honda Accord", image: "/img/accord.jpg"})
	// mockCarRepo.set("003",{name: "Toyota Fortuner", image: "/img/fortuner.jpg"})
	// mockCarRepo.set("004",{name: "Tesla Model 3", image: "/img/tesla.jpg"})


	return (
		<main className="text-center p-5">
			<h1 className="text-lg font-medium">{carDetail.data.model}</h1>
			<div className="flex flex-row my-5">
				<Image src = {carDetail.data.image} alt = 'Car Image' width = {0} height={0} sizes = "100vw" className="rounded-lg w-[30%] bg-black"/>
				<div className="text-md mx-5 text-left spacing-y-4">{carDetail.data.name}
					{/* <div className="text-md mx-5">Doors: {carDetail.data.doors}</div>
					<div className="text-md mx-5">Seats: {carDetail.data.seats}</div>
					<div className="text-md mx-5">Large Bags: {carDetail.data.largebags}</div>
					<div className="text-md mx-5">Small Bags: {carDetail.data.smallbags}</div>
					<div className="text-md mx-5">Daily Rental Rate: {carDetail.data.dayRate} (insurance included)</div> */}

						
					{/* <div className="text-md mx-5">Name : {carDetail.data.name}</div> */}
					<div className="text-md mx-5">Address : {carDetail.data.address}</div>
					<div className="text-md mx-5">District : {carDetail.data.district}</div>
					<div className="text-md mx-5">Postalcode : {carDetail.data.postalcode}</div>
					<div className="text-md mx-5" >Province : {carDetail.data.province}</div>
					<div className="text-md mx-5">Telephone : {carDetail.data.tel}</div>
					<div className="text-md mx-5">LicensePlate : {carDetail.data.licensePlate}</div>
				
					<div></div>
					<Link href={`/reservations?id=${params.cid}&model=${carDetail.data.name}&userid=${profile.data._id}&token=${session.user.token}`}>
						<button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">
							Make Reservation
						</button>
					</Link>
					
				</div>
			</div>
		</main>
	);
}


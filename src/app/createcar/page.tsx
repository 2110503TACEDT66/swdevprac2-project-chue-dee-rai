"use client"

import userSignUp from "@/libs/userSignup";
import { getServerSession } from "next-auth";
import { redirect, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import createCar from "@/libs/createCar";
import { useSession } from "next-auth/react";


export default function Register( ) {

	const urlParams = useSearchParams();
	const userid = urlParams.get('id')
	const {data:session} = useSession();
	if(!session || !session.user.token) return null

	const addCar = async (addCarForm : FormData)=>{
		
		const name = addCarForm.get("name")?.toString();
		const address = addCarForm.get("address")?.toString();
		const district = addCarForm.get("district")?.toString();
		const province = addCarForm.get("province")?.toString();
		const postalcode = addCarForm.get("postalcode")?.toString();
		const tel = addCarForm.get("tel")?.toString();
		const region = addCarForm.get("region")?.toString();
		const licensePlate = addCarForm.get("lice")?.toString();
		const image = addCarForm.get("image")?.toString();
		
		if(userid && name && address && district && province && postalcode && tel &&region &&licensePlate && image){
			const item:CarItem = {
				_id:"",
				name: name,
				address: address,
				district : district,
				province :province,
				postalcode :postalcode,
				tel: tel,
				region :region,
				provider:userid,
				licensePlate:licensePlate,
				image:image
			}
			
			const user = await createCar({carItem:item, token: session.user.token})
			redirect("/car")
		}
		
		

	}

	return (
		<form action = {addCar} className="rounded-3xl mx-[20%] my-10 bg-slate-50 flex flex-col text-center justify-items-center items-center" >
			<div className="text-xl font-bold text-blue-700">New Car</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor = 'name'>Name </label>
				<input type = 'text' required id = "name" name = "name" placeholder="Name" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor = 'address'>Address </label>
				<input type = 'text' required id = "address" name = "address" placeholder="Address" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor = 'district'>District </label>
				<input type = 'text' required id = "district" name = "district" placeholder="District" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor = 'province'>Province </label>
				<input type = 'text' required id = "province" name = "province" placeholder="Province" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor = 'postalcode'>Postalcode </label>
				<input type = 'text' required id = "postalcode" name = "postalcode" placeholder="Postalcode" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor = 'tel'>Tel. </label>
				<input type = 'text' required id = "tel" name = "tel" placeholder="telephone number" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor = 'region'>Region </label>
				<input type = 'text' required id = "region" name = "region" placeholder="region" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor = 'lice'>LicensePlate </label>
				<input type = 'text' required id = "lice" name = "lice" placeholder="license plate" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor = 'image'>ImgSrc </label>
				<input type = 'text' required id = "image" name = "image" placeholder="URL" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
			</div>
			<button type="submit" className="bg-indigo-500 hover:bg-indigo-700 text-white p-2 rounded">Add Car</button>
		</form>
	);
}
import userSignUp from "@/libs/userSignup";
import { redirect, useRouter } from "next/navigation";

export default function Register( ) {


	const addUser = async (addUserForm : FormData)=>{
		"use server"
		const name = addUserForm.get("name")?.toString()
		const email = addUserForm.get("email")?.toString()
		const password = addUserForm.get("password")?.toString();
		const tel = addUserForm.get("tel")?.toString();
		if(name && email && password && tel){
			const item:User = {
				name: name,
				email: email,
				password: password,
				tel: tel
			}
			const user = await userSignUp(item)
			redirect("/api/auth/signin")
		}
		
		

	}

	return (
		<form action = {addUser} >
			<div className="text-xl text-blue-700">Register</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor = 'name'>Name</label>
				<input type = 'text' required id = "name" name = "name" placeholder="Name" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor = 'email'>Email</label>
				<input type = 'text' required id = "email" name = "email" placeholder="Email" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor = 'password'>Password</label>
				<input type = 'password' required id = "password" name = "password" placeholder="password" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor = 'tel'>Tel.</label>
				<input type = 'tel' required id = "tel" name = "tel" placeholder="telephone number" className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus:outline-none focus:border-blue-400"/>
			</div>
			<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">Register</button>
		</form>
	);
}
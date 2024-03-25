import getCars from "@/libs/getCars";
import CarCatalog from "@/components/CarCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { useSession } from "next-auth/react";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";


export default async function Car()
{

	const session = await getServerSession(authOptions);
	if (!session || !session.user.token) return null;
	const profile = await getUserProfile(session?.user.token)
	console.log(profile.data)
	const cars = getCars();


	return(
		<main className="text-center p-5">
			{
				(profile.data.role == "admin")?
				<Link href = {`/createcar?id=${profile.data._id}`} className="absolute left-10">
					<button className="bg-indigo-200 hover:bg-indigo-800 hover:text-white px-5 py-2 rounded-lg hover:shadow-lg shadow-md text-purple">Add Car</button>
				</Link>
				: null
			}
			<h1 className="text-xl font-medium">Select Your Travel Partner</h1>
			
			<Suspense fallback = { <p> Loading ... <LinearProgress/></p>}>
				<CarCatalog carJson = {cars}/>
			</Suspense>
		</main>
	);
}
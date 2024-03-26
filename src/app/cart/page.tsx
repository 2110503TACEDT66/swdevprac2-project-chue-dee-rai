import ReservationCart from "@/components/ReservationCart";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import getBookings from "@/libs/getBookings";
import { redirect } from "next/navigation";
import getUserProfile from "@/libs/getUserProfile";

export default async function CartPage (){
	
	const session = await getServerSession(authOptions);

	if(!session || !session.user.token){
		redirect('/api/auth/signin')
	}
	
	const booking = await getBookings(session.user.token);
	const profile = await getUserProfile(session.user.token);
	return (
		<main>
			<ReservationCart bookingJson = {booking} token = {session.user.token} role = {profile.data.role}></ReservationCart>
		</main>
	);
}
// 'use client'
import ReservationCart from "@/components/ReservationCart";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import getBookings from "@/libs/getBookings";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";



export default async function CartPage (){
	
	const session = await getServerSession(authOptions);

	if(!session || !session.user.token){
		redirect('/api/auth/signin')
	}
	
	const booking = await getBookings(session.user.token);
	return (
		<main>
			<ReservationCart bookingJson = {booking} token = {session.user.token}></ReservationCart>
		</main>
	);
}
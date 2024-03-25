import ReservationMenu from "@/components/ReservationMenu";
import styles from './reservations.module.css'
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function CarLayout ({children} : {children:React.ReactNode}) {
	return (
		<div>
			<Suspense fallback = { <p> Loading ... <LinearProgress/></p>}>
				{children}
			</Suspense>
		</div>
	); 
}
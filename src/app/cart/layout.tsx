import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function CartLayout ({children} : {children:React.ReactNode}) {
	return (
		<div>
			<Suspense fallback = { <p className="text-center text-2xl m-4"> Loading ... <LinearProgress/></p>}>
				{children}
			</Suspense>
		</div>
	); 
}
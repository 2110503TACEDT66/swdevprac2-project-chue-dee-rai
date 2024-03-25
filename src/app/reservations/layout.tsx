export default function ReservationLayout ({children} : {children:React.ReactNode}) {
	return (
		<div className="flex flex-row p-[10px]">
			{children}
		</div>
	); 
}
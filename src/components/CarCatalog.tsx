import Link from "next/link";
import ProductCard from "./ProductCard";

export default async function CarCatalog({carJson}: {carJson:Promise<CarJson>}){
	
	const carJsonReady = await carJson
	
	return (
		<>
		We have {carJsonReady.count} models
		<div style = {{margin : "20px", display: "flex", flexDirection: "row",
			flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around", padding: "10px"}}>
			{
				carJsonReady.data.map((carItem:CarItem)=>(
					<Link href={`/car/${carItem._id}`} className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 " >
						<ProductCard carName={carItem}/>
					</Link>
				))
			}
			</div>
		</>
	);
}
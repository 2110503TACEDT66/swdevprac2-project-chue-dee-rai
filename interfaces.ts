interface BookingJson {
	success: boolean,
    count: number,
    data: ReservationItem[]
}


interface ReservationItem {
	_id: string
	startDate : string
	endDate : string
	user: string
	car: CarItem
	createdAt : string
}
interface CarJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: CarItem[]
  }

interface CarItem {
	_id: string
	name: string
	address: string
	district : string
	province :string
	postalcode :string
	tel: string
	region :string
	provider:string
	licensePlate:string
	image:string
}

interface User {
	name: string
	email: string
	password: string
	tel: string
}
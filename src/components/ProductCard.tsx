import { useReducer } from 'react';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

export default function ProductCard( {carName, onCompare} : {carName:CarItem, onCompare?: Function}) {

	return (
		<InteractiveCard /*contentName={carName.name}*/>
			
			<div className='w-full h-[70%] relative rounded-t-lg'>
				<Image src = {carName.image}
				alt = 'Product Picture'
				fill = {true}
				className='object-cover rounded-t-lg'/>
			</div>
			<div className='w-full h-[30px] p-[10px] text-left'>
				{carName.name}
			</div>
			{
				onCompare? <button className='block h-[10%] text-sm rounded-md bg-sky-600 hover:bg-indigo-600 mx-2 px-1 py-1 text-white shadow-sm' onClick={(e)=>{e.stopPropagation(); e.preventDefault();onCompare(carName)} }>Compare</button> : ''
			}
		</InteractiveCard>
	);
}
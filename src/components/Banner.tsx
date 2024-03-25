'use client'
import { useState } from 'react'
import styles from './banner.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Banner () {
	const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg']
	const [index, setIndex] = useState(0)
	const router = useRouter()
	
	const {data: session} = useSession()
	// console.log(session?.user)
	
	return (
		<div className={styles.banner} onClick={ ()=>{setIndex(index+1) }}>
			<Image src = {covers[index%3]} 
			alt = 'cover'
			fill = {true}
			priority
			className='object-cover'/>
			<div className={styles.bannerText}>
				<h1 className='text-6xl my-3 text-white font-medium font-serif'>Car Rental</h1>
				<h3 className='text-2xl text-white font-serif'>Get out and explore with Us</h3>
			</div>
			{/* <button className='bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent' onClick={(e) => {e.stopPropagation(); router.push('/car')}}>
				Select Your Travel Partner NOW
			</button> */}
		</div>
	);
}
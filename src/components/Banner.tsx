'use client'
import { useState } from 'react'
import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner () {
	const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg']
	const [index, setIndex] = useState(0)
	
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
		</div>
	);
}
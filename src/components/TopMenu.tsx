import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/libs/auth';
import { Link } from '@mui/material';
import getUserProfile from '@/libs/getUserProfile';

export default async function TopMenu(){

	const session = await getServerSession(authOptions)
	var profile = {data:{name:"",role:""}};
	if (session && session.user.token) {
		profile = await getUserProfile(session?.user.token);
	}
	// console.log(session)

	return (
		<div className={styles.menucontainer}>
			<Link href='/'>
			<Image src = '/img/logo.png' className={styles.logoimg}
			alt = 'logo'
			width = {0}
			height = {0}
			sizes= '100vh'/></Link>
			<TopMenuItem title = 'Select Car' pageRef = '/car'/>
			
			
			<div className='flex flex-row absolute right-0 h-full'>
				{
					(profile.data.role == "admin")?<div className='w-[120px] text-indigo-200 text-center text-sm mt-auto mb-auto'>
						Admin</div>:null
				}
				<TopMenuItem title= 'Booking' pageRef='/cart'/>
				{
					session? <Link href = "/api/auth/signout">
						<div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
							Sign-Out of {profile.data.name}
						</div>
					</Link>
					: <Link href = "/api/auth/signin">
						<div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
							Sign-In
						</div>
					</Link>
				}
			</div>
		</div>
	);
}
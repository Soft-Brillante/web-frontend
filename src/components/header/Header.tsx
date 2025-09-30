import { HiMenuAlt3 } from 'react-icons/hi'
import { Button } from '../ui/button'
import Image from 'next/image'

function Header() {
	return (
		<div className='bg-primary w-full shadow flex justify-between gap-[32px] items-center z-50 sticky top-0 px-[16px] md:px-[120px]'>
			<Image
				src='/images/logo-white.png'
				alt='Soft Brillante'
				width={0}
				height={0}
				sizes='vws'
				className='h-[72px] w-auto object-contain '
			/>
			<div className='hidden md:flex items-center gap-[82px]'>
				<ul className='md:gap-[32px] text-[16px] text-white md:flex'>
					<li>Home</li>
					<li>Courses</li>
					<li>Careers</li>
					<li>Blog</li>
					<li>About</li>
				</ul>
				<Button variant='destructive'>Enroll Now</Button>
			</div>
			<div className='md:hidden'>
				<HiMenuAlt3 className='text-[32px] text-primary' />
			</div>
		</div>
	)
}

export default Header

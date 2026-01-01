'use client'

import { HiMenuAlt3 } from 'react-icons/hi'
import { Button } from '../ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import EnrollModal from '../modals/EnrollModal'

function Header() {
	const pathname = usePathname()
	const [isModalOpen, setIsModalOpen] = useState(false)

	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Courses', href: '/courses' },
		{ name: 'About Us', href: '/about' },
		{ name: 'Contact', href: '/contact' },
	]

	return (
		<>
			<div className='bg-primary w-full shadow flex justify-between gap-[32px] items-center z-50 sticky top-0 px-[16px] md:px-[120px]'>
				<Link href='/'>
					<img
						src='/images/logo-white.png'
						alt='Soft Brillante'
						className='h-[72px] w-auto object-contain cursor-pointer'
					/>
				</Link>
				<div className='hidden md:flex items-center gap-[82px]'>
					<ul className='md:gap-[32px] text-[16px] text-white md:flex'>
						{navLinks.map(link => (
							<Link key={link.href} href={link.href}>
								<li
									className={`${
										pathname === link.href
											? 'font-bold border-b-2 border-white'
											: 'opacity-80 hover:opacity-100 transition-opacity'
									}`}
								>
									{link.name}
								</li>
							</Link>
						))}
					</ul>
					<Button variant='destructive' onClick={() => setIsModalOpen(true)}>
						Enroll Now
					</Button>
				</div>
				<div className='md:hidden'>
					<HiMenuAlt3 className='text-[32px] text-white' />
				</div>
			</div>

			<EnrollModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
		</>
	)
}

export default Header

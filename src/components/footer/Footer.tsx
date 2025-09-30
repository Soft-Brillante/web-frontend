import Image from 'next/image'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

function Footer() {
	return (
		<div className='bg-destructive p-[16px] flex flex-col items-center gap-[16px] md:gap-[32px] md:py-[32px]'>
			<div className='flex items-center gap-[8px]'>
				<Image
					src='/images/logo-white.png'
					alt='Soft Brillante'
					width={0}
					height={0}
					sizes='vws'
					className='h-[72px] w-auto object-contain'
				/>
				<p className='text-white text-[16px] border-l pl-[4px] italic'>
					Your shorcut to <br />
					boss mode
				</p>
			</div>
			<div className='flex flex-col items-center gap-[8px]'>
				<p className='text-[#B2B3CF] text-[14px]'>
					Subscribe to get our Newsletter
				</p>
				<div className='flex gap-[8px] items-center'>
					<Input
						type='email'
						className='text-white'
						placeholder='Enter your email address'
					/>
					<Button variant='secondary'>Subscribe</Button>
				</div>
			</div>
			<div className='flex flex-col items-center gap-[16px]'>
				<div className='text-[14px] flex-wrap text-[#B2B3CF] flex justify-center'>
					<p className='px-[16px] border-r border-[#B2B3CF]'>Careers</p>
					<p className='px-[16px] border-r border-[#B2B3CF]'>Privacy Policy</p>
					<p className='px-[16px]'>Terms & Conditions</p>
				</div>
				<p className='text-[14px] text-[#B2B3CF]'>
					© 2025 Soft Brillante Inc. All rights reserved.
				</p>
			</div>
		</div>
	)
}

export default Footer

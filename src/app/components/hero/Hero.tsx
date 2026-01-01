import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FaCirclePlay } from 'react-icons/fa6'
import { HiChartBarSquare } from 'react-icons/hi2'
import { IoCalendarSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'

function Hero() {
	return (
		<div className='bg-primary relative w-full '>
			<div className='px-[16px] md:px-[120px] grid md:grid-cols-2 gap-[16px]'>
				<div className='flex w-full z-40 h-full justify-center flex-col gap-[24px] py-[24px]'>
					<h1 className='text-3xl md:text-5xl capitalize font-bold text-white w-[80%]'>
						Kerala&apos;s First <span className='text-[#ff9100]'>AI Integrated</span> <br />
						<span className='text-[#ff9100]'>MERN Stack</span> Training
					</h1>
					<p className='text-secondary text-[16px] md:w-[70%]'>
						Soft Brillante is bringing the future of coding to Mananthavady.
						Learn to build apps faster with AI. Be part of our first batch.
					</p>
					<div className='flex gap-[24px] items-center'>
						<Link href='/contact'>
							<Button className='' variant='secondary'>
								Pre-Book Your Seat
							</Button>
						</Link>
						<Button className='group text-white' variant='ghost'>
							<FaCirclePlay className='text-white text-[32px] group-hover:text-primary' />
							Watch How It Works
						</Button>
					</div>
				</div>
				<div className='flex w-full relative'>
					<Image
						src='/images/hero-student-transparent.png'
						alt='Happy South Indian Student'
						width={0}
						height={0}
						sizes='vws'
						className='h-[400px] mx-auto md:h-[500px] w-auto max-w-full object-contain relative z-10 drop-shadow-2xl [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_100%)]'
					/>
					<div className='rounded-[16px] animate-bounce items-center bg-white/80 py-[8px] px-[12px] h-fit w-fit absolute top-1/4 z-20 flex gap-[16px]'>
						<div className='size-[40px] flex bg-[#23BDEE] rounded-[8px]'>
							<IoCalendarSharp className='m-auto text-white text-[30px]' />
						</div>
						<div className='flex flex-col justify-between'>
							<h3 className='text-[#595959] text-[16px]'>250k</h3>
							<p className='text-[12px] text-[#545567]'>Assisted Students</p>
						</div>
					</div>
					<div className='size-[40px] flex bg-[#F25471] absolute right-1/4 top-1/8 rounded-[8px] z-20'>
						<HiChartBarSquare className='m-auto text-white text-[35px]' />
					</div>
					<div className='absolute gap-[8px] items-center flex flex-col top-3/5 z-[40] left-3 h-fit w-fit py-[8px] px-[12px] bg-white/80 rounded-[16px]'>
						<div className='flex items-center gap-[16px]'>
							<Image
								src='/images/vishnu.jpg'
								alt=''
								width={0}
								height={0}
								sizes='vws'
								className='size-[40px] border border-green-500 rounded-full object-contain '
							/>
							<div className='flex flex-col justify-between'>
								<h3 className='text-[#595959] text-[16px]'>
									Get your demo class
								</h3>
								<p className='text-[12px] text-[#545567]'>Schedule asap</p>
							</div>
						</div>
						<Button className='bg-[#D8587E] hover:bg-[#D8587E]/80 w-fit h-fit text-[16px]'>
							Join Now
						</Button>
					</div>
					<div className='rounded-[16px] items-center animate-pulse bg-white/80 py-[8px] px-[12px] h-fit w-fit absolute top-2/5 right-2 md:right-1/12 z-20 flex gap-[16px]'>
						<div className='size-[40px] flex bg-[#F88C3D] rounded-[8px]'>
							<MdEmail className='m-auto text-white text-[30px]' />
						</div>
						<div className='flex flex-col justify-between'>
							<h3 className='text-[#595959] text-[16px]'>Congratulations</h3>
							<p className='text-[12px] text-[#545567]'>Grab your 25% off</p>
						</div>
					</div>
				</div>
			</div>
			<Image
				src='/images/Subtract.png'
				alt=''
				width={0}
				height={0}
				sizes='vws'
				className='w-full absolute bottom-0 left-0 z-30'
			/>
		</div>
	)
}

export default Hero

import { Button } from '@/components/ui/button'
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
					<h1 className='md:text-[54px] text-[32px] capitalize font-bold text-white w-[80%] md:leading-[68px]'>
						<span className='text-[#F1A13A]'>Studying Online</span> is now much
						easier
					</h1>
					<p className='text-secondary text-[16px] md:w-[70%]'>
						Soft Brillante is an interesting platform that will teach you in
						more an interactive way
					</p>
					<div className='flex gap-[24px] items-center'>
						<Button className='' variant='secondary'>
							Join Now
						</Button>
						<Button className='group' variant='ghost'>
							<FaCirclePlay className='text-white text-[32px] group-hover:text-primary' />
							Watch How It Works
						</Button>
					</div>
				</div>
				<div className='flex w-full relative'>
					<Image
						src='/images/hero-girl.png'
						alt=''
						width={0}
						height={0}
						sizes='vws'
						className='h-[400px] mx-auto md:h-[500px] w-auto object-contain'
					/>
					<div className='rounded-[16px] animate-bounce items-center bg-white/80 py-[8px] px-[12px] h-fit w-fit absolute top-1/4 flex gap-[16px]'>
						<div className='size-[40px] flex bg-[#23BDEE] rounded-[8px]'>
							<IoCalendarSharp className='m-auto text-white text-[30px]' />
						</div>
						<div className='flex flex-col justify-between'>
							<h3 className='text-[#595959] text-[16px]'>250k</h3>
							<p className='text-[12px] text-[#545567]'>Assisted Students</p>
						</div>
					</div>
					<div className='size-[40px] flex bg-[#F25471] absolute right-1/4 top-1/8 rounded-[8px]'>
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
					<div className='rounded-[16px] items-center animate-pulse bg-white/80 py-[8px] px-[12px] h-fit w-fit absolute top-2/5 right-2 md:right-1/12 flex gap-[16px]'>
						<div className='size-[40px] flex bg-[#F88C3D] rounded-[8px]'>
							<MdEmail className='m-auto text-white text-[30px]' />
						</div>
						<div className='flex flex-col justify-between'>
							<h3 className='text-[#595959] text-[16px]'>Congratulations</h3>
							<p className='text-[12px] text-[#545567]'>
								Your admission completed
							</p>
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

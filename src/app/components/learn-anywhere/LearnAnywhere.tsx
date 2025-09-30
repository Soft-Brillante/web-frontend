'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

function LearnAnywhere() {
	return (
		<section className='py-16 bg-white'>
			<div className='md:px-30 mx-auto px-4 grid md:grid-cols-2 gap-12'>
				<div className='flex flex-col w-[90%] relative'>
					<div className='size-16 bg-teal-500 rounded-full absolute -top-4 -left-2'></div>
					<h2 className='text-2xl md:text-3xl text-destructive font-bold z-30 mb-4'>
						Learn Anywhere,
						<span className='text-primary'> Stay on Track</span>
					</h2>
					<p className='text-gray-500 mb-6 z-30'>
						At Soft Brillante, we handle the entire learning journey—from
						scheduling and session management to progress tracking—so you can
						focus solely on mastering MERN and full-stack development. Every
						class, assignment, and resource is carefully planned and delivered
						online, ensuring you never miss a session or wonder what comes next.
						With clear weekly goals, automated reminders, and on-demand access
						to recorded lessons, you will always know exactly where you stand
						and what to do to keep moving forward—no missed classes, no
						confusion, and absolutely no guesswork.
					</p>
					<Button
						variant={'default'}
						className='font-semibold w-fit inline-block'
					>
						Learn more
					</Button>
					<div className='size-4 bg-teal-500 rounded-full absolute bottom-16 right-2'></div>
				</div>

				<div className='relative rounded-xl group'>
					<div className='size-40 absolute left-0 -top-6 rounded-2xl z-20 bg-primary'></div>
					<div className='relative z-30 w-full flex justify-center items-center'>
						<Image
							src='/images/class-room.png'
							alt='Virtual classroom'
							width={600}
							height={400}
							className='w-[90%] z-30 h-80 shadow-md hover:scale-105 transition duration-300 object-cover rounded-2xl'
						/>
					</div>
					<div className='size-40 absolute right-0 -bottom-6 rounded-2xl z-20 bg-[#252641]'></div>
				</div>
			</div>
		</section>
	)
}

export default LearnAnywhere

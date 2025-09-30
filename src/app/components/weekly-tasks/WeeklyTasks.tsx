import Image from 'next/image'
import React from 'react'

function WeeklyTasks() {
	return (
		<div className='px-4 py-16px md:px-30 items-center flex flex-col gap-4'>
			<div className='w-full grid md:grid-cols-2 gap-4 md:gap-12'>
				<div className='flex flex-col gap-4 justify-center items-center'>
					<h1 className='text-destructive text-2xl font-bold md:text-3xl'>
						Structured Weekly <span className='text-primary'>Tasks</span>
					</h1>
					<p className='text-gray-500 text-center max-w-[70%]'>
						At the start of each week you will receive detailed tasks,
						milestones, and practice assignments designed to build on the
						previous lessons. Every task aligns with real-world development
						scenarios, helping you apply concepts immediately while tracking
						your progress through an intuitive dashboard and automated
						reminders.
					</p>
				</div>
				<Image
					src='/images/tasks.png'
					alt=''
					width={0}
					height={0}
					sizes='vws'
					className='w-full h-auto object-contain'
				/>
			</div>
		</div>
	)
}

export default WeeklyTasks

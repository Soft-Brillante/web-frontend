import Image from 'next/image'

function OneOnOne() {
	return (
		<div className='px-4 md:px-30 py-16 grid md:grid-cols-2'>
			<Image
				src='/images/one-on-one.png'
				alt=''
				width={0}
				height={0}
				sizes='vws'
				className='w-full h-auto object-contain'
			/>
			<div className='flex flex-col gap-4 justify-center items-center'>
				<h1 className='text-destructive text-2xl font-bold md:text-3xl'>
					One on One <span className='text-primary'>Mentorship</span>
				</h1>
				<p className='text-gray-500 text-center max-w-[70%]'>
					Get dedicated guidance tailored to your goals. Work directly with an
					experienced mentor in private sessions where you can ask questions,
					review code, and overcome challenges specific to your learning path.
					Your mentor tracks your progress, provides actionable feedback, and
					helps you stay motivated—from mastering tricky concepts to preparing
					for real-world projects and interviews.
				</p>
			</div>
		</div>
	)
}

export default OneOnOne

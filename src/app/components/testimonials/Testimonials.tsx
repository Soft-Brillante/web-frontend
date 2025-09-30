import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'

function Testimonials() {
	return (
		<section className='py-16 pb-30 bg-white'>
			<div className='px-4 md:px-30 grid md:grid-cols-2 gap-8 items-center'>
				<div>
					<p className='uppercase text-sm tracking-wider text-gray-400 mb-2'>
						Testimonial
					</p>
					<h2 className='text-2xl md:text-3xl text-destructive font-bold mb-4'>
						What They Say?
					</h2>
					<p className='text-gray-500 mb-6'>
						Soft Brillante has earned the trust of thousands of learners
						worldwide, with consistently positive feedback from our students.
						Many aspiring developers and professionals have accelerated their
						careers through our structured training and mentorship. How about
						you? Share your experience and let us know how Soft Brillante has
						helped you on your journey.
					</p>
					<Button
						variant={'outline'}
						className='inline-flex capitalize items-center px-6 py-2 border border-teal-500 text-teal-600 rounded-full hover:bg-teal-500 hover:text-white transition'
					>
						Write your assessment
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={2}
							stroke='currentColor'
							className='w-5 h-5 ml-2'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M13 7l5 5m0 0l-5 5m5-5H6'
							/>
						</svg>
					</Button>
				</div>

				{/* Right Content */}
				<div className='relative flex justify-center'>
					{/* Profile Image */}
					<div className='relative w-80 h-80'>
						<Image
							src='/images/rosy.png'
							alt='Happy user'
							fill
							className='object-cover rounded-xl'
						/>
						<Button
							variant='ghost'
							className='absolute top-10 right-0 translate-x-1/2 rounded-full p-3 bg-white shadow-lg hover:bg-primary hover:text-white'
						>
							<FaArrowRight className='text-3xl' />
						</Button>
					</div>

					{/* Review Card Overlay */}
					<div className='absolute bottom-0 right-0 transform translate-y-1/3 bg-white shadow-lg rounded-xl p-4 md:w-96'>
						<p className='text-gray-700 italic mb-3'>
							“Thank you so much, Soft Brillante. This is exactly the kind of
							training I was looking for. The structured sessions and guidance
							save me so much time and effort. Soft Brillante is truly what my
							learning journey has been missing.”
						</p>
						<p className='font-semibold text-gray-800'>Gloria Rose</p>
						<div className='flex items-center justify-between mt-2'>
							<div className='flex text-yellow-400'>
								{Array.from({ length: 5 }).map((_, i) => (
									<svg
										key={i}
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 24 24'
										className='w-4 h-4'
									>
										<path d='M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.173L12 18.896l-7.335 3.85 1.401-8.173L.132 9.21l8.2-1.192z' />
									</svg>
								))}
							</div>
							<span className='text-sm text-gray-500'>12 reviews at Yelp</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Testimonials

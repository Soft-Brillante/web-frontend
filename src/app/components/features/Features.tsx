'use client'

import FeatureCard from './FeatureCard'

function Features() {
	return (
		<section className='py-16 bg-white w-full'>
			<div className='px-[16px] md:px-[120px] mx-auto text-center'>
				<h2 className='text-3xl md:text-3xl font-bold mb-4'>
					Empowering Tech Careers{' '}
					<span className='text-primary'>Through Excellence</span>
				</h2>
				<p className='text-gray-600 max-w-3xl mx-auto mb-12'>
					At Soft Brillante, we are committed to shaping the future of
					technology education. Our comprehensive training programs are designed
					to bridge the gap between academic learning and industry requirements,
					ensuring our students are well-prepared for successful careers in
					technology.
				</p>

				<div className='grid w-full md:grid-cols-2 gap-8'>
					<FeatureCard
						title='OUR MISSION'
						buttonText='Start a class today'
						image='/images/feature-2.png'
						onClick={() => console.log('Instructor clicked')}
					/>
					<FeatureCard
						title='OUR VISION'
						buttonText='Experience our courses'
						image='/images/fueature-1.png'
						onClick={() => console.log('Student clicked')}
					/>
				</div>
			</div>
		</section>
	)
}

export default Features

import NumberCard from './NumberCard'

const data = [
	{ number: '2k+', label: 'Students Trained' },
	{ number: '300+', label: 'Successful Placements' },
	{ number: '50+', label: 'Corporate Partners' },
	{ number: '20+', label: 'Industry Experts' },
	{ number: '10+', label: 'Global Certifications' },
]

function OurSuccess() {
	return (
		<div className='px-[16px] md:px-[120px] py-[52px] flex flex-col items-center gap-[42px] w-full'>
			<div className='flex flex-col gap-[12px] w-full items-center'>
				<h1 className='text-3xl font-bold text-center'>Our Success</h1>
				<p className='text-gray-500 md:w-[70%] text-[14px] text-center'>
					At Soft Brillante, success is defined by the growth and
					accomplishments of our students. From gaining cutting-edge technical
					skills to landing roles in leading IT companies or launching their own
					ventures, our graduates showcase the strength of our training and
					guidance. We focus on practical, industry-relevant learning, expert
					mentorship, and career support—helping every learner turn ambition
					into a rewarding career in technology.
				</p>
			</div>
			<div className='grid md:grid-cols-5 gap-[52px] w-full flex-1'>
				{data.map((item, index) => (
					<NumberCard key={index} item={item} />
				))}
			</div>
		</div>
	)
}

export default OurSuccess

interface SpecialityCardProps {
	item: {
		title: string
		icon: React.ElementType
		color: string
		description: string
	}
}

function SpecialityCard({ item }: SpecialityCardProps) {
	return (
		<div className='flex flex-col items-center shadow-lg p-[32px] rounded-[16px] gap-[16px]'>
			<div
				className='p-[20px] rounded-full -translate-y-1/2 shadow'
				style={{ backgroundColor: item.color }}
			>
				<item.icon className='text-[52px] text-white' />
			</div>
			<h1 className='text-center text-[20px]'>{item.title}</h1>
			<p className='text-center text-gray-500 text-[16px]'>
				{item.description}
			</p>
		</div>
	)
}

export default SpecialityCard

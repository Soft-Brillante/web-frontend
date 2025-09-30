interface NumberCardProps {
	item: {
		number: string
		label: string
	}
}

function NumberCard({ item }: NumberCardProps) {
	return (
		<div className='flex flex-col items-center'>
			<h1 className='text-[32px] font-semibold bg-gradient-to-r from-primary leading-[26px] via-purple-500 to-pink-500 bg-clip-text text-transparent'>
				{item.number}
			</h1>
			<p className='text-[18px] capitalize text-nowrap'>{item.label}</p>
		</div>
	)
}
export default NumberCard

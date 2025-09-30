import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

interface CardProps {
	title: string
	buttonText: string
	image: string
	onClick?: () => void
}

function FeatureCad({ title, buttonText, image, onClick }: CardProps) {
	return (
		<div
			className='relative rounded-xl overflow-hidden shadow-md group cursor-pointer'
			onClick={onClick}
		>
			<Image
				src={image}
				alt={title}
				width={0}
				height={0}
				sizes='vws'
				className='w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105'
			/>
			<div className='absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-4'>
				<h3 className='text-lg font-semibold mb-3 uppercase tracking-wide'>
					{title}
				</h3>
				<Button
					variant={'ghost'}
					className='px-5 py-2 border border-white rounded-full hover:bg-white hover:text-black transition'
				>
					{buttonText}
				</Button>
			</div>
		</div>
	)
}

export default FeatureCad

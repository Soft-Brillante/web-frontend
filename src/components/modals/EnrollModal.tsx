'use client'

import { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import RegistrationForm from '../forms/RegistrationForm'

interface EnrollModalProps {
	isOpen: boolean
	onClose: () => void
}

export default function EnrollModal({ isOpen, onClose }: EnrollModalProps) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	if (!isOpen) return null

	return (
		<div className='fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300'>
			<div
				className='bg-white w-full max-w-[500px] rounded-[32px] shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300'
				onClick={e => e.stopPropagation()}
			>
				{/* Close Button */}
				<button
					onClick={onClose}
					className='absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-10'
				>
					<IoClose size={24} className='text-gray-500' />
				</button>

				<div className='p-8 md:p-10'>
					<div className='mb-8'>
						<h2 className='text-[28px] font-bold text-gray-900 mb-2'>
							Pre-Register Now
						</h2>
						<p className='text-gray-500'>
							Fill out the form below to secure your spot and unlock the 50%
							launch offer.
						</p>
					</div>

					<RegistrationForm isModal={true} />
				</div>
			</div>

			{/* Backdrop click to close */}
			<div className='absolute inset-0 -z-10' onClick={onClose} />
		</div>
	)
}

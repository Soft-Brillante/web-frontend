import Image from 'next/image'
import { CgLivePhoto } from 'react-icons/cg'
import { PiUserSoundBold } from 'react-icons/pi'
import { TbAccessible } from 'react-icons/tb'

function OnlineSpec() {
	return (
		<div className='flex flex-col w-full items-center gap-4 px-4 py-16 md:px-30'>
			<h1 className='text-destructive text-2xl font-bold md:text-3xl'>
				Live & Recorded <span className='text-primary'>Sessions</span>
			</h1>
			<p className='text-gray-500 max-w-3xl text-center mb-8'>
				Join interactive classes in real time and revisit them anytime. Our live
				sessions keep you engaged with hands-on coding, Q&A, and mentor
				feedback, while every class is instantly recorded and added to your
				dashboard. Whether you want to revise a concept, catch up on a missed
				lecture, or learn at your own pace, you will always have on-demand
				access to the full library of lessons.
			</p>
			<div className='grid md:grid-cols-2 gap-4  w-full'>
				<Image
					src='/images/meeting.png'
					width={0}
					height={0}
					sizes='vws'
					alt=''
					className='w-full h-auto object-contain'
				/>
				<ul className='flex flex-col md:p-8 gap-4 list-disc text-gray-600'>
					<li className='flex gap-8 items-center'>
						<div className='p-2 bg-white shadow-lg shadow-black/50 rounded-full flex items-center justify-center'>
							<CgLivePhoto className='text-destructive text-3xl' />
						</div>
						<div className='flex flex-col'>
							<p className='text-gray-500'>
								<span className='font-bold text-destructive'>
									Interactive Classes:
								</span>{' '}
								Join dynamic live coding sessions, interactive Q&A hours, and
								in-depth collaborative code reviews where you can share your
								screen, discuss solutions with peers, and get immediate feedback
								from experienced mentors.
							</p>
						</div>
					</li>
					<li className='flex gap-8 items-center'>
						<div className='p-2 bg-white shadow-lg shadow-black/50 rounded-full flex items-center justify-center'>
							<TbAccessible className='text-destructive text-3xl' />
						</div>
						<div className='flex flex-col'>
							<p className='text-gray-500'>
								<span className='font-bold text-destructive'>
									On-Demand Access:
								</span>{' '}
								Every session is carefully recorded and stored in your personal
								dashboard, so you can revisit any topic at your own pace—whether
								you are reviewing key concepts, catching up on a missed class,
								or reinforcing skills—anytime and from anywhere you have an
								internet connection.
							</p>
						</div>
					</li>
					<li className='flex gap-8 items-center'>
						<div className='p-2 bg-white shadow-lg shadow-black/50 rounded-full flex items-center justify-center'>
							<PiUserSoundBold className='text-destructive text-3xl' />
						</div>
						<div className='flex flex-col'>
							<p className='text-gray-500'>
								<span className='font-bold text-destructive'>
									Expert Mentorship:
								</span>{' '}
								Our trainers offer individualized guidance tailored to your
								learning style and progress, holding regular performance reviews
								to highlight strengths, address challenges, and provide
								actionable feedback that keeps you moving steadily toward your
								career goals.
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default OnlineSpec

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Blog {
	id: number
	title: string
	description: string
	image: string
	tag: string
	link: string
}

const blogs: Blog[] = [
	{
		id: 1,
		title:
			'Soft Brillante Launches New Online Training Modules for MERN & Full-Stack Learners',
		description:
			'Our latest modules are designed to make coding simpler, more structured, and fully project-driven. Students can now track weekly tasks and access recorded sessions anytime...',
		image: '/images/mern.png',
		tag: 'NEWS',
		link: '#',
	},
	{
		id: 2,
		title:
			'Soft Brillante Expands With New Mentorship Programs to Support Students Worldwide',
		description:
			'One-on-one mentorship and performance reviews are now a core part of our curriculum, helping learners achieve career-ready skills faster...',
		image: '/images/blog-1.png',
		tag: 'UPDATE',
		link: '#',
	},
	{
		id: 3,
		title:
			'Why Students Around the World Choose Soft Brillante for IT Training',
		description:
			'From live sessions to structured weekly tasks, learners share how Soft Brillante’s approach saves time, builds confidence, and prepares them for real projects...',
		image: '/images/blog-2.png',
		tag: 'STUDENT STORIES',
		link: '#',
	},
	{
		id: 4,
		title:
			'Soft Brillante Introduces Career-Ready Projects for Full-Stack Training',
		description:
			'Every module now ends with a hands-on project, giving learners portfolio-ready work and practical experience that employers value...',
		image: '/images/blog-3.png',
		tag: 'NEWS',
		link: '#',
	},
]

function Blogs() {
	return (
		<section className='py-16 bg-white'>
			<div className='px-4 md:px-30'>
				{/* Section Header */}
				<div className='text-center mb-12'>
					<h2 className='text-2xl md:text-3xl font-bold text-destructive mb-2'>
						Lastest News and Resources
					</h2>
					<p className='text-gray-500'>
						See the impact Soft Brillante has made in the world of IT training.
					</p>
				</div>

				<div className='grid md:grid-cols-2 gap-10'>
					{/* Left featured blog */}
					<div className='rounded-xl overflow-hidden shadow-sm'>
						<Image
							src={blogs[0].image}
							alt={blogs[0].title}
							width={600}
							height={400}
							className='w-full h-64 object-cover object-top'
						/>
						<div className='p-5'>
							<span className='inline-block text-xs px-3 py-1 bg-teal-100 text-teal-600 rounded-full mb-3'>
								{blogs[0].tag}
							</span>
							<h3 className='text-lg font-semibold mb-2'>{blogs[0].title}</h3>
							<p className='text-gray-600 mb-3'>{blogs[0].description}</p>
							<Link
								href={blogs[0].link}
								className='text-teal-600 font-medium hover:underline'
							>
								Read more
							</Link>
						</div>
					</div>

					{/* Right side list */}
					<div className='space-y-6 w-full'>
						{blogs.slice(1).map(blog => (
							<div
								key={blog.id}
								className='flex items-start space-x-4 rounded-xl overflow-hidden'
							>
								<div className='relative w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden'>
									<Image
										src={blog.image}
										alt={blog.title}
										fill
										className='object-cover'
									/>
									<span className='absolute bottom-2 left-2 text-xs px-2 py-1 bg-teal-100 text-teal-600 rounded-full'>
										{blog.tag}
									</span>
								</div>
								<div>
									<h4 className='font-semibold text-gray-800 mb-1 text-sm md:text-base'>
										{blog.title}
									</h4>
									<p className='text-gray-500 text-sm'>{blog.description}</p>
								</div>
							</div>
						))}
						<div className='w-full flex justify-end'>
							<Button variant={'outline'} className='w-fit'>
								View all
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Blogs

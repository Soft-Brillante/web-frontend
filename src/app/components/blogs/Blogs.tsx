import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { blogPosts } from '@/lib/blog-data'

function Blogs() {
	// Use only the first 4 posts for the home page section
	const featuredPosts = blogPosts.slice(0, 4)

	if (featuredPosts.length === 0) return null

	const mainPost = featuredPosts[0]
	const sidePosts = featuredPosts.slice(1)

	return (
		<section className='py-16 bg-white'>
			<div className='px-4 md:px-30'>
				{/* Section Header */}
				<div className='text-center mb-12'>
					<h2 className='text-2xl md:text-3xl font-bold text-destructive mb-2'>
						Latest News and Resources
					</h2>
					<p className='text-gray-500'>
						See the impact Soft Brillante has made in the world of IT training.
					</p>
				</div>

				<div className='grid md:grid-cols-2 gap-10'>
					{/* Left featured blog */}
					<div className='rounded-xl h-fit overflow-hidden shadow-sm border border-gray-100 group'>
						<Link href={`/blog/${mainPost.slug}`}>
							<div className='relative h-64 overflow-hidden'>
								<Image
									src={mainPost.image}
									alt={mainPost.title}
									fill
									className='w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500'
								/>
							</div>
						</Link>
						<div className='p-5'>
							<span className='inline-block text-xs px-3 py-1 bg-teal-100 text-teal-600 rounded-full mb-3'>
								NEWS
							</span>
							<h3 className='text-lg font-semibold mb-2 group-hover:text-primary transition-colors'>
								<Link href={`/blog/${mainPost.slug}`}>
									{mainPost.title}
								</Link>
							</h3>
							<p className='text-gray-600 mb-3 line-clamp-2'>{mainPost.excerpt}</p>
							<Link
								href={`/blog/${mainPost.slug}`}
								className='text-teal-600 font-medium hover:underline'
							>
								Read more
							</Link>
						</div>
					</div>

					{/* Right side list */}
					<div className='space-y-6 w-full'>
						{sidePosts.map(blog => (
							<div
								key={blog.id}
								className='flex items-start space-x-4 rounded-xl overflow-hidden group'
							>
								<Link href={`/blog/${blog.slug}`} className='relative w-52 h-32 flex-shrink-0 rounded-lg overflow-hidden border border-gray-100'>
									<Image
										src={blog.image}
										alt={blog.title}
										fill
										className='object-cover group-hover:scale-105 transition-transform duration-500'
									/>
									<span className='absolute bottom-2 left-2 text-xs px-2 py-1 bg-teal-100 text-teal-600 rounded-full'>
										UPDATE
									</span>
								</Link>
								<div className='flex-grow'>
									<h4 className='font-semibold text-gray-800 mb-1 text-sm md:text-base group-hover:text-primary transition-colors'>
										<Link href={`/blog/${blog.slug}`}>
											{blog.title}
										</Link>
									</h4>
									<p className='text-gray-500 text-sm line-clamp-2'>{blog.excerpt}</p>
								</div>
							</div>
						))}
						<div className='w-full flex justify-end'>
							<Link href='/blog'>
								<Button variant={'outline'} className='w-fit'>
									View all
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Blogs


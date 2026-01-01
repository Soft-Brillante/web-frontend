import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { blogPosts } from '@/lib/blog-data'
import { Calendar, User } from 'lucide-react'

export const metadata = {
    title: 'Blog | Soft Brillante',
    description: 'Insights on Web Development, AI, and Career Growth'
}

export default function BlogListing() {
    return (
        <div className='bg-background min-h-screen pt-[60px] pb-[80px]'>
            {/* Header */}
            <div className='max-w-7xl mx-auto px-[16px] md:px-[60px] mb-16 text-center'>
                <h1 className='text-[36px] md:text-[56px] font-bold text-gray-900 mb-6'>
                    Latest <span className='text-primary'>Insights</span>
                </h1>
                <p className='text-gray-600 text-lg md:text-xl max-w-3xl mx-auto'>
                    Expert articles on Full Stack Development, AI trends, and career advice for aspiring developers.
                </p>
            </div>

            {/* Blog Grid */}
            <div className='max-w-7xl mx-auto px-[16px] md:px-[60px]'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {blogPosts.map((post) => (
                        <article key={post.id} className='bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group'>
                            <Link href={`/blog/${post.slug}`} className='block overflow-hidden h-[240px] relative'>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className='object-cover group-hover:scale-105 transition-transform duration-500'
                                />
                            </Link>
                            <div className='p-6 flex flex-col flex-grow'>
                                <div className='flex items-center gap-4 text-sm text-gray-500 mb-4'>
                                    <span className='flex items-center gap-1'>
                                        <Calendar className='size-4' />
                                        {post.date}
                                    </span>
                                    <span className='flex items-center gap-1'>
                                        <User className='size-4' />
                                        {post.author}
                                    </span>
                                </div>
                                <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors'>
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className='text-gray-600 mb-6 line-clamp-3'>
                                    {post.excerpt}
                                </p>
                                <div className='mt-auto'>
                                    <Link href={`/blog/${post.slug}`}>
                                        <Button variant='outline' className='w-full group-hover:bg-primary group-hover:text-white transition-colors'>
                                            Read Article
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

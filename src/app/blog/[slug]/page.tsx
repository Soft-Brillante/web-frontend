import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/blog-data'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowLeft } from 'lucide-react'

// Correct type definition for Next.js App Router dynamic pages
type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) {
        return {
            title: 'Post Not Found | Soft Brillante'
        }
    }

    return {
        title: `${post.title} | Soft Brillante`,
        description: post.excerpt
    }
}

// Generate static params for all available posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params
    const post = blogPosts.find((p) => p.slug === slug)

    if (!post) {
        notFound()
    }

    return (
        <article className='bg-background min-h-screen pt-[60px] pb-[80px]'>
            {/* Hero Image */}
            <div className='max-w-4xl mx-auto px-4 mb-8'>
                <Link href='/blog' className='inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-6 transition-colors'>
                    <ArrowLeft className='size-4' />
                    Back to Blog
                </Link>
                <div className='rounded-[32px] overflow-hidden aspect-video shadow-2xl mb-8 relative'>
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className='object-cover'
                        priority
                    />
                </div>
            </div>

            {/* Content */}
            <div className='max-w-3xl mx-auto px-4'>
                <div className='flex items-center gap-6 text-sm text-gray-500 mb-6 border-b border-gray-100 pb-6'>
                    <span className='flex items-center gap-2'>
                        <Calendar className='size-4' />
                        {post.date}
                    </span>
                    <span className='flex items-center gap-2'>
                        <User className='size-4' />
                        {post.author}
                    </span>
                </div>

                <h1 className='text-[32px] md:text-[48px] font-bold text-gray-900 mb-6 leading-tight'>
                    {post.title}
                </h1>

                <div
                    className='prose prose-lg prose-blue max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed'
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className='mt-12 pt-8 border-t border-gray-100'>
                    <Link href='/blog'>
                        <Button size='lg' variant='outline' className='rounded-full'>
                            Read More Articles
                        </Button>
                    </Link>
                </div>
            </div>
        </article>
    )
}

import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <div className='bg-white min-h-screen'>
            {/* Hero Section */}
            <div className='bg-primary/5 py-[60px] px-[16px] md:px-[120px]'>
                <div className='grid md:grid-cols-2 gap-[40px]'>
                    <div className='flex flex-col gap-[24px]'>
                        <h1 className='text-[32px] md:text-[48px] font-bold text-primary'>
                            Expanding to Wayanad: Mananthavady Campus
                        </h1>
                        <p className='text-gray-600 text-[16px] leading-relaxed'>
                            Soft Brillante is proud to announce its upcoming campus in Mananthavady, Wayanad. We are bringing our proven curriculum and expert mentorship to the hill district, ensuring that talent in Wayanad has access to world-class tech education without migrating.
                        </p>
                        <div className='flex gap-[40px] py-4'>
                            <div>
                                <h3 className='text-[32px] font-bold text-[#F25471]'>500+</h3>
                                <p className='text-gray-500'>Students Placed</p>
                            </div>
                            <div>
                                <h3 className='text-[32px] font-bold text-[#23BDEE]'>50+</h3>
                                <p className='text-gray-500'>Corporate Partners</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <Image
                            src='/images/student-group.png'
                            alt='Students at Soft Brillante'
                            width={0}
                            height={0}
                            sizes='100vw'
                            className='w-full h-auto md:absolute md:inset-0 md:h-full md:w-full rounded-[24px] shadow-lg object-cover'
                        />
                    </div>
                </div>
            </div>

            {/* The Making of the Course */}
            <div className='py-[80px] px-[16px] md:px-[120px]'>
                <div className='grid md:grid-cols-2 gap-[60px] items-center'>
                    <div className='bg-gray-100 rounded-[24px] overflow-hidden min-h-[400px] flex items-center justify-center relative'>
                        <Image
                            src='/images/course-research.png'
                            alt='1 Year of Dedicated Research Strategy'
                            fill
                            className='object-cover'
                        />
                    </div>
                    <div>
                        <h2 className='text-[32px] font-bold text-gray-900 mb-6'>Crafted to Perfection: A Year in the Making</h2>
                        <p className='text-gray-600 leading-relaxed mb-6'>
                            Our curriculum isn't just a collection of tutorials. It took us <strong>one full year</strong> of rigorous research, development, and refinement to build this course. We analyzed the gaps in traditional education and the evolving demands of the tech industry to create a learning path that is both comprehensive and practical.
                        </p>
                        <ul className='space-y-4'>
                            <li className='flex items-start gap-3'>
                                <span className='text-green-500 mt-1'>✓</span>
                                <p className='text-gray-600'>Curated by industry veterans with decades of combined experience.</p>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-green-500 mt-1'>✓</span>
                                <p className='text-gray-600'>Continuously updated to include the latest frameworks and best practices.</p>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-green-500 mt-1'>✓</span>
                                <p className='text-gray-600'>Structured to take you from absolute beginner to industry-ready professional.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Industrial Level Training & Team */}
            <div className='py-[80px] px-[16px] md:px-[120px] bg-[#0A1A2F] text-white'>
                <div className='text-center max-w-3xl mx-auto mb-[60px]'>
                    <h2 className='text-[32px] font-bold mb-4'>Industrial Level Training by Experts</h2>
                    <p className='text-gray-300'>We bring the corporate floor to the classroom. Learn from those who have built scalable systems for global companies.</p>
                </div>
                <div className='grid md:grid-cols-3 gap-[32px]'>
                    <div className='bg-white/5 p-8 rounded-[24px] border border-white/10 hover:bg-white/10 transition-colors'>
                        <div className='text-4xl mb-4'>👨‍💻</div>
                        <h3 className='text-xl font-bold mb-3'>Experienced Mentors</h3>
                        <p className='text-gray-400'>Our team consists of seasoned developers and architects who are actively working in the industry. You learn from their real-world battles, not just textbooks.</p>
                    </div>
                    <div className='bg-white/5 p-8 rounded-[24px] border border-white/10 hover:bg-white/10 transition-colors'>
                        <div className='text-4xl mb-4'>🔄</div>
                        <h3 className='text-xl font-bold mb-3'>Always Updated</h3>
                        <p className='text-gray-400'>The tech world moves fast. So do we. Our syllabus is a living document, constantly updated to reflect the newest trends, tools, and methodologies used in top tech firms.</p>
                    </div>
                    <div className='bg-white/5 p-8 rounded-[24px] border border-white/10 hover:bg-white/10 transition-colors'>
                        <div className='text-4xl mb-4'>🏭</div>
                        <h3 className='text-xl font-bold mb-3'>Industrial Standards</h3>
                        <p className='text-gray-400'>Write code that production servers love. We teach you clean coding, version control (Git), testing, and deployment workflows used by professionals.</p>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            {/* Why Wayanad Section */}
            <div className='py-[80px] px-[16px] md:px-[120px] bg-gray-50'>
                <div className='grid md:grid-cols-2 gap-[40px] items-center'>
                    <div>
                        <h2 className='text-[32px] font-bold text-gray-900 mb-6'>Why Wayanad?</h2>
                        <h3 className='text-xl text-primary font-medium mb-4'>Bridging the Urban-Rural Divide</h3>
                        <p className='text-gray-600 leading-relaxed mb-4'>
                            For too long, students in Wayanad have had to migrate to Kochi, Bangalore, or Chennai to access high-quality tech education. This migration comes with high living costs and displacement.
                        </p>
                        <p className='text-gray-600 leading-relaxed'>
                            Soft Brillante changes this narrative. By establishing a state-of-the-art campus in Mananthavady, we bring the same quality of education, industry networks, and placement opportunities directly to you. Stay home, learn from the best, and build a global career.
                        </p>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center'>
                            <span className='text-4xl'>🏡</span>
                            <p className='font-bold text-gray-800 mt-2'>Stay Local</p>
                        </div>
                        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center'>
                            <span className='text-4xl'>🚀</span>
                            <p className='font-bold text-gray-800 mt-2'>Go Global</p>
                        </div>
                        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center'>
                            <span className='text-4xl'>💰</span>
                            <p className='font-bold text-gray-800 mt-2'>Save Costs</p>
                        </div>
                        <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center'>
                            <span className='text-4xl'>🤝</span>
                            <p className='font-bold text-gray-800 mt-2'>Community</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className='py-[80px] px-[16px] md:px-[120px]'>
                <div className='text-center max-w-3xl mx-auto mb-[60px]'>
                    <h2 className='text-[28px] font-bold text-gray-800 mb-4'>Our Core Values</h2>
                    <p className='text-gray-600'>Driven by a passion for education and technology, these principles guide everything we do.</p>
                </div>
                <div className='grid md:grid-cols-3 gap-[32px]'>
                    <div className='bg-blue-50 p-8 rounded-[24px] border border-blue-100'>
                        <h3 className='text-xl font-bold text-primary mb-3'>Innovation First</h3>
                        <p className='text-gray-600'>We don&apos;t just teach code; we teach the future. AI integration is at the heart of our curriculum.</p>
                    </div>
                    <div className='bg-yellow-50 p-8 rounded-[24px] border border-yellow-100'>
                        <h3 className='text-xl font-bold text-yellow-700 mb-3'>Inclusive Growth</h3>
                        <p className='text-gray-600'>Quality education should be accessible. We offer scholarships and affordable fees for rural talent.</p>
                    </div>
                    <div className='bg-green-50 p-8 rounded-[24px] border border-green-100'>
                        <h3 className='text-xl font-bold text-green-700 mb-3'>Practical Mastery</h3>
                        <p className='text-gray-600'>Theory is optional; building is mandatory. Our students graduate with a portfolio of real apps.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

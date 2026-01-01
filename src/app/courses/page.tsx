
import { Button } from '@/components/ui/button'


const courses = [
    {
        title: 'AI Integrated Full Stack (MERN + Next.js)',
        description: 'The ultimate modern web development course. Go beyond basic MERN stack by mastering Next.js for frontend and Nest.js for scalable backend systems. All integrated with AI-driven development workflows.',
        duration: '6 Months',
        level: 'Beginner to Advanced',
        tags: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Nest.js', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'AI Copilots'],
        syllabus: [
            {
                title: 'Phase 1: Foundation & logic',
                topics: 'HTML5, CSS3 (Tailwind), JavaScript ES6+, TypeScript Basics, Git & GitHub',
            },
            {
                title: 'Phase 2: Modern Frontend',
                topics: 'React.js, Next.js (App Router), State Management (Redux/Zustand), Framer Motion',
            },
            {
                title: 'Phase 3: Scalable Backend',
                topics: 'Node.js, Express.js, Nest.js Microservices, MongoDB (Mongoose), PostgreSQL',
            },
            {
                title: 'Phase 4: AI & Deployment',
                topics: 'Prompt Engineering, AI-Assisted Coding, Docker, AWS/Vercel Deployment, CI/CD',
            },
            {
                title: 'Phase 5: Product Development',
                topics: 'Build your own product level applications from scratch, launch to real users, and learn startup basics.',
            },
        ],
        tools: ['VS Code', 'Cursor AI', 'Postman', 'Figma', 'GitHub Copilot']
    }
]

export default function Courses() {
    return (
        <div className='bg-background min-h-screen'>
            {/* Hero Section */}
            <div className='bg-gradient-to-r from-blue-900 to-primary py-[80px] px-[16px] md:px-[120px] text-center text-white'>
                <h1 className='text-[32px] md:text-[56px] font-bold mb-4'>
                    Master the <span className='text-yellow-400'>Future Stack</span>
                </h1>
                <p className='text-blue-100 text-[18px] md:w-[60%] mx-auto leading-relaxed'>
                    Industry-leading curriculum covering Next.js, Nest.js, and AI integration.
                    Don't just learn to code; learn to build scalable, production-ready applications.
                </p>
                <div className='mt-8 flex justify-center gap-4'>
                    <span className='bg-white/10 border border-white/20 text-white px-6 py-2 rounded-full font-medium backdrop-blur-sm'>
                        Admissions Open
                    </span>
                    <span className='bg-green-500/20 border border-green-500/40 text-green-300 px-6 py-2 rounded-full font-medium backdrop-blur-sm flex items-center gap-2'>
                        <span className='size-2 bg-green-400 rounded-full animate-pulse'></span>
                        Live Online
                    </span>
                    <span className='hidden md:block bg-yellow-500/10 border border-yellow-500/20 text-yellow-200/60 px-6 py-2 rounded-full font-medium backdrop-blur-sm'>
                        Offline Coming Soon
                    </span>
                </div>
            </div>

            {/* Courses Grid */}
            <div className='max-w-7xl mx-auto px-[16px] md:px-[60px] -mt-[40px]'>
                {courses.map((course, index) => (
                    <div key={index} className='bg-white rounded-[32px] p-[24px] md:p-[48px] shadow-xl border border-gray-100'>
                        {/* Header */}
                        <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-100 pb-8'>
                            <div>
                                <div className='flex gap-3 mb-3'>
                                    <span className='bg-blue-50 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider'>{course.level}</span>
                                    <span className='bg-purple-50 text-purple-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider'>Certification Included</span>
                                </div>
                                <h3 className='text-[28px] md:text-[40px] font-bold text-gray-900'>{course.title}</h3>
                            </div>
                            <div className='mt-4 md:mt-0'>
                                <Button className='text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105'>
                                    Download Syllabus
                                </Button>
                            </div>
                        </div>

                        <div className='grid md:grid-cols-12 gap-[40px]'>
                            {/* Left Column: Details */}
                            <div className='md:col-span-5 flex flex-col gap-8'>
                                <div>
                                    <h4 className='text-gray-900 font-bold mb-3 text-lg'>Why this course?</h4>
                                    <p className='text-gray-600 leading-relaxed'>{course.description}</p>
                                </div>
                                <div className='bg-gray-50 rounded-2xl p-6'>
                                    <h4 className='text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider opacity-70'>Tech Stack</h4>
                                    <div className='flex flex-wrap gap-2'>
                                        {course.tags.map(tag => (
                                            <span key={tag} className='bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold text-sm shadow-sm'>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className='bg-gray-50 rounded-2xl p-6'>
                                    <h4 className='text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider opacity-70'>Tools</h4>
                                    <div className='flex flex-wrap gap-2 text-sm text-gray-600 font-medium'>
                                        {course.tools.map((tool, i) => (
                                            <span key={i} className='flex items-center gap-2'>
                                                {i > 0 && <span className='text-gray-300'>•</span>}
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Syllabus */}
                            <div className='md:col-span-7'>
                                <h4 className='text-gray-900 font-bold mb-6 text-xl flex items-center gap-2'>
                                    <span className='bg-primary/10 text-primary size-8 rounded-lg flex items-center justify-center text-sm'>📚</span>
                                    What You Will Learn
                                </h4>
                                <div className='grid sm:grid-cols-2 gap-4'>
                                    {course.syllabus.map((item, i) => (
                                        <div key={i} className={`border border-gray-100 rounded-xl p-5 hover:border-primary/30 transition-colors group ${i === 4 ? 'sm:col-span-2' : ''}`}>
                                            <div className='flex items-center gap-3 mb-3'>
                                                <span className='bg-gray-100 text-gray-500 size-6 rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-primary group-hover:text-white transition-colors'>{i + 1}</span>
                                                <h5 className='font-bold text-gray-800'>{item.title}</h5>
                                            </div>
                                            <p className='text-sm text-gray-500 leading-relaxed pl-9'>
                                                {item.topics}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Career Path Section */}
            <div className='max-w-7xl mx-auto my-[100px] px-[16px] md:px-[60px]'>
                <div className='text-center mb-12'>
                    <span className='text-primary font-bold tracking-widest text-sm uppercase'>Growth</span>
                    <h2 className='text-[32px] md:text-[40px] font-bold text-gray-900'>Your Career Trajectory</h2>
                </div>

                <div className='relative'>
                    {/* Connecting Line (Desktop) */}
                    <div className='hidden md:block absolute top-[50%] left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-primary/20 to-blue-100 -z-10 translate-y-[-50%]'></div>

                    <div className='flex flex-wrap justify-center gap-8'>
                        {[
                            { step: '01', title: 'Junior Developer', desc: 'Build UI components, fix bugs, master git.', salary: '3-6 LPA' },
                            { step: '02', title: 'Frontend Specialist', desc: 'Master React, Next.js, and modern UI/UX principles.', salary: '5-10 LPA' },
                            { step: '03', title: 'Backend Specialist', desc: 'Build scalable APIs, manage databases, and optimize server performance.', salary: '6-12 LPA' },
                            { step: '04', title: 'Full Stack Engineer', desc: 'Design APIs, manage DBs, own features.', salary: '8-15 LPA' },
                            { step: '05', title: 'Tech Lead / Architect', desc: 'System design, team leadership, strategic AI use.', salary: '15+ LPA' }
                        ].map((item, i) => (
                            <div key={i} className='bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300 w-full md:w-[calc(33.333%-2rem)] lg:w-[calc(30%-2rem)] min-w-[300px]'>
                                <div className={`size-12 rounded-xl flex items-center justify-center text-xl font-bold mb-6 text-white shadow-lg mx-auto md:mx-0
                                    ${i === 0 ? 'bg-blue-400' : i === 1 ? 'bg-indigo-500' : 'bg-purple-600'}
                                `}>
                                    {item.step}
                                </div>
                                <h4 className='font-bold text-xl text-gray-900 mb-2'>{item.title}</h4>
                                <p className='text-gray-500 text-sm mb-4 leading-relaxed'>{item.desc}</p>
                                <div className='bg-green-50 text-green-700 font-bold text-sm py-2 px-4 rounded-lg w-fit'>
                                    {item.salary}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

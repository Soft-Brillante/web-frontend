import { FaLaptopCode } from 'react-icons/fa6'
import { GoWorkflow } from 'react-icons/go'
import { TbBulbFilled } from 'react-icons/tb'
import SpecialityCard from './SpecialityCard'

const data = [
	{
		title: 'Skill-Hacking Made Simple',
		icon: TbBulbFilled,
		color: '#5B72EE',
		description:
			'Our step-by-step, mentor-guided approach breaks complex technologies into easy-to-understand modules, helping you adapt to new tools and programming languages with confidence. Whether you’re starting from scratch or upgrading existing skills, we give you clear pathways, curated resources, and real-time feedback so you can absorb concepts faster and apply them immediately in practical scenarios.',
	},
	{
		title: 'Projects First, Theory Second',
		icon: FaLaptopCode,
		color: '#00CBB8',
		description:
			'From day one you will dive into building real-world applications, solving authentic industry problems instead of working only through textbook exercises. Each project is designed to mirror professional environments—complete with version control, collaborative coding, and deployment—so you graduate with a portfolio of tangible work that showcases your ability to deliver production-ready solutions.',
	},
	{
		title: 'Industry-Ready Methodologies',
		icon: GoWorkflow,
		color: '#29B9E7',
		description:
			'Learn the same agile practices, version-control strategies, and modern development workflows used by leading tech companies worldwide. You’ll gain hands-on experience with sprint planning, code reviews, and continuous integration pipelines, ensuring you leave the program not just as a capable coder but as a well-rounded professional prepared to thrive in fast-paced, collaborative engineering teams.',
	},
]

function Specialities() {
	return (
		<div className='flex flex-col gap-[42px] py-[52px] px-[16px] md:px-[120px] w-full'>
			<div className='flex flex-col gap-[12px] w-full items-center'>
				<h1 className='text-3xl font-bold text-center'>
					What You will <span className='text-primary'>Gain With Us?</span>
				</h1>
				<p className='text-gray-500 md:w-[70%] text-[14px] text-center'>
					At Soft Brillante, learning is not just about theory, it is about
					transformation. We help you master new skills faster, work on real,
					project-driven assignments, and adopt industry-standard methodologies
					so you are ready for the professional world from day one.
				</p>
			</div>
			<div className='grid md:grid-cols-3 gap-[42px] justify-center'>
				{data.map((item, index) => (
					<SpecialityCard key={index} item={item} />
				))}
			</div>
		</div>
	)
}

export default Specialities

import Blogs from './components/blogs/Blogs'
import Features from './components/features/Features'
import Hero from './components/hero/Hero'
import LearnAnywhere from './components/learn-anywhere/LearnAnywhere'
import OneOnOne from './components/one-on-one/OneOnOne'
import OnlineSpec from './components/online-spec/OnlineSpec'
import OurSuccess from './components/our-success/OurSuccess'
import Specialities from './components/specialities/Specialities'
import Testimonials from './components/testimonials/Testimonials'
import WeeklyTasks from './components/weekly-tasks/WeeklyTasks'

export default function Home() {
	return (
		<div className='flex flex-col'>
			<Hero />
			<OurSuccess />
			<Specialities />
			<Features />
			<LearnAnywhere />
			<OnlineSpec />
			<WeeklyTasks />
			<OneOnOne />
			<Testimonials />
			<Blogs />
		</div>
	)
}

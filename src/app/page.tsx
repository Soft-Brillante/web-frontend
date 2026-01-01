import Blogs from './components/blogs/Blogs'
import Features from './components/features/Features'
import Hero from './components/hero/Hero'
import LearnAnywhere from './components/learn-anywhere/LearnAnywhere'
import OneOnOne from './components/one-on-one/OneOnOne'
import OnlineSpec from './components/online-spec/OnlineSpec'
import Specialities from './components/specialities/Specialities'
import Testimonials from './components/testimonials/Testimonials'
import WeeklyTasks from './components/weekly-tasks/WeeklyTasks'
import Statistics from './components/statistics/Statistics'
import FAQ from './components/faq/FAQ'

export default function Home() {
	return (
		<div className='flex flex-col'>
			<Hero />
			<Statistics />
			{/* <OurSuccess /> */}
			<Specialities />
			<Features />
			<LearnAnywhere />
			<OnlineSpec />
			<WeeklyTasks />
			<OneOnOne />
			<Testimonials />
			<FAQ />
			<Blogs />
		</div>
	)
}

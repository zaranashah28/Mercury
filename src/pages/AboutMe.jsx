import AboutMeBio from '../components/about/AboutMeBio';
import { AboutMeProvider } from '../context/AboutMeContext';
import Slideshow from '../slideshow/Slideshow';

const About = () => {
	return (
		<>
		<AboutMeProvider>
			<div className='container mx-auto'>
				<AboutMeBio />
			</div>
			</AboutMeProvider>
				<Slideshow />
			</>
	);
};

export default About;

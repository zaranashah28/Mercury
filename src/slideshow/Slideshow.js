import image1 from '../images/s1.JPG';
import image2 from '../images/s2.JPG';

const images = [image1, image2];

const Slideshow = () => {
	return (
		<div className='image-slider'>
			<div className='slider-container'>
				{images.map((image, index) => (
					<img
						src={image}
						alt={`Slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
};

export default Slideshow;

import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import car from '../images/car 2.png';
import car1 from '../images/car3.png';
import car2 from '../images/racingsim.png';



function SlideShow() {
  return (
    <Carousel style={{ marginTop: "20px" }}>
           
      <Carousel.Item>
        <ExampleCarouselImage text="MRC BUGGY" imageUrl={car1} />
        <Carousel.Caption >
          <h3 style={{color: "white",marginLeft:"60%"}}>MRC BUGGY</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="MRC RIG" imageUrl={car2} />
        <Carousel.Caption>
          <h3 style={{color: "white",marginLeft:"73%"}}>MRC RIG</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage   text="CAR OUTTER FRAME" imageUrl={car} />
          <Carousel.Caption style={{color: "white",marginLeft:"50%"}}>
            <h3>CAR OUTTER FRAME</h3>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideShow;

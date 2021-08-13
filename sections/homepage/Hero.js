import Image1 from '../../assets/images/cake1.jpg';
import Image2 from '../../assets/images/cake2.jpg';
import Image3 from '../../assets/images/cake3.jpg';
import Image4 from '../../assets/images/cake4.jpg';
import ImageCarousel from '../../components/ImageCarousel';

const Hero = () => {
    return <ImageCarousel images={[Image1.src, Image2.src, Image3.src, Image4.src]} />;
};

export default Hero;

import { useState, useEffect } from 'react';
// import image1 from '../images/carousal_images/camera1.jpg'
// import image2 from '../images/carousal_images/camera2.jpg'

// import ImageSlider from 'image-slider-react';

function Home() {
    const [index, setIndex] = useState(0);
    const [images, setImages] = useState([]);

    function importImages(links){
        return links.keys().map(links);
    }

    useEffect(()=>{
        const timer = setInterval(()=>{
            if(index > 3){
                setIndex(0);
            }else{
                setIndex((prevIndex)=>prevIndex+1);
            }
        }, 3000)
        const carousalImages = importImages(require.context('../images/carousal_images/'), false, '.jpg');
        setImages(carousalImages);

        return ()=>{
            clearInterval(timer);
        }
    }, [index])

    return (
        <div className="home">
            <p className='homepage-text'>Krystal-Camera shop - All kinds of camera / Sony / Canon / Leica / Hasselblad / Red / Best Offers!</p>
            <img className="image-carousel" src={images[index]} alt='camera'/>
        </div>
    );
}

export default Home;

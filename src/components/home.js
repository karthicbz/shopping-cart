import { useState, useEffect } from 'react';
import SideTag from './sideTag';

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
            <img className="image-carousel" src={images[index]} alt='camera'/>
        </div>
    );
}

export default Home;

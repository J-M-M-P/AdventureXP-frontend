import { useState, useEffect } from "react";
import adventureImage1 from "../assets/img/david-armstrong-srpE-a5W418-unsplash.jpg";
import adventureImage2 from "../assets/img/james-fitzgerald-N4VDAdJL2bo-unsplash.jpg";
import adventureImage3 from "../assets/img/jason-pofahl-ZOTkKCx_DAc-unsplash.jpg";
import adventureImage4 from "../assets/img/sally-k-Oc-gVHId6lo-unsplash.jpg";
import adventureImage5 from "../assets/img/sherise-van-dyk-tj-VVjE3Usg-unsplash.jpg";
// Add more imports for other images if needed

function RotatingImage() {
    const [imageIndex, setImageIndex] = useState(0);

    const images = [adventureImage1, adventureImage2, adventureImage3, adventureImage4, adventureImage5];

    useEffect(() => {
        const timer = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change image every 2 seconds

        // Clean up function to clear the timer when the component unmounts
        return () => clearInterval(timer);
    }, [images.length]);

    return <img src={images[imageIndex]} alt="Rotating image" className="img-fluid" />;
}

export default RotatingImage;

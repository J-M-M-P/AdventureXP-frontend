import { useState, useEffect } from "react";
import images from "../testingLists/images";
// Add more imports for other images if needed

function RotatingImage() {
    const [imageIndex, setImageIndex] = useState(0);

    // const images = [adventureImage1, adventureImage2, adventureImage3, adventureImage4, adventureImage5];

    useEffect(() => {
        const timer = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 2 seconds

        // Clean up function to clear the timer when the component unmounts
        return () => clearInterval(timer);
    }, []);

    return (
        <img
            src={images[imageIndex]}
            alt="Rotating image"
            className="img-fluid rounded"
            style={{ height: "300px", width: "300px" }}
        />
    );
}

export default RotatingImage;

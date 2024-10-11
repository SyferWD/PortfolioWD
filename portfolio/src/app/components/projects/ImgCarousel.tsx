'use client'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useRef, useState } from "react";

interface ImgProp {
    src: StaticImageData;
    alt: string;
} 

interface ImgCarouselProp {
    images: ImgProp[]
}

const ImgCarousel = ( { images }: ImgCarouselProp ) => {

    const [index, setIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const isSwiping = useRef(false);

    function handleNextSlide() {
        setIndex( (prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1 )
    }

    function handlePrevSlide() {
        setIndex( (prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    
      const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
        // only set to true when the user's touch moved, if user click on the spot, this function will not trigger so this boolean will not be set
        isSwiping.current= true;
    };
    
    const handleTouchEnd = () => {
        // only checks when the user is swiping 
        if(isSwiping.current){
            if (touchStartX.current - touchEndX.current > 50) {
                // Swipe left -> Next slide
                handleNextSlide();
            }
              if (touchStartX.current - touchEndX.current < -50) {
                // Swipe right -> Previous slide
                handlePrevSlide();
            }
        }
        
        // reset all tracking variables after check is performed 
        touchStartX.current = 0;
        touchEndX.current = 0;
        isSwiping.current = false;
    };

    return (
        <div 
            className="relative flex w-full h-full overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* image gallery */}
            {images.map( (image) => (
                <Image
                    key={image.alt}
                    src={image.src}
                    alt={image.alt}
                    className="object-cover block transition-transform ease-in-out duration-500"
                    style={{transform: `translateX(-${100*index}%)`}}
                />
            ) )}
            {/* left arrow icon */}
            <button 
                className="imgCarousel_arrow left-0"
                onClick={handlePrevSlide}
            >
                <ArrowLeftCircleIcon 
                    className="w-5"
                />
            </button>
            
            {/* right arrow icon */}
            <button 
                className="imgCarousel_arrow right-0"
                onClick={handleNextSlide}
            >
                <ArrowRightCircleIcon 
                    className="w-5"
                />
            </button>

            <div className=" absolute bottom-2 flex gap-2 left-1/2 -translate-x-1/2">
                {images.map((_, imageIndex) => (
                    <button 
                        key={imageIndex}
                        className="p-1 rounded-full border-2 border-white focus-visible:p-3 focus-visible:rounded-none "
                        style={{backgroundColor: `${imageIndex === index ? "black" : "grey"}`}}
                        onClick={() => setIndex(imageIndex)}
                    />
                ))}
            </div>
            
            
        </div>
    )
}

export default ImgCarousel
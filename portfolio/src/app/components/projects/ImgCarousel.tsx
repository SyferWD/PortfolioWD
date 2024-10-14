'use client'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

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

    const handleNextSlide = useCallback(()=> {
        setIndex( (prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1 )
    }, [images.length]);

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

    useEffect( () => {
        const nextSlide = setTimeout( () => {
            handleNextSlide();
        }, 5000)

        return () => clearTimeout(nextSlide)
    }, [index, handleNextSlide])

    return (
        <div 
            className="relative flex items-center w-full h-[50vh] overflow-hidden group"
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
                    className="object-contain block transition-transform ease-in-out duration-500"
                    style={{transform: `translateX(-${100*index}%)`, width: '100%', height: 'auto', flexShrink: 0}}
                />
            ) )}
            {/* left arrow icon */}
            <button 
                className="imgCarousel_arrow_bg left-0 opacity-0 group-hover:opacity-100"
                onClick={handlePrevSlide}
            >
                <ArrowLeftCircleIcon 
                    className="imgCarousel_arrow"
                />
            </button>
            
            {/* right arrow icon */}
            <button 
                className="imgCarousel_arrow_bg right-0 opacity-0 group-hover:opacity-100"
                onClick={handleNextSlide}
            >
                <ArrowRightCircleIcon 
                    className="imgCarousel_arrow"
                />
            </button>

            <div className=" absolute bottom-2 flex gap-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100">
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
import programmerIcon from "../assets/Programmer-icon.svg"
import reactIcon from "../assets/react-icon.gif";
import cssIcon from "../assets/css-icon.gif";
import htmlIcon from "../assets/html-icon.gif";
import jsIcon from "../assets/js-icon.png";
import tsIcon from "../assets/typescript-icon.png";
import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/16/solid";

const images = [
    { src: htmlIcon, alt: 'HTML Icon'},
    { src: jsIcon, alt: 'Javascript Icon'},
    { src: reactIcon, alt: 'React Icon'},
    { src: tsIcon, alt: 'Typescript Icon'},
    { src: cssIcon, alt: 'CSS Icon'},
]

export const Hero = () => {
  return (
    <section className=" grid grid-cols-2 min-h-screen">
        {/* Left side: Text and CTA button */}
        <div className="flex flex-col justify-start items-end mt-40">
            <div className="flex flex-col gap-12 px-10">
                {/* Main Hero Content  */}
                <h1 className=" font-extrabold text-5xl tracking-wide dark:text-dm-white">
                    Hi, I&apos;m Alvin and I am an Aspiring {" "}
                    {/* Highlighted text */}
                    <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-600 dark:from-yellow-400 dark:to-dm-yellow">
                        Full-Stack Web Developer
                    </span>
                </h1>
                {/* About me text */}
                <div className=" text-lg text-wrap w-80 p-2 lg:w-[640px] bg-gradient-to-b from-blue-400 to-blue-600 text-white rounded-lg theme_border shadow-custom-grey-neu dark:from-dm-yellow dark:to-dm-yellow dark:text-black dark:border-black">
                    <p>
                        I recently graduated with First Class Honours in Computer Science from the University of London, and I&apos;m currently based in Singapore. I&apos;m passionate about solving real-world challenges and turning innovative ideas into impactful solutions. My goal is to continually refine my web development skills and contribute to meaningful projects that can hopefully make a difference in people&apos;s lives.
                    </p>

                    
                </div>
                
                {/* Employment status text */}
                <div className="text-lg">
                    <span className="font-bold mr-2 dark:text-dm-white">
                        Employment Status:
                    </span>  
                    <span className="text-blue-600 dark:text-dm-yellow">
                        Seeking for job opportunities...
                    </span>
                </div>

                {/* CTA Button */}
                <button className="cta_btn">
                    <EnvelopeIcon className="w-8" />
                    Contact me
                </button>
            </div>
        </div>

        {/* Right side: Display images */}
        <div className="flex flex-col justify-end items-center mb-12">
            <div className="">
                {/* Main Image */}
                <Image 
                    src={programmerIcon} 
                    alt="Icon of a programmer programming" 
                    className="w-[640px] rounded-lg mb-4 shadow-custom-grey-neu dark:shadow-custom-grey-neu-dark"
                    priority={true}
                />
                {/* Group of displayed Icons using .map() */}
                <div className="flex justify-evenly">
                    {images.map((image, index) => (
                        <Image 
                            src= {image.src}
                            alt= {image.alt}
                            className="w-14 rounded-md shadow-custom-grey-neu theme_border dark:shadow-custom-grey-neu-dark"
                            key={index}
                            priority={true}
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

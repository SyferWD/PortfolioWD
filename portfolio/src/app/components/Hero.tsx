import programmerIcon from "../assets/Programmer-icon.svg"
import reactIcon from "../assets/react-icon.gif";
import cssIcon from "../assets/css-icon.gif";
import htmlIcon from "../assets/html-icon.gif";
import jsIcon from "../assets/js-icon.png";
import tsIcon from "../assets/typescript-icon.png";
import Image from "next/image";

const images = [
    { src: htmlIcon, alt: 'HTML Icon'},
    { src: jsIcon, alt: 'Javascript Icon'},
    { src: reactIcon, alt: 'React Icon'},
    { src: tsIcon, alt: 'Typescript Icon'},
    { src: cssIcon, alt: 'CSS Icon'},
]

export const Hero = () => {
  return (
    <section className="grid grid-cols-2 min-h-screen ">
        {/* Left side: Text and CTA button */}
        <div className="flex flex-col justify-start items-end mt-56">
            <div className="flex flex-col gap-12 px-10">
                {/* Main Hero Content  */}
                <h1 className=" font-extrabold text-5xl tracking-wide ">
                    Hi, I am Alvin and I am an Aspiring {" "}
                    {/* Highlighted text */}
                    <span className="block my-4 bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-600">
                        Full-Stack Web Developer
                    </span>
                </h1>
                <p className=" text-lg text-wrap w-80 p-4 lg:w-[640px]">
                    Passionate about exploring solutions to real world problems and developing ideas to turn into reality.
                </p>

                {/* CTA Button */}
                <button className=" mt-8 py-4 px-8 w-64 rounded-full font-medium text-neu-blue text-xl bg-neu-white shadow-custom-neumorphic">
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
                    className="w-[640px] rounded-lg mb-4 shadow-custom-neumorphic"
                    priority={true}
                />
                {/* Group of displayed Icons using .map() */}
                <div className="flex justify-evenly">
                    {images.map((image, index) => (
                        <Image 
                            src= {image.src}
                            alt= {image.alt}
                            className="w-14 rounded-md shadow-custom-neumorphic theme_border"
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

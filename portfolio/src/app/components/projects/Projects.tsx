import ImgCarousel from "./ImgCarousel"
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { StaticImageData } from "next/image";

interface Project {
  title: string;
  url: string;
  img: { src:StaticImageData; alt:string}[];
  summary: string;
  techStack: string[];
}

interface ProjectProp {
  projectsData: Project[];
}

export const Projects = ( {projectsData}: ProjectProp) => {
  return (
    <section className='flex flex-col justify-center items-center'>
        <h2 className='section_title mb-12 md:mb-0'>
            Projects I Worked On
        </h2>
        {/* Projects Container */}
        <div className='flex flex-col gap-12 p-5 sm:p-12 w-full justify-center items-center'>
          {projectsData.map((project, index) => (
            <article key={index} className=" bg-neu-white w-full rounded-xl xl:max-w-screen-lg shadow-custom-grey-neu theme_border dark:bg-dm-sec-dark dark:border-none dark:shadow-custom-grey-neu-dark">
              
              {/* Image carousel */}
              <div className=" flex justify-center bg-black rounded-t-lg">
                <ImgCarousel images = {project.img} />
              </div>
              
              {/* Information section */}
              <div className="flex flex-col justify-evenly p-4 gap-4 border-t border-gray-500">
                
                {/* Project Title */}
                <div>
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex gap-3 mt-6 font-semibold text-3xl text-blue-600 dark:text-dm-yellow group"
                  >
                    {project.title}
                    <ArrowUpRightIcon className="w-4 group-hover:translate-x-1 group-hover:translate-y-[-4px] group-hover:scale-110 transition-transform duration-200 ease-in-out" />
                  </a>
                </div>
                
                {/* Project summary */}
                <p className="dark:text-dm-white leading-7 tracking-[0.012rem]" style={{ wordSpacing : "0.1em"}}>
                  {project.summary}
                </p>
                
                {/* Tech stack used for the project */}
                <div data-testid="techStack" className="flex gap-2 sm:gap-4 flex-wrap">
                  {project.techStack.map((tech, index) => (
                    <div key={index}
                      className="py-1 px-2 sm:py-2 sm:px-4 text-[#f1f1f1] bg-black dark:text-dm-yellow"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
          </article>
          ))}
            
        </div>
    </section>
  )
}

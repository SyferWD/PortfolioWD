import Image from "next/image"
import { projectsData } from "./projectsData"

export const Projects = () => {
  return (
    <section className='flex flex-col justify-center items-center'>
        <h2 className='section_title'>
            Projects I Worked On
        </h2>
        {/* Projects Container */}
        <div className='flex flex-col p-12 gap-16 w-full justify-center items-center'>
          {projectsData.map((project, index) => (
            <article key={index} className=" bg-neu-white w-5/6 xl:max-w-screen-lg shadow-custom-grey-neu theme_border dark:bg-dm-sec-dark dark:border-none dark:shadow-custom-grey-neu-dark">
              <div className=" flex items-center bg-[#f1f1f1]">
                <Image 
                  src={project.img} 
                  alt={project.imgAlt}
                  className="w-full h-full object-scale-contain" 
                />
              </div>
              <div className="flex flex-col justify-evenly p-4 gap-4">
                <h4 className="mt-6 font-semibold text-3xl text-blue-600 dark:text-dm-yellow">
                  {project.title}
                </h4>
                <p className="dark:text-dm-white">
                  {project.summary}
                </p>
                <div className="flex gap-4 flex-wrap">
                  {project.techStack.map((tech, index) => (
                    <div key={index}
                      className="py-2 px-4 text-[#f1f1f1] bg-black dark:text-dm-sec-dark dark:bg-dm-white"
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

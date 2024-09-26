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
            <article key={index} className=" bg-neu-white max-w-screen-lg shadow-custom-grey-neu theme_border ">
              <div className=" flex items-center bg-[#f1f1f1]">
                <Image 
                  src={project.img} 
                  alt={project.imgAlt}
                  className="w-full h-full object-scale-contain" 
                />
              </div>
              <div className="flex flex-col justify-evenly p-4 gap-4">
                <h4 className="mt-6 font-semibold text-3xl text-blue-600">
                  {project.title}
                </h4>
                <p className="">
                  {project.summary}
                </p>
                <div className="flex gap-4">
                  {project.techStack.map((tech, index) => (
                    <div key={index}
                      className="py-2 px-4 text-[#f1f1f1] bg-black "
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

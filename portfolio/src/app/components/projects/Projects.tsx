import { projectsData } from "./projectsData"
import ImgCarousel from "./ImgCarousel"

export const Projects = () => {
  return (
    <section className='flex flex-col justify-center items-center mb-12'>
        <h2 className='section_title mb-12 md:mb-0'>
            Projects I Worked On
        </h2>
        {/* Projects Container */}
        <div className='flex flex-col p-5 sm:p-12 w-full justify-center items-center'>
          {projectsData.map((project, index) => (
            <article key={index} className=" bg-neu-white w-full  xl:max-w-screen-lg shadow-custom-grey-neu theme_border dark:bg-dm-sec-dark dark:border-none dark:shadow-custom-grey-neu-dark">
              {/* Image carousel */}
              <div className=" flex items-center ">
                <ImgCarousel images = {project.img} />
              </div>
              {/* Information section */}
              <div className="flex flex-col justify-evenly p-4 gap-4 border-t border-gray-500">
                {/* Project Name */}
                <h4 className="mt-6 font-semibold text-3xl text-blue-600 dark:text-dm-yellow">
                  {project.title}
                </h4>
                {/* Project summary */}
                <p className="dark:text-dm-white">
                  {project.summary}
                </p>
                {/* Tech stack used for the project */}
                <div className="flex gap-2 sm:gap-4 flex-wrap">
                  {project.techStack.map((tech, index) => (
                    <div key={index}
                      className="py-1 px-2 sm:py-2 sm:px-4 text-[#f1f1f1] bg-black dark:text-dm-sec-dark dark:bg-dm-white"
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

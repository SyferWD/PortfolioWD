interface contentItem {
    subtitle : string;
    items: string[];
  }
  
  interface toolkit {
    title: string;
    content: contentItem[];
    subContent: string[];
  }
  
  const devToolKits : toolkit[] = [
    {
      title: "Programming Languages",
      content: [
        {
          subtitle: "Proficient",
          items :  ["HTML", "CSS", "Javascript", "Typescript"]
        },
        {
         subtitle: "Familiar",
         items : ["Python", "C++"]
        }
      ],
      subContent: []
    },
    {
      title : "Frameworks & Libraries",
      content: [
        {
          subtitle: "Proficient",
          items : ["React", "NextJS", "p5.JS"]
        },
        {
          subtitle: "Familiar", 
          items : ["React Native", "Django"]
        }
      ],
      subContent: []
    },
    {
      title : "Tools & Platform",
      content: [],
      subContent: ["Git","Expo", "Vercel", "Prisma", "Supabase", "PostgreSQL", "ImgBB (Image hosting)"]
    }
  ]
  
  export const Toolkit = () => {
    return (
      <section className="mt-8 p-8 flex flex-col justify-center items-center">
        <h2 className="section_title">My Developer Toolkit</h2>
        {/* Cards container */}
        <div className="w-full p-12 flex justify-center items-center flex-wrap gap-8 md:gap-12 lg:gap-24">
          {/* Card */}
          {devToolKits.map((devToolkit, index) => (
            <article 
              key={index} 
              className=" py-4 px-8 my-4 rounded-xl shadow-custom-grey-neu h-64 w-64 dark:bg-dm-sec-dark dark:shadow-custom-grey-neu-dark dark:text-white bg-neu-white theme_border dark:border-none"
            >
              
              <h4 className="font-semibold text-2xl text-blue-600 dark:text-dm-yellow">
                {devToolkit.title}
              </h4>
  
              <div key={index} className="flex justify-between mt-4 gap-4">
              {/* Display content if avaiable */}
              {devToolkit.content.length !== 0 ? devToolkit.content.map((content, index) => (
                  <div key={index}>
                    <strong className="underline text-lg">{content.subtitle}</strong>
                    <ul>
                      {content.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
              )) : (
                <ul>
                  {devToolkit.subContent.map((subContent, index) => (
                    <li key={index} className="font-semibold" > {subContent} </li>
                  ))}
                </ul>
              ) } 
              </div>
            </article>
          ))}
          
        </div>
      </section>
    )
  }
  
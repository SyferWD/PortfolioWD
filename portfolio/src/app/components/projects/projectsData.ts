import HomeAPet from "../../assets/Projects/HomeAPet.jpg";
import HomeAPetLandingpage from "../../assets/Projects/HomeAPet_landingpage.jpg"
import HomeAPetGallery from "../../assets/Projects/HomeAPet_gallery.jpg"
import HomeAPetRehomingForm from "../../assets/Projects/HomeAPet_rehomingform.jpg"
import HomeAPetDashboard from "../../assets/Projects/HomeAPet_dashboard.jpg";

export const projectsData = [
    {
        title: "HomeAPet",
        url: "https://homeapet.vercel.app/",
        img: [
            {
                src: HomeAPet,
                alt: "An image of HomeAPet Home Page"
            }, 
            {
                src: HomeAPetLandingpage,
                alt: "An image of HomeAPet features"
            }, 
            {
                src: HomeAPetGallery,
                alt: "An image of HomeAPet gallery"
            }, 
            {
                src: HomeAPetRehomingForm,
                alt: "An image of HomeAPet rehoming form"
            },
            {
                src: HomeAPetDashboard,
                alt: "An image of HomeAPet logged in dashboard"
            }
        ],
        summary: "HomeAPet is a pet adoption website that allows users to create an account to apply for adopting a pet or put up a pet for rehoming. This site was created with NextJS framework with self written custom API endpoints, login authentication and authorization, leveraging on ImgBB for image hosting while storing all the data in PostgreSQL hosted on Supabase, through Prisma and lastly, styled with TailwindCSS.",
        techStack: ["React", "NextJS", "Typescript","Tailwind","Prisma", "PostgreSQL", "Vercel", "Rest API", ]
    }
]

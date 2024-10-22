import HomeAPet from "../../assets/Projects/HomeAPet.jpg";
import HomeAPetLandingpage from "../../assets/Projects/HomeAPet_landingpage.jpg";
import HomeAPetGallery from "../../assets/Projects/HomeAPet_gallery.jpg";
import HomeAPetRehomingForm from "../../assets/Projects/HomeAPet_rehomingform.jpg";
import HomeAPetDashboard from "../../assets/Projects/HomeAPet_dashboard.jpg";
import SpinAMealHome from "../../assets/Projects/spinameal_homepage.png";
import SpinAMealSearch from "../../assets/Projects/spinameal_search.png";
import SpinAMealDetails from "../../assets/Projects/spinameal_recipedetails.png";
import SpinAMealRecipe from "../../assets/Projects/spinameal_recipe.png";
import SpinAMealWheel from "../../assets/Projects/spinameal_wheel.png";
import SpinAMealLogin from "../../assets/Projects/spinameal_login.png";

export const projectsData = [
    {
        title: "HomeAPet",
        url: "https://homeapet.vercel.app/",
        img: [
            { src: HomeAPet, alt: "An image of HomeAPet Home Page" }, 
            { src: HomeAPetLandingpage, alt: "An image of HomeAPet features" }, 
            { src: HomeAPetGallery, alt: "An image of HomeAPet gallery" }, 
            { src: HomeAPetRehomingForm, alt: "An image of HomeAPet rehoming form" },
            { src: HomeAPetDashboard, alt: "An image of HomeAPet logged in dashboard" }
        ],
        summary: "HomeAPet is a pet adoption platform built with the Next.js framework, offering users the ability to create accounts, apply for pet adoptions, and rehome pets. The platform features secure authentication and authorization, with custom API endpoints tailored for dynamic interactions. Pet images are hosted via ImgBB, while all application data is efficiently managed using PostgreSQL, hosted on Supabase, and accessed through Prisma ORM. The user interface is designed for a seamless and responsive experience, crafted with TailwindCSS to ensure a modern and visually appealing design.",
        techStack: ["React", "NextJS", "Typescript","Tailwind","Prisma", "PostgreSQL", "Vercel", "Rest API", ]
    },
    {
        title: "Spin-A-Meal",
        url: "https://expo.dev/preview/update?message=fixed%20unfavourite%20button%20on%20favourites%20section&updateRuntimeVersion=exposdk%3A51.0.0&createdAt=2024-10-14T07%3A52%3A09.593Z&slug=exp&projectId=72a4b448-8d68-475a-be7b-6c21c15609e3&group=dc78bd5e-3cbe-4810-ac86-434e725bf76e",
        img: [
            { src: SpinAMealHome, alt: "An image of Spin-A-Meal home screen"},
            { src: SpinAMealSearch, alt: "An image of Spin-A-Meal search screen"},
            { src: SpinAMealDetails, alt: "An image of Spin-A-Meal recipe details screen"},
            { src: SpinAMealRecipe, alt: "An image of Spin-A-Meal recipe screen"},
            { src: SpinAMealWheel, alt: "An image of Spin-A-Meal wheel screen"},
            { src: SpinAMealLogin, alt: "An image of Spin-A-Meal login screen"},
        ],
        summary: "Spin-A-Meal is an intuitive food recipe mobile app designed to make meal planning fun and easy. Users can search for specific recipes or shake things up by spinning a wheel to discover a randomized recipe. The app features user accounts, enabling the ability to favorite and save recipes directly to local storage, ensuring access to them even without an internet connection. Built using React Native for cross-platform functionality and styled with vanilla CSS, Spin-A-Meal is published on Expo. The backend is powered by Firebase, providing secure user authentication and data management, while recipe data is sourced from an open API.",
        techStack: ["React Native", "Expo", "CSS", "Firebase", "Javascript", "Open source API"]
    }
]

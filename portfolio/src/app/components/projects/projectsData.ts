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
        summary: "HomeAPet is a pet adoption website that allows users to create an account to apply for adopting a pet or put up a pet for rehoming. This site was created with NextJS framework with self written custom API endpoints, login authentication and authorization, leveraging on ImgBB for image hosting while storing all the data in PostgreSQL hosted on Supabase, through Prisma and lastly, styled with TailwindCSS.",
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
        summary: "Spin-A-Meal is a food recipe app that allows users to search up recipes or spin to randomized a recipe. The app allows users to create an account to favourite and save recipes on their local storage which is accessible even if they are not connected to the internet. The app is build with React Native, styled with vanilla CSS, publised on Expo, with a backend supported by Firebase and recipes obtained from an open sourced API.",
        techStack: ["React Native", "Expo", "CSS", "Firebase", "Javascript", "Open source API"]
    }
]

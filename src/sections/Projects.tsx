import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";


const portfolioProjects = [
  {
    year: "2025",
    title: "AI Fitness Coaching Platform",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Next.js, Tailwind CSS, Vapi, Gemini AI, Convex DB, Clerk" },
    ],
    link: "https://lavi-flex-ai.vercel.app/",
    repolinl: "https://github.com/ChetanAnandaReddyKukutla/LaviFlex.ai",
    image: darkSaasLandingPage,
  },
  {
    year: "2025",
    title: "PathPlot - Travel Planner Web App",
    results: [
      { title: "Interactive map routes and itinerary builder" },
      { title: "Responsive design and real-time data sync" },
      { title: "Seamless Google Maps integration and location search" },
    ],
    link: "https://path-plot-travel-planner.vercel.app/",
    repolinl: "https://github.com/ChetanAnandaReddyKukutla/PathPlot-TravelPlanner",
    image: lightSaasLandingPage,
  },
  {
    year: "2024",
    title: "Personal Portfolio Website",
    results: [
      { title: "Shocased projects and artworks with dynamic data sourcing" },
      { title: "Integrated custom analytics to track user interaction and behavior" },
      { title: "Maintained high code quality with ESLint and Prettier" },
    ],
    link: "https://portfolio-chi-weld-26.vercel.app/",
    repolinl: "https://github.com/ChetanAnandaReddyKukutla/portfolio",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24 ">
      <div className="container">
        <div className="flex justify-center ">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r  from-emerald-300 to-sky-400 bg-clip-text text-transparent ">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 md:text-lg mt-4 max-w-md mx-auto lg:text-xl">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col gap-20 mt-10 md:mt-20 ">
          {portfolioProjects.map((project ,projectIndex) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
                
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16 ">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text  ">
                
                <span>{project.year}</span>
                </div>
              
              <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result, resultIndex) => (
                  <li key={resultIndex} className="flex items-start gap-2 text-sm text-white/50 md:text-base">
                    <span className="flex-shrink-0">
                      <CheckCircleIcon className="size-5 md:size-6" />
                    </span>
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
                <div className="flex flex-col md:flex-row gap-4 mt-8">
                <a href={project.link} className="w-full md:w-auto">
                  <button className="bg-white text-gray-950 h-12 rounded-xl font-semibold inline-flex items-center justify-center gap-2 w-full px-6 hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                    <span>Visit Live Site</span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </a>
                <a href={project.repolinl} className="w-full md:w-auto">
                  <button className="bg-gray-900 text-white h-12 rounded-xl font-semibold inline-flex items-center justify-center gap-2 w-full px-6 border border-white/20 hover:border-white/40 hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                    <span>GitHub Repo</span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </a>
                </div>
              </div>
              <div className="relative">
                
              <Image src={project.image} alt={project.title}
              className="mt-8 -mb-4 md:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"/>
              
              </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

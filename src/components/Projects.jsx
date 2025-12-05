import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/FileManager_2.png";
import image2 from "../assets/ManagerSystem_1.png";
import image3 from "../assets/quiz-1.png";
import image4 from "../assets/Movieflix_1.png";
import image5 from "../assets/Portfolio_1.png";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function Projects() {
  const { t } = useTranslation();
  const [slidesToShow, setSlidesToShow] = useState(3);

  // handle responsive slidesToShow based on window width
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // mobile
        setSlidesToShow(1);
      } else if (width < 1024) {
        // tablet / smaller laptop
        setSlidesToShow(2);
      } else {
        // desktop
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow(); // run immediately on first render
    window.addEventListener("resize", updateSlidesToShow);

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  {
    /* Slider settings  */
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow, // dynamic based on state
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  {
    /* listProjects data */
  }
  const listProjects = [
    {
      id: 1,
      image: image1,
      title: t("projects.projectOne.title"),
      description: t("projects.projectOne.description"),
      tech: ["C#", "Windows Forms"],
      github: null,
    },
    {
      id: 2,
      image: image2,
      title: t("projects.projectTwo.title"),
      description: t("projects.projectTwo.description"),
      tech: ["C#", "Windows Forms", "API"],
      github: null,
    },
    {
      id: 3,
      image: image3,
      title: t("projects.projectThree.title"),
      description: t("projects.projectThree.description"),
      tech: ["C#", "ASP.NET MVC", "HTML", "CSS", "SQL Server"],
      github: null,
    },
    {
      id: 4,
      image: image4,
      title: t("projects.projectFour.title"),
      description: t("projects.projectFour.description"),
      tech: ["HTML", "CSS", "JavaScript", "API"],
      github: null,
    },
    {
      id: 5,
      image: image5,
      title: t("projects.projectFive.title"),
      description: t("projects.projectFive.description"),
      tech: ["React", "i18next", "Tailwind CSS"],
      github: "https://github.com/MZAHER1988/zaher-portfolio",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden text-white body-font flex flex-col scroll-mt-20"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div className="container px-5 py-24 mx-auto">
        <h2 className="text-4xl text-center mb-12 text-orange-600 font-extrabold">
          {t("projects.title")}
        </h2>
        <Slider {...settings}>
          {listProjects.map((project) => (
            <div key={project.id} className="p-6 md:w-full">
              <div className="flex flex-col h-full w-full min-h-[500px] border-2 border-orange-500 shadow-[0_0_12px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden text-center p-0 hover:shadow-[0_0_40px_rgba(255,165,0,0.5)] transition-shadow duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full lg:h-48 md:h-36 sm:h-24 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="tracking-widest text-xl title-font font-medium text-yellow-400 mb-1">
                    {project.title}
                  </h3>
                  <p dir="auto" className="leading-relaxed mb-3">
                    {project.description}
                  </p>
                </div>

                {/* Code länks and programming languages */}
                <div className="mt-auto flex flex-wrap justify-center gap-2 mb-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mb-3 inline-block text-orange-400 hover:text-yellow-400 font-semibold"
                    >
                      🔗 Code
                    </a>
                  )}
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-full text-xs bg-white/10 text-white border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

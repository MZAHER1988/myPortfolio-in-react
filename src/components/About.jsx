import React from "react";
import img_about from "../assets/experience.png";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative overflow-hidden text-gray-600 body-font flex flex-col scroll-mt-20"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      {/* Background Blurs */}
      <div className="absolute top-[100px] left-64 inset-x-0 flex items-start justify-center">
        <div className="h-96 w-96 bg-gradient-to-br from-[#ff910a] blur-2xl invisible opacity-40 rounded-full"></div>
        <div className="h-96 w-96 bg-gradient-to-r from-[#ff910a] blur-2xl opacity-40 rounded-full"></div>
      </div>
      {/* Content */}
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0"
        >
          {/* Decorative Gradient Box Behind Image */}
          <div className="md:h-[450px] h-[400px] w-[300px] md:right-36 bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 absolute rounded-md transform rotate-3 -top-8 shadow-[0_0_40px_rgba(255,165,0,0.7)] z-0"></div>
          <img
            src={img_about}
            className="object-cover md:w-[300px] md:h-[450px] object-center rounded relative z-10 rotate-3"
            alt={t("about.img_aboutAlt")}
          />
        </div>
        {/* Text Content */}
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-start items-center text-center"
        >
          <h1 className="title-font mb-4 text-orange-600 text-4xl text-center font-extrabold">
            {t("about.title")}
          </h1>
          <h2 className="title-font sm:text-2xl text-xl mb-4 font-bold text-white">
            {t("about.title2")}
          </h2>
          <p className="mb-8 leading-relaxed text-white">
            <Trans i18nKey="about.description" components={{ br: <br /> }} />
          </p>
        </div>
      </div>
    </section>
  );
}

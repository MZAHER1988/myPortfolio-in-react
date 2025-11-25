import React from "react";
import javascript from "../assets/js_5968292.png";
import c_sharp from "../assets/c-sharp_6132221.png";
import html_5 from "../assets/html-5.png";
import css_3 from "../assets/css.png";
import java from "../assets/java.png";
import php from "../assets/php.png";
import sql from "../assets/database_sql.png";
import mySql from "../assets/mysql.png";
import nodeJS from "../assets/nodejs.png";
import in_React from "../assets/physics.png";
import python from "../assets/python.png";
import wordPress from "../assets/wordpress.png";
import git from "../assets/github-100.png";
import tailwind_css from "../assets/tailwind-css.png";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="relative overflow-hidden text-white body-font flex flex-col"
    >
      <h1
        data-aos="fade-right"
        data-aos-delay="500"
        className="text-4xl text-center font-extrabold text-orange-600"
      >
        {t("skills.title")}
      </h1>
      <div className="container flex flex-wrap px-5 py-24 mx-auto items-center md:flex-row flex-col">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="md:w-1/2 md:pe-12 md:py-8 md:border-e md:border-b-0 mb-20 md:mb-0 pd-10 border-b 
                border-orange-500 text-center "
        >
          <p
            data-aos="fade-right"
            data-aos-delay="500"
            className="leading-relaxed text-base mb-4"
          >
            <Trans
              i18nKey="skills.description"
              components={{
                i: <i className="font-medium" />,
                br: <br />,
              }}
            />
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          className="flex flex-col md:w-1/2 md:pl-12"
        >
          <ul className="flex flex-wrap list-none -mb-1">
            <li className="lg:w-1/4 mb-4 w-1/2 sm:w-1/3 mb-6 flex flex-col items-center text-center glow ">
              <img
                src={javascript}
                alt=""
                className="rounded-full w-14 h-14 object-cover bounce-loop "
              />
              <p className="mt-2 text-sm">JavaScript</p>
            </li>
            <li className="lg:w-1/4 mb-4 w-1/2 sm:w-1/3 mb-6 flex flex-col items-center text-center glow">
              <img
                src={c_sharp}
                alt=""
                className="rounded-full w-14 h-14 object-cover bounce-loop"
              />
              <p className="mt-2 text-sm">C#</p>
            </li>
            <li className="lg:w-1/4 mb-4 w-1/2 sm:w-1/3 mb-6 flex flex-col items-center text-center glow">
              <img
                src={html_5}
                alt=""
                className="rounded-full w-14 h-14 object-cover bounce-loop"
              />
              <p className="mt-2 text-sm">HTML5</p>
            </li>
            <li className="lg:w-1/4 mb-4 w-1/2 sm:w-1/3 mb-6 flex flex-col items-center text-center glow">
              <img
                src={css_3}
                alt=""
                className="rounded-full w-14 h-14 object-cover bounce-loop"
              />
              <p className="mt-2 text-sm">CSS3</p>
            </li>
            <li className="lg:w-1/4 mb-4 w-1/2 sm:w-1/3 mb-6 flex flex-col items-center text-center glow">
              <img
                src={java}
                alt=""
                className="rounded-full w-14 h-14 object-cover bounce-loop"
              />
              <p className="mt-2 text-sm">Java</p>
            </li>
            <li className="lg:w-1/4 mb-4 w-1/2 sm:w-1/3 mb-6 flex flex-col items-center text-center glow">
              <img
                src={php}
                alt=""
                className="rounded-full w-14 h-14 object-cover bounce-loop"
              />
              <p className="mt-2 text-sm">PHP</p>
            </li>
            <li className="lg:w-1/4 mb-4 w-1/2 sm:w-1/3 mb-6 flex flex-col items-center text-center glow">
              <img
                src={sql}
                alt=""
                className="rounded-full w-14 h-14 object-cover bounce-loop"
              />
              <p className="mt-2 text-sm">SQL</p>
            </li>
            <li className="lg:w-1/4 mb-4 w-1/2 sm:w-1/3 mb-6 flex flex-col items-center text-center glow">
              <img
                src={mySql}
                alt=""
                className="rounded-full w-14 h-14 object-cover bounce-loop"
              />
              <p className="mt-2 text-sm">MySQL</p>
            </li>
            <li className="lg:w-1/4 mb-4 w-1/2 sm:w-1/3 mb-6 flex flex-col items-center text-center glow">
              <img
                src={nodeJS}
                alt=""
                className="rounded-full w-14 h-14 object-cover bounce-loop"
              />
              <p className="mt-2 text-sm">Node.js</p>
            </li>
            <li className="lg:w-1/4 mb-4 w-1/2 sm:w-1/3 mb-6 flex flex-col items-center text-center glow">
              <img
                src={in_React}
                alt=""
                className="rounded-full w-14 h-14 object-cover bounce-loop"
              />
              <p className="mt-2 text-sm">React</p>
            </li>
            <li className="lg:w-1/4 mb-4 w-1/2 sm:w-1/3 mb-6 flex flex-col items-center text-center glow">
              <img
                src={python}
                alt=""
                className="rounded-full w-14 h-14 object-cover bounce-loop"
              />
              <p className="mt-2 text-sm">Python</p>
            </li>
            <li className="lg:w-1/4 mb-4 w-1/2 sm:w-1/3 mb-6 flex flex-col items-center text-center glow">
              <img
                src={wordPress}
                alt=""
                className="rounded-full w-14 h-14 object-cover bounce-loop"
              />
              <p className="mt-2 text-sm">WordPress</p>
            </li>
            <li className="lg:w-1/4 mb-4 w-1/2 sm:w-1/3 mb-6 flex flex-col items-center text-center glow">
              <img
                src={git}
                alt=""
                className="rounded-full w-14 h-14 object-cover bounce-loop"
              />
              <p className="mt-2 text-sm">Git</p>
            </li>
            <li className="lg:w-1/4 mb-4 w-1/2 sm:w-1/3 mb-6 flex flex-col items-center text-center glow">
              <img
                src={tailwind_css}
                alt=""
                className="rounded-full w-14 h-14 object-cover bounce-loop"
              />
              <p className="mt-2 text-sm">Tailwind CSS</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

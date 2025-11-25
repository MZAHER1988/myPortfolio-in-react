import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const listNavbar = [
    { name: "nav.home", href: "#home" },
    { name: "nav.skills", href: "#skills" },
    { name: "nav.about", href: "#about" },
    { name: "nav.projects", href: "#projects" },
    { name: "nav.contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-700 rounded-lg shadow mt-12 items-center justify-center space-y-4 md:space-y-0 md:flex md:justify-between md:items-center p-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className="block text-xl font-bold py-3 text-center items-center justify-center md:py-0">
          <a
            href="#"
            className="text-orange-600 text-xl md:text-2xl lg:text-3xl font-bold hover:underline"
          >
            M ZAHER HARIRI
          </a>
        </span>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-wrap items-center mt-1 text-xl font-medium sm:mt-0 justify-center">
            {listNavbar.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-200 hover:text-orange-600 mx-4 md:me-6 "
                >
                  {t(item.name)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="py-8 text-center items-center justify-center md:py-0">
          <p dir="auto" className="text-gray-200 items-center justify-center">
            {t("footer.rightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}

import React, { useState } from "react";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation(); // t-function to get text from translation files, i18n to handle language
  const [isLangOpen, setIsLangOpen] = useState(false); // State to handle if language dropdown is open or closed
  const [isLangOpenMobile, setIsLangOpenMobile] = useState(false); // State to handle if language dropdown in mobile menu is open or closed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false); // State to handle if mobile menu is open or closed

  // Languages supported in the dropdown menu
  const langs = [
    { code: "en", name: "English", dir: "ltr", flag: "🌐 EN" },
    { code: "sv", name: "Svenska", dir: "ltr", flag: "🌐 SE" },
    { code: "ar", name: "العربية", dir: "rtl", flag: "🌐 AR" },
  ];

  // Get the current language from i18n to highlight the selected language in the dropdown
  const current = (i18n.language || "en").split("-")[0];
  const currentLang = langs.find((l) => l.code === current) || langs[1];

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false); // Close desktop language dropdown
    setIsLangOpenMobile(false); // Close mobile language dropdown
    setIsMobileMenuOpen(false); // Close mobile menu
  };

  {
    /** Navbar links */
  }
  // Define the links to be displayed in the navigation bar
  const listNavbar = [
    { name: "nav.home", href: "#home" },
    { name: "nav.skills", href: "#skills" },
    { name: "nav.about", href: "#about" },
    { name: "nav.projects", href: "#projects" },
    { name: "nav.contact", href: "#contact" },
  ];

  {
    /** Hamburger menu links, excluding "Contact" */
  }
  const listHamburgerMenu = listNavbar.filter(
    (item) => item.name !== "nav.contact"
  );

  // Function to toggle the visibility of the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle clicks on links in the mobile menu
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);

    // Smoothly scroll to the target element with an offset to avoid it being hidden under the navbar
    if (target) {
      const Offset = -100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + Offset;

      // Smooth scrolling
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Update URL without reloading the page
    window.history.replaceState(null, "", href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      data-aos="fade-up"
      className="text-gray-600 body-font fixed top-0 inset-x-0 z-50 bg-black/30 backdrop-blur-sm"
    >
      <div className="container mx-auto flex flex-row p-5 items-center justify-between w-full">
        <a
          href="#home"
          className="flex title-font font-medium items-center text-gray-900"
        >
          <span className="ml-3 text-orange-600 text-xl md:text-2xl lg:text-3xl font-bold ">
            M ZAHER HARIRI
          </span>
        </a>
        {/** Desktop Menu */}
        <nav className="hidden sm:flex text-white text-base justify-end items-center">
          {listNavbar.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="mx-4 text-font font-bold hover:text-orange-500"
            >
              {t(item.name)}
            </a>
          ))}
        </nav>

        {/** Language Dropdown, desktop */}
        <div className="hidden sm:flex text-white text-base justify-end items-center">
          <div className="relative">
            <button
              onClick={() => setIsLangOpen((o) => !o)}
              className="flex items-center gap-2 px-3 py-2 rounded hover:bg-orange-500 transition focus:outline-none mx-3"
              aria-haspopup="menu"
              aria-expanded={isLangOpen}
            >
              <FaGlobe className="text-xl" />
              <span className="text-sm opacity-90">{currentLang.name}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isLangOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/**Language Dropdown menu when it's open */}
            {isLangOpen && (
              <div
                role="menu"
                className="absolute end-0 mt-2 w-40 rounded-md border border-white/10 bg-black/80 backdrop-blur-md shadow-lg"
              >
                {langs.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex items-center w-full gap-2 px-3 py-2 text-left text-sm hover:bg-orange-500/30 ${
                      current === lang.code ? "text-orange-400" : "text-white"
                    }`}
                  >
                    {/* Here "EN", "SE", "AR" are always displayed */}
                    <span className="px-2 py-0.5 rounded bg-white/10 text-xs font-semibold">
                      {lang.flag || lang.code.toUpperCase()}
                    </span>
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/** Mobile Menu*/}
        <div className="rounded-lg backdrop-blur-md sm:hidden">
          <div className="flex items-center justify-end w-full">
            <div className="flex items-center justify-end w-full">
              <button
                className="focus:outline-none sm:hidden p-2 text-white hover:text-orange-500"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden w-full border border-white/10 mx-auto">
          <ul className="mx-auto max-w-none px-5 py-4 flex flex-col gap-4 backdrop-blur-md shadow-xl">
            {listHamburgerMenu.map((item) => (
              <li key={item.name}>
                <a
                  className="block w-full text-xl font-bold text-white hover:text-orange-500"
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {t(item.name)}
                </a>
              </li>
            ))}

            {/** Language Switcher */}
            {/* Language as a dropdown menu item in mobile */}
            <li className="text-start">
              <button
                onClick={() => setIsLangOpenMobile((v) => !v)}
                className="w-full text-xl font-bold text-white flex items-center justify-start gap-2 transition-colors"
                aria-expanded={isLangOpenMobile}
                aria-controls="mobile-lang-list"
              >
                {t("nav.language") || "Language"}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isLangOpenMobile ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isLangOpenMobile && (
                <ul
                  id="mobile-lang-list"
                  className="mt-2 ms-4 flex flex-col items-start gap-2 justify-center"
                >
                  {langs.map((lang) => (
                    <li key={lang.code}>
                      <button
                        onClick={() => changeLanguage(lang.code)}
                        className={`text-base flex items-center gap-2 text-gray-300 transition-colors ${
                          current === lang.code ? "text-orange-400" : ""
                        }`}
                      >
                        <span className="px-2 py-0.5 rounded bg-white/10 text-xs font-bold">
                          {lang.flag || lang.code.toUpperCase()}
                        </span>
                        {lang.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {/* Contact Button */}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="block w-full text-center rounded-md border border-white/70 text-white
                       py-2 bg-orange-500 hover:bg-white hover:text-gray-900 transition-colors"
              >
                {t("nav.contact")}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

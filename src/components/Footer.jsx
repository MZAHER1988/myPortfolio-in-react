import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  // Same links as in navbar – translated via i18n keys 
  const listNavbar = [
    { name: "nav.home", href: "#home" },
    { name: "nav.skills", href: "#skills" },
    { name: "nav.about", href: "#about" },
    { name: "nav.projects", href: "#projects" },
    { name: "nav.contact", href: "#contact" },
  ];

  return (
    <footer className="text-gray-600 body-font bottom-0 inset-x-0 z-50 bg-black/30 backdrop-blur-sm rounded-lg shadow mt-12 items-center justify-center space-y-4 md:space-y-0 md:flex md:justify-between md:items-center">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-6 md:flex md:items-center md:justify-between">
        <span className="block text-xl font-bold py-3 text-center items-center justify-center md:py-0">
          <a
            href="#home"
            className="text-orange-600 text-xl md:text-2xl lg:text-3xl font-bold"
          >
            M ZAHER HARIRI
          </a>
        </span>
        
        <div className="py-8 text-center items-center justify-center md:py-0">
          <p dir="auto" className="text-gray-200 items-center justify-center">
            {t("footer.rightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
}

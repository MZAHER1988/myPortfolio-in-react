# My Portfolio — React + Vite

This is my personal portfolio website built with React and Tailwind CSS.  
It showcases my skills, projects and education, and includes a contact form so people can reach me.

---

## Features

- Responsive layout (works on mobile, tablet and desktop)
- Multi-language support: English, Swedish and Arabic
- Animated sections using AOS
- Projects section with images and short descriptions
- Contact form powered by Web3Forms + SweetAlert2 for feedback

---

## Tech Stack

- Framework: React (JSX)
- Tailwind CSS: for styling
- i18next: for translations  
- React Slick: for the project slider  
- SweetAlert2: for alert dialogs  
- AOS: for animation on scroll

---

## Project Structure (short overview)

src/
 - App.jsx _ main layout
 - main.jsx _ React + i18n entry
 - i18n.jsx _ i18next configuration
 - components/ _ Navbar, Hero, Skills, About, Projects, Contact, Footer
 - assets/ _ images and icons

public/
- locales/{en,sv,ar}/translation.json — i18n translation resources

---

## Getting started

 ### Clone the repo
git clone https://github.com/MZAHER1988/myPortfolio-in-react.git
cd myPortfolio-in-react

### Install dependencies
npm install

### Start the dev server (Vite):
npm run dev

Then open http://localhost:5173 in your browser to preview.

---

## License and Credits

This repository contains images and content created by the project owner.

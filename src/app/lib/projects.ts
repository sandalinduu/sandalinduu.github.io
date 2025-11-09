export interface Project {
  id: number
  title: string
  shortDescription: string
  fullDescription: string
  technologies: string[]
  image: string
  link?: string
  github?: string
  image2?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Techno News – Mobile App & UI Design",
    shortDescription: "A mobile app for students and staff to stay updated with faculty news and events",
    fullDescription:
      `"Techno News" is a mobile app made for students and staff at the Faculty of Technology, University of Colombo. The app helps users stay updated with the latest news, events, and academic announcements. This document explains how I designed the user interface (UI) for the app using Google’s Material Design rules. It includes the app’s logo, screens, buttons, and other parts used in the design. The main goal is to keep the app easy to use, clear to understand, and visually appealing.`,
    technologies: ["Java", "XML", "Adobe XD", "Material Design", "Android Studio"],
    image: "/projectImage/Techno news.png",
    image2: "/projectImage/Techno news2.png",
    link: "https://example.com/techno-news-app",
    github: "https://github.com/sandalinduu/fot-news-app",
  },
  {
    id: 2,
    title: "Eco Tourism QR Explorer – Web Application",
    shortDescription: "A mobile-first web app to explore eco-tourism locations via QR codes",
    fullDescription:
      `"Eco Tourism QR Explorer" is a mobile-first web application that allows visitors to discover eco-tourism sites by scanning QR codes placed at locations. The platform displays detailed place information including images, descriptions, and related sites. Admins can manage content through a secure dashboard. The app emphasizes a clean, modern, monochromatic deep blue UI, responsive layouts, and accessibility. Designed to be intuitive for visitors without requiring login while providing a robust admin experience.`,
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "Responsive Design"],
    image: "/projectImage/eco.png",
    image2: "/projectImage/eco2.png",
    link: "https://example.com",
    github: "https://github.com/sandalinduu/Eco-Tourism-QR-Explorer.git",
  },
  {
    id: 3,
  title: "My Personal Portfolio – Showcasing Skills, Projects, and Designs",
  shortDescription: "A responsive web portfolio showcasing my projects and skills",
  fullDescription: "A personal portfolio website built to showcase my skills, projects, and achievements. Features include a hero section, skills section, projects section with detailed cards, and a contact form. Designed with a modern and responsive layout using Next.js and Tailwind CSS, optimized for both desktop and mobile viewing.",
  technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Font Awesome"],
    image: "/projectImage/port.png",
    image2: "/projectImage/port2.png",
    link: "https://example.com",
    github: "https://github.com/sandalinduu/my-portfolio.git",
  },
  {
  id: 4,
  title: "Ridmanjali Dancing Academy – UI Design",
  shortDescription: "A UI design project for a Sri Lankan dance academy for students from preschool to advanced levels",
  fullDescription: 
    `"Ridmanjali Dancing Academy" UI design project showcases the dance programs for all ages, from preschool beginners to advanced students. Many students and parents previously asked about class schedules, costume payments, and performance images, which was hard to manage. This design solves those issues by providing a clear layout for class details, schedules, costumes, and a gallery, making information easy to find. The UI highlights traditional Sri Lankan dance styles including Udarata, Pahatharata, Sabaragamu, and Folk dance, along with the founder's achievements and the academy's vision. The design is clean, modern, and user-friendly, prepared to be developed into a fully functional website in the future.`,
  technologies: ["Figma","UI/UX Design"],
  image: "/projectImage/RidmanjaliAcademy1.png",
  image2: "/projectImage/RidmanjaliAcademy2.png",
  link: "https://example.com/ridmanjali-dancing-academy",
  github: "",
}
  
]

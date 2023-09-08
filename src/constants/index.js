import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  nextjs,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  prisma,
  jobster,
  comfySloth,
  mixMaster,
  threejs,
  logo,
  user1,
  user2,
  user3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },

  {
    title: "React. js",
    icon: creator,
  },
  {
    title: "Next. js",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next Js",
    icon: nextjs,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "prisma",
    icon: prisma,
  },
];

const experiences = [
  {
    title: "Coming Soon...",
    icon: logo,
    iconBg: "#383E56",
    date: "At your Company",
  },
  // {
  //   title: "Coming Soon...",
  //   icon: logo,
  //   iconBg: "#E6DEDD",
  //   date: "At your Company",
  // },
  // {
  //   title: "Coming Soon...",
  //   icon: logo,
  //   iconBg: "#383E56",
  //   date: "At your Company",
  // },
  // {
  //   title: "Coming Soon...",
  //   company_name: "Meta",
  //   icon: logo,
  //   iconBg: "#E6DEDD",
  //   date: "At your Company",
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Samir proved me wrong.",
    name: "Vishal",
    designation: "CFO",
    company: "***",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Samir does.",
    name: "Jenny",
    designation: "COO",
    company: "***",
    image: user2,
  },
  {
    testimonial:
      "After Samir optimized our website, our traffic increased by 50%. We can't thank him enough for efforts!",
    name: "Denzel",
    designation: "CTO",
    company: "****",
    image: user3,
  },
];

const projects = [
  {
    name: "Jobster",
    description:
      "Web-based platform that allows users to keep track ,maintain records of their job application with data analysis charts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
      {
        name: "react-router",
        color: "blue-text-gradient",
      },
    ],
    image: jobster,
    source_code_link: "https://github.com/sam-k9/Jobster",
    live_link: "https://jobsterby.netlify.app/",
  },
  {
    name: "Comfy Sloth",
    description:
      " E-Commerce Web application that enables users to browse various products,sort them based on  various criteria.Integrated Stripe Payment gateway and Auth0 authentication",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
      {
        name: "auth0-react",
        color: "pink-text-gradient",
      },
    ],
    image: comfySloth,
    source_code_link:
      "https://github.com/sam-k9/temp-react-comfysloth/tree/main",
    live_link: "https://comfy-slothby.netlify.app/",
  },
  {
    name: "Mix Master",
    description:
      "A platform that allows users to browse among various mocktails and know more details about it and subscribe to newsletter. Searched results are cached for faster results",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-query",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: mixMaster,
    source_code_link: "https://github.com/sam-k9/MixMaster",
    live_link: "https://mixmasterby.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };

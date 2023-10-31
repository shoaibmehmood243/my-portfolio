import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  pursueToday,
  emblem,
  ultraCodes,
  oqvest,
  trudy,
  dwm,
  nothing,
  electrical,
  biostrap,
  twindom,
  onio,
  hoobank,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Js Developer",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Node.js Developer",
    company_name: "Pursue Today",
    icon: pursueToday,
    iconBg: "#383E56",
    date: "Spet 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Emblem Technologies",
    icon: emblem,
    iconBg: "#212529",
    date: "March 2023 - Sept 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mern Stack Developer",
    company_name: "UltraCodes Pvt Ltd",
    icon: ultraCodes,
    iconBg: "#383E56",
    date: "Feb 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Oqvest",
    icon: oqvest,
    iconBg: "#cbdffe",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Great Work Ethic! Worked Tirelessly To Deliver And Very Responsive With Communication.",
    name: "Trudy Northcott",
    designation: "CEO",
    company: "Biostrap",
    image: trudy,
  },
  {
    testimonial:
      "Excellent Work, Very Good Communication. No Problems And Difficulties. Thanks!",
    name: "Fanatico",
    designation: "CEO",
    company: "DealWm",
    image: dwm,
  },
  {
    testimonial:
      "The Work For My Website Was Done Perfectly In A Timely And Professional Manner. Highly Recommended.",
    name: "Rupinder Sayal",
    designation: "Founder",
    company: "rupindersayal",
    image: nothing,
  },
];

const projects = [
  {
    name: "Electrical.com",
    description:
      "Electrical.com sells power distribution products. Circuit Breakers, Switchgear, Bus Plugs, Transformers, Switches, and all types of electrical equipment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: electrical,
    source_code_link: "https://www.electrical.com/",
  },
  {
    name: "Biostrap",
    description:
      "Fully Configurable Platform. One size does not fit all when it comes to using wearable technology. Biostrap offers an end-to-end remote health monitoring.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: biostrap,
    source_code_link: "https://biostrap.com/",
  },
  {
    name: "Twindom",
    description:
      "Learn about the Twinstant Mobile Full Body 3D Scanner - a portable, high quality 3D body scanner that makes 3D printed figurines, 3D portraits.",
    tags: [
      {
        name: "angular",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: twindom,
    source_code_link: "https://admin.twindom.com/",
  },
  {
    name: "Onio.ai",
    description:
      "Imagine creating compelling AI-driven ads effortlessly, engaging chatbots that never sleep, and seamless CRM integration, all within your budget!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: onio,
    source_code_link: "https://lead.onio.ai/",
  },
  {
    name: "Hoobank",
    description:
      "HooBank is a futuristic bank. Everything you need to accept card payments and grow your business anywhere on the planet.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: hoobank,
    source_code_link: "https://hoooobank.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };

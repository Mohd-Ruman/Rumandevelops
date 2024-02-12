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
    codebracket,
    dotnet,
    reactsvg,
    uiux,
    nextjs,
    metaverses,

  } from "../assets";

  import sushiman from '../assets/sushiman.png';
  import rumportfolio from '../assets/rumportfolio.png';
  
  
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
      icon: codebracket,
    },
    {
      title: "React Developer",
      icon: reactsvg,
    },
    {
      title: "ASP.NET Developer",
      icon: dotnet,
    },
    {
      title: "UI / UX Designer",
      icon: uiux,
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
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
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "HTML | CSS | Javascript",
      company_name: "",
      icon: codebracket,
      iconBg: "#383E56",
      // date: "2008 - 2022",
      points: [
        "Created a sushi restaurant website",
        "Used AOT animation library to create window triggered animations",
        "Used best css practices to maintain clean css code with variables",
        "Created Restfull API projects with fetch function using async & await"
      ],
    },
    {
      title: "Git & Github",
      company_name: "",
      icon: git,
      iconBg: "#E6DEDD",
      // date: "Jan 2021 - Feb 2022",
      points: [
        "Push, Pull, and maintain repositories",
        "Understanding the structure of branches for team collaboration",
        "Implementing good commit practices to ensure better and effective project tracking.",
      ],
    },
    {
      title: "React JS",
      // company_name: "Shopify",
      icon: reactjs,
      iconBg: "#383E56",
      // date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Using Vite and tailwind css to quickly develope dynamic and responsive react interfaces",
        "Using figma to create prototypes for quick overview of development process",
        "Using libraries for implementing amazing user interface development",
        "Worked with libraries like : ThreeJS, motionJS"
      ],
    },
    {
      title: "Next JS & Vercel",
      // company_name: "By Vercel",
      icon: nextjs,
      iconBg: "#fff",
      // date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js with Next Framework.",
        "Use Vercel integrations for production deployement",
        "Vercel speed insight integrations to monitor sight performance"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "My 3d Portfolio",
      description:
        "My own portfolio that is developed with the use of 3d elements with threeJS, it is an accurate display for my skills and learning path, and what i am going to offer to my clients.",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "Three JS",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: rumportfolio,
      source_code_link: "https://github.com/Mohd-Ruman/react-portfolio-jsm3d",
    },
    {
      name: "Sushiman",
      description:
        "Website for an authentic japanese sushi restaurant, developed with welcoming interface and guided menu, mouth watering sushi illustrations and animated interface using AOT library.",
      tags: [
        {
          name: "HTML 5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS 3",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: sushiman,
      source_code_link: "https://github.com/Mohd-Ruman/sushiman",
    },
    {
      name: "Metaverse Concept",
      description:
        "Web-based platform that allows users to take a look into the world of metaverse, includes amazing interface and implementation of libraries for animated elements",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "Framer motion",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: metaverses,
      source_code_link: "https://github.com/Mohd-Ruman/metaversus-nextjs",
    },
    // {
    //   name: "Car Rent",
    //   description:
    //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "mongodb",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "tailwind",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: carrent,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "Job IT",
    //   description:
    //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "restapi",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "scss",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: jobit,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
 
  html,
  css,
  reactjs,
  
  tailwind,
  nodejs,
  mongodb,
  git,
  php,
  mysql,
  
  laravel,
  figma,
  bootstrap,
  amazo,
  barcode,

  projectone,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "Experience",
    title: "Work",
  },
  {
    id: "Works",
    title: "Portfolio",
  },
 
  
  {
    id: "Feedbacks",
    title: "Feedbacks",
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
    title: "Content Creator",
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
    name: "React JS",
    icon: reactjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Mysql",
    icon: mysql,
  },

];

const experiences = [
  {
    title: "Customer Service Officer",
    company_name: "AmazoPify Ltd.",
    icon: amazo,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Aug 2023",
    points: [
      "Managed and optimized online stores for clients, focusing on enhancing product visibility and customer engagement a.",
"Coordinated and executed product listing optimization projects to drive increased sales and improve search rankings.",
"Served and supported customers in the USA through online channels, ensuring a seamless shopping experience.",
"Collaborated with clients to align strategies and improve product performance on e-commerce platforms, contributing to growth and success."
    ],
  },
  {
    title: "PHP Web Developer",
    company_name: "BARCODETECH AUTOMATION",
    icon: barcode,
    iconBg: "#383E56",
    date: "Feb 2024 - May 2024",
    points: [
      "Building and maintaining robust web applications using PHP and related technologies.",
"Collaborating with cross-functional teams, including designers, product managers, and fellow developers, to deliver high-quality solutions.",
"Implementing responsive web designs and ensuring seamless cross-browser compatibility.",
"Participating in code reviews and offering constructive feedback to improve code quality across the team.",
    ],
  },
  
  
  
];


const testimonials = [
  {
    testimonial:
      "Working with Rick was a game-changer for our business. The website they delivered was both functional and stunning.",
    name: "Emily Carter",
    designation: "Founder",
    company: "BrightStart Inc.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
},
{
    testimonial:
      "Rick's attention to detail and ability to understand our needs made the entire process seamless. Highly recommend!",
    name: "James Smith",
    designation: "Project Manager",
    company: "AlphaTech",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
},
{
    testimonial:
      "The website Rick created for us not only looks great but also performs exceptionally well. Amazing work!",
    name: "Sophia Martinez",
    designation: "Lead Designer",
    company: "CreativeHub",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
},

];

const projects = [
  {
    name: "E-Commerce Website",
    description:
      "This e-commerce platform offers a categorized product catalog with detailed descriptions and images. Features include a dynamic shopping cart, secure user authentication, customer reviews, wishlist functionality, PayPal integration, and a newsletter subscription, all optimized for mobile devices.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "yellow-text-gradient",
      },
      {
        name: "laravel 11",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: projectone,
    source_code_link: "https://github.com/sumaya76/E-CommerceProjectLaravel",
  },
  {
    name: "Document Management System",
    description:
      "A Document Management System built with Laravel featuring role-based access control. Users can upload, view, and manage files (PDF, Word, images up to 2MB), while admins oversee all files and categories, ensuring secure access.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "yellow-text-gradient",
      },
      {
        name: "laravel 11",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/sumaya76/document-management",
    demo_code_link: "https://www.linkedin.com/posts/sumaya-1920921a5_document-management-system-laravel-activity-7250505713989394432-i8ZY?utm_source=combined_share_message&utm_medium=member_desktop_web",
  },
  {
    name: "E-Commerce Website",
    description:
    "FurniFrenzy is a dedicated e-commerce platform for furniture, offering product search, shopping cart, secure payments, and shipping options. It includes user profiles and customer support, while admins benefit from tools for managing products, orders, customers, and analytics.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "yellow-text-gradient",
      },
      
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "black-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/sumaya76/ecommerce_project",
    demo_code_link: "https://www.linkedin.com/posts/sumaya-1920921a5_new-project-alert-im-thrilled-to-activity-7214622539166146560-q9-5?utm_source=combined_share_message&utm_medium=member_desktop_web",
  },
  {
    name: "Hotel Booking System",
    description:
     "A user-friendly platform for seamless online reservations in the hospitality industry, offering user registration, hotel search, booking cart, instant confirmations, and a comprehensive admin dashboard for managing bookings and room inventory.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "yellow-text-gradient",
      },
      {
        name: "laravel 11",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "black-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/sumaya76/Hotelmanagement",
    demo_code_link: "https://www.linkedin.com/posts/sumaya-1920921a5_new-project-alert-im-thrilled-to-activity-7235960269812719616-_Rnm?utm_source=combined_share_message&utm_medium=member_desktop_web",
  },
 
  {
    name: "GitHub Profiles Search App",
    description:
    "A dynamic web app that lets users search for GitHub profiles by username, displaying profile info like username, avatar, and repositories. It features a responsive design and integrates with the GitHub API for real-time data.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      
    ],
    image: project5,
    source_code_link: "https://github.com/sumaya76/Hotelmanagement",
  },
  {
    name: "Countdown-Timer",
    description:
   "I developed a versatile Countdown Timer web application that can be used to track time until any significant event, including holidays, birthdays, or special occasions. The application dynamically displays the remaining days, hours, minutes, and seconds, making it an engaging tool for anticipation and celebration.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      
    ],
    image: project7,
    source_code_link: "https://github.com/sumaya76/countdown-timer",
    demo_code_link: "https://keen-nasturtium-891d5d.netlify.app/",
  },
  {
    name: "English Dictionary App",
    description:
    "This app lets you look up words instantly, providing meanings, synonyms, antonyms, and audio pronunciations! ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      
    ],
    image: project6,
    source_code_link: "https://github.com/sumaya76/Dynamic-Dictionary-App",
    demo_code_link: "https://serene-youtiao-c2112d.netlify.app/",
  },
  {
    name: "Food search app",
    description:
    "A food search app with real-time search, meal type filtering, and responsive design.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "yellow-text-gradient",
      },
      
    ],
    image: project8,
    source_code_link: "https://github.com/sumaya76/project_four",
    demo_code_link: "https://www.linkedin.com/posts/sumaya-1920921a5_react-webdevelopment-frontend-activity-7248466384190353409-GgmQ?utm_source=combined_share_message&utm_medium=member_desktop_web",
  },
  {
    name: "Currency Converter Web App",
    description:
    "Real-time currency conversions with a user-friendly interface, responsive design, and accessibility features for seamless global exchange rates.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Apis",
        color: "yellow-text-gradient",
      },
      
    ],
    image: project9,
    source_code_link: "https://github.com/sumaya76/githubprofile",
    demo_code_link: "https://hilarious-sawine-903797.netlify.app/",
  },
  {
    name: "Currency Converter Web App",
    description:
    "Real-time currency conversions with a user-friendly interface, responsive design, and accessibility features for seamless global exchange rates.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "yellow-text-gradient",
      },
      
    ], 
    image: project10,
    source_code_link: "https://github.com/sumaya76/My-Portfolio",
    demo_code_link:"https://www.linkedin.com/posts/sumaya-1920921a5_webdevelopment-reactjs-portfolio-activity-7253858727643000832-zrz3?utm_source=combined_share_message&utm_medium=member_desktop_web",
  },
];

export { services, technologies, experiences,  testimonials, projects };

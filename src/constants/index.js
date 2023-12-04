import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  harri,
  reactjs,
  redux,
  tailwind,
  git,
  threejs,
  sass,
  c,
  java,
  flutter,
  firebase,
  JourneyMakers,
  whereintheworld,
  safeDrive,
  cloud,
  aaup,
  udemy,
  bootstrap,
  upwork,
  memorygame,
  trippy,
  expesnses
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
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
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
    name: "C++",
    icon: c,
  },
  {
    name: "Java",
    icon: java,
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
    name: "SASS",
    icon: sass,
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
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  
];

const experiences = [
  {
    title: "Front-End Development Internship",
    company_name: "Harri",
    icon: harri,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Building pixel-perfect websites using HTML, CSS, Bootstrap, and Tailwind.",
      "Adding advanced functionality using JavaScript.",
      "clean and efficient code practices by implementing programming functional concepts such as pure functions and modularity",
      "Working with React.js utilizing best coding practices and React features.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Freelance",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Present",
    points: [
      "Solely conceived, designed, and developed a robust cloud-server web application using React.js, TypeScript, Tailwind CSS, and Firebase.",
      "Implemented secure login/signup, diverse payment integrations, and real-time messaging with administrators for enhanced user interaction.",
      "Offered customizable server settings, empowering users to tailor their hosting solutions according to their specific needs.",
      "Emphasized an intuitive UI/UX design, coupled with clean TypeScript code for scalability and reliability.",
      "Integrated a geographical map feature showcasing global server locations, providing valuable insights into the infrastructure.",
      "Demonstrated comprehensive end-to-end development skills and commitment to delivering a seamless user experience.",
    ],
  },
];
const certificates = [
  {
    title: "Computer Systems Engineer",
    company_name: "Arab American University",
    icon: aaup,
    iconBg: "#383E56",
  },
  {
    title: "React - The Complete Guide 2023 (incl. React Router & Redux)",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#383E56",
    points: [
      "Learn React from the ground up and finish the course as an advanced React developer.",
      "Manage complex state efficiently with React's Context API & React Redux.",
      "Learn about routing & route-related data fetching with React Router.",
      "Build fullstack React apps with NextJS.",
      "Build multiple high-quality demo apps, including a fullstack app built with NextJS.",
      "Build multiple demo projects & explore realistic examples.",
      "Learn all about React Hooks and React Components.",
      "Build standalone React apps & applications connected to a backend via HTTP.",
      "Implement user authentication in React apps",
      "Get started with React Unit Testing.",
    ],
  },
  {
    title: "Clean Code",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#383E56",
    points: [
      "Learn how to write code which is readable and understandable.",
      "Learn about key principles, rules and concepts that allow you to write clean code.",
      "Keep code alive by increasing maintainability with clean code.",
      "Learn with hands-on examples and bad to good code transformations.",
    ],
  },
  {
    title: "Data Structures + Algorithms",
    company_name: "Udemy",
    icon: udemy,
    iconBg: "#383E56",
    points: [
      "Learn, implement, and use different Data Structures.",
      "Learn, implement and use different Algorithms.",
    ],
  },
];

const projects = [
  {
    name: "Cloud Serves",
    description:
      "I independently conceived, designed, and crafted a robust cloud-server web application utilizing React.js, TypeScript, Tailwind CSS, and Firebase. The platform features secure login/signup, versatile payment integrations, and real-time messaging with administrators. Users enjoy customizable server settings, while a clean TypeScript codebase ensures scalability and reliability. Additionally, I integrated a geographical map displaying global server locations, exemplifying my commitment to a seamless user experience through comprehensive end-to-end development.",
    tags: [
      {
        name: "ReactJs",
      },
      {
        name: "TyprScript",
      },
      {
        name: "Firebase",
      },
      {
        name: "Tailwind",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "Formik",
      },
      {
        name: "Yup",
      },
      {
        name: "React-Table",
      },
    ],
    image: cloud,
    source_code_link:
      "https://github.com/ghanayemomar/Monitoring-System-Heart-Failure-FlutterApp",
  },
  {
    name: "Safe Drive",
    description:
      "Designed and implemented a heart attack monitoring system utilizing Flutter and hardware technology to continuously monitor heart beats, process data for dangerous changes, and instantly notify designated family members and emergency services via realtime alert notifications for prompt medical attention.",
    tags: [
      {
        name: "Dart",
      },
      {
        name: "Flutter",
      },
      {
        name: "Firebase",
      },
    ],
    image: safeDrive,
    source_code_link:
      "https://github.com/ghanayemomar/Monitoring-System-Heart-Failure-FlutterApp",
  },
  {
    name: "Journey Makers",
    description:
      "Web application that Showcasing various Journey HTML, CSS, SASS, 7-1 CSS architecture,BEM and Interactive animations.",
    tags: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "SCSS",
      },
    ],
    image: JourneyMakers,
    source_code_link: "https://github.com/ghanayemomar/JourneyMakers",
  },

  {
    name: "Where In The World",
    description:
      "Web application that Showing different countries with detailedinformations. HTML, CSS, Bootstrap, JavaScript, ReactJs, Tailwind and React Query",
    tags: [
      {
        name: "ReactJs",
      },
      {
        name: "Tailwind",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      
    ],
    image: whereintheworld,
    source_code_link: "https://github.com/ghanayemomar/WhereInTheWorldReact",
  },
  {
    name: "Memory Game",
    description:
      "Interactive memory card game built using React JavaScript and React Router. Players flip cards to match numbers, enhancing memory skills and cognitive abilities. The game incorporates engaging user interfaces with animations and transitions, providing an immersive experience. React's state management ensures seamless gameplay, while React Router facilitates navigation through different levels or game modes for an enjoyable and challenging experience.",
    tags: [
      {
        name: "ReactJs",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      
    ],
    image: memorygame,
    source_code_link: "https://github.com/ghanayemomar/memory-game",
  },
  {
    name: "Trippy App",
    description:
      "Immersive React-based trippy app showcasing diverse travel destinations and thrilling adventures. Crafted with JavaScript, this app displays an array of trips and places, offering users an exciting visual journey through captivating locations worldwide. With interactive features and engaging visuals, users can explore and discover new destinations, leveraging JavaScript's capabilities to create a seamless and dynamic experience. Whether it's vibrant cityscapes or serene landscapes, this app brings the world's wonders to users' fingertips, making travel planning an exhilarating experience.",
    tags: [
      {
        name: "ReactJs",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      
    ],
    image: trippy,
    source_code_link: "https://github.com/ghanayemomar/TrippyReactApp",
  },
  {
    name: "Expesnses App",
    description:
      "Efficient React-based expenses app designed to manage your shopping list effortlessly. With this app, users can seamlessly add items they intend to purchase, organizing their shopping needs efficiently. Built using React, the app provides a user-friendly interface where users can input and categorize items to buy, ensuring a systematic approach to shopping. JavaScript functionalities enable smooth item addition and management, while React state management simplifies the process of editing or removing items as needed. This app streamlines the shopping experience, helping users prioritize and keep track of their expenses with ease.",
    tags: [
      {
        name: "ReactJs",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      
    ],
    image: expesnses,
    source_code_link: "https://github.com/ghanayemomar/ExpensesReactApp",
  },
  
  
];

export { services, technologies, experiences, projects, certificates };

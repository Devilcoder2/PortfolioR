export const navItems = [
  { name: "Experience", link: "#experience"},
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#about" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "My tech stack",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] flex flex-col items-center ", // Changed className
    imgClassName: "w-full h-full",
    titleClassName: "justify-center", // Changed titleClassName
    img: "",
    spareImg: "",
  },

  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projectExperience = [
  {
    id: 1,
    title: "GitHub Repository Manager",
    desc: "Built a real-time repository management system with GitHub OAuth, infinite scrolling, repository creation, and editing features like visibility and name updates.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    link: "https://github.com/Devilcoder2/GitHub-Repository-Manager",
  },
  {
    id: 2,
    title: "DozeAlert",
    desc: "Built driver drowsiness detecting system using Machine Learning Algorithms and addressed class imbalance through data resampling techniques.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    link: "https://github.com/Devilcoder2/Driver_Drowsiness_Detection_system",
  },
  {
    id: 1,
    title: "GeoScope NYC",
    desc: "Integrated GeoJSON data with filtering options and tooltips for detailed population insights. •Added map features like drawing geometries, fullscreen view, and downloadable snapshots.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    link: "https://github.com/Devilcoder2/GeoScope-NYC",
  },
  {
    id: 4,
    title: "Clothify",
    desc: "Implemented a Convolutional Neural Network using Keras to classify fashion images into categories, achieving an 87.72% accuracy.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    link: "https://github.com/Devilcoder2/Fashion_Class_Classification",
  },

  {
    id: 3,
    title: "Swiggy Clone",
    desc: "Web Application featuring a wide range of functionalities including advanced filtering, infinite scrolling, online/offline status indicators, an attractive and interactive userinterface, and a CI/CD pipeline for continuous integration and deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
    link: "https://github.com/Devilcoder2/SwiggyClone",
  },
  {
    id: 5,
    title: "ParkVision",
    desc: "Employed Computer Vision techniques and Image Processing to develop a sophisticated system capable of accurately counting and monitoring empty parking slots.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    link: "https://github.com/Devilcoder2/Car_parking_slot_counting",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer Intern",
    desc: "Mapsense Technologies (July 2024 - Present)",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Developer Intern",
    desc: "CrackDSA (March 2023 - May 2023)",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Devilcoder2",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://leetcode.com/u/ramandeepsingh40270/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ramandeep-singh-3b6560249",
  },
];

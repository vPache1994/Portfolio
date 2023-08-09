import {
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    todo,
    threejs,
    premiere,
    photoshop,
    blender
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
      title: "3D Modeler",
      icon: web,
    },
    {
      title: "Video Editor",
      icon: web,
    },
    {
      title: "Image Editor",
      icon: web,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "Content Creator Image Editing",
      company_name: "Freelance",
      icon: photoshop,
      iconBg: "#383E56",
      date: "Dec 2020 - Present",
      points: [
        "Creating thumbnails to their youtube channels.",
        "Making creative banners for social media.",
        "Making overlays to live streamings.",
      ],
    },
    {
      title: "Content Creator Video Editing",
      company_name: "Freelance",
      icon: premiere,
      iconBg: "#E6DEDD",
      date: "Dec 2020 - Present",
      points: [
        "Editing videos for youtube channels.",
      ],
    },
    {
      title: "3D Modeling for Content Creators",
      company_name: "Freelance",
      icon: blender,
      iconBg: "#E6DEDD",
      date: "Dec 2020 - Present",
      points: [
        "Making 3D Models to content creator social media.",
      ],
    }
    
  ];
  
 
  
  const projects = [
    {
      name: "TO-DO list",
      description:"You can make your TO-DO list to organize your time.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Hooks",
          color: "green-text-gradient",
        },
        {
          name: "UI material",
          color: "pink-text-gradient",
        },
        {
          name: "API",
          color: "red-text-gradient",
        }
      ],
      image: todo,
      source_code_link: "https://magenta-swan-67e4b9.netlify.app//",
    }
  ];
  
  export { services, technologies, experiences, projects };
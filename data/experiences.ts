export interface Experience {
  title: string;
  company: string;
  description: string;
  image?: string;
  link?: string;
  date: string;
  location: string;
}

export const EXPERIENCES: Experience[] = [
  {
    title: "Position Assistant",
    company: "BeAM Makerspace",
    description: "Training students and staff on tools such as laser cutters, 3D printers, and embroidery machines while ensuring safe and efficient workshop operations. Supports creative projects from concept to completion and fosters a collaborative environment that empowers makers of all skill levels.",
    image: "/beam.png",
    link: "https://beam.unc.edu/",
    date: "February 2024 - Present",
    location: "Chapel Hill, NC"
  },
  {
    title: "Building Team Engineer",
    company: "Chapel Thrill Escapes",
    description: "Refactored and documented legacy C++ puzzle-control systems to improve scalability and ease of integration, while designing and implementing a new React-based password-validation puzzle tied into the room’s narrative and physical props.",
    image: "/chapelthrill.png",
    link: "https://chapelthrillescapes.com/",
    date: "September 2025 - Present",
    location: "Chapel Hill, NC"
  },
  {
    title: "Marketing Intern",
    company: "Dora Bruschi Cosmetics",
    description: "Developed and executed digital marketing campaigns targeting international audiences, optimized social media engagement through data-driven content strategies, and collaborated on branding materials to expand retail visibility.",
    image: "/dorabruschi.png",
    link: "https://www.dorabruschi.com/en/?srsltid=AfmBOopQJOUTffEXzsIbfc5tJaC9ZN0jTFfra9yRh5OpscaWKO6YiF_H",
    date: "February 2025 - May 2025",
    location: "Florence, Italy"
  },
  {
    title: "President",
    company: "UNC Sangam",
    description: "Directed UNC’s largest South Asian student organization by overseeing a 20+ person executive board, securing university partnerships and sponsorships, and organizing large-scale cultural events such as Garba engaging over 1200+ attendees and fostering community engagement across campus.",
    image: "/sangam.png",
    link: "https://heellife.unc.edu/organization/sangam",
    date: "August 2023 - Present",
    location: "Chapel Hill, NC"
  },
  {
    title: "Research Assistant",
    company: "UNC School of Nursing",
    description: "Improved efficiency in healthcare data analysis by cleaning and investigating quantitative and qualitative data collected by UNC nurses to study cardiometabolic illness awareness among African-American women, applying ethical data management practices and completing CITI training in AI, social-behavioral research, and data ethics.",
    image: "/nursing.png",
    link: "https://nursing.unc.edu/projects/the-hermony-study-a-culturally-relevant-randomized-controlled-stree-management-intervention-to-reduce-cardiometabolic-risk-in-african-american",
    date: "May 2024 - August 2024",
    location: "Chapel Hill, NC"
  },
  {
    title: "Program Manager",
    company: "Telugu Association of Greater Delaware Valley",
    description: "Designed and taught math and computer science curricula for 50+ K–12 students, coordinated volunteer instructors, and raised over $15,000 through educational programs to fund community initiatives.",
    image: "/tagdv.png",
    link: "https://www.tagdv.com/",
    date: "June 2020 - April 2024",
    location: "Philadelphia, PA"
  }
];
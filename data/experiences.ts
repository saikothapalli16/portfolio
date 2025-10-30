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
    title: "Software Engineering Intern",
    company: "Company A",
    description: "Led development of key features using React and Node.js. Improved application performance by 40%.",
    image: "/images/companya.png",
    link: "https://companya.com",
    date: "June 2023 - August 2023",
    location: "Remote"
  },
  {
    title: "Full Stack Developer",
    company: "Company B",
    description: "Built and maintained multiple web applications using Next.js and PostgreSQL.",
    image: "/images/companyb.png",
    link: "https://companyb.com",
    date: "January 2023 - May 2023",
    location: "Chapel Hill, NC"
  },
  {
    title: "Web Development Intern",
    company: "Company C",
    description: "Developed responsive web interfaces and implemented RESTful APIs.",
    image: "/images/companyc.png",
    link: "https://companyc.com",
    date: "May 2022 - August 2022",
    location: "Remote"
  },
  {
    title: "Research Assistant",
    company: "UNC Computer Science",
    description: "Conducted research on machine learning algorithms and data visualization.",
    image: "/images/unc.png",
    link: "https://cs.unc.edu",
    date: "January 2022 - May 2022",
    location: "Chapel Hill, NC"
  },
  {
    title: "Technical Project Manager",
    company: "Student Organization",
    description: "Led a team of 5 developers in building a campus event management system.",
    image: "/images/org.png",
    link: "https://org.com",
    date: "August 2021 - December 2021",
    location: "Chapel Hill, NC"
  }
];
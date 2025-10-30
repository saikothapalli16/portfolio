export interface Project {
  title: string;
  description: string;
  image?: string;           // public path (e.g., "/images/p1.png")
  tags?: string[];
  href?: string;            // live/demo
  repo?: string;            // GitHub
};

export const PROJECTS: Project[] = [
  {
    title: "LinguaCV (Steelhacks 2025)",
    description: "Developed LinguaCV, an AI-powered resume builder integrating a Vapi conversational agent with a React front end and Flask back end, featuring REST APIs, real-time updates, and object-oriented data modeling.",
    tags: ["React", "TypeScript", "Flask", "Python", "AI", "Rest API"],
    href: "https://devpost.com/software/linguacv",
  },
  {
    title: "BeAM Tools Dashboard",
    description: "Full-stack application for managing makerspace tools and improving workflows at UNC BeAM.",
    tags: ["React", "Spring Boot", "PostgreSQL"],
    image: "/images/beam-tools.png",
    href: "https://github.com/yourusername/beam-tools"
  },
  {
    title: "Chapel Thrill Escapes",
    description: "Interactive puzzle system built with React for Chapel Thrill Escapes, enhancing the escape room experience.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/images/escape-room.png",
    href: "https://chapelthrillescapes.com"
  },
  {
    title: "PokeDex",
    description: "Built an interactive Pokédex web app using Next.js, React Query, and Tailwind CSS, combining SSR, CSR, API caching, and pagination for optimized performance and responsive design.",
    tags: ["TypeScript", "Next.js", "React"],
    image: "/images/analytics.png",
    href: "https://a04-pokedex-saikothapalli16.vercel.app/"
  },
  {
    title: "PokeDex",
    description: "Built an interactive Pokédex web app using Next.js, React Query, and Tailwind CSS, combining SSR, CSR, API caching, and pagination for optimized performance and responsive design.",
    tags: ["TypeScript", "Next.js", "React"],
    image: "/images/analytics.png",
    href: "https://a04-pokedex-saikothapalli16.vercel.app/"
  },
  {
    title: "PokeDex",
    description: "Built an interactive Pokédex web app using Next.js, React Query, and Tailwind CSS, combining SSR, CSR, API caching, and pagination for optimized performance and responsive design.",
    tags: ["TypeScript", "Next.js", "React"],
    image: "/images/analytics.png",
    href: "https://a04-pokedex-saikothapalli16.vercel.app/"
  },
  {
    title: "PokeDex",
    description: "Built an interactive Pokédex web app using Next.js, React Query, and Tailwind CSS, combining SSR, CSR, API caching, and pagination for optimized performance and responsive design.",
    tags: ["TypeScript", "Next.js", "React"],
    image: "/images/analytics.png",
    href: "https://a04-pokedex-saikothapalli16.vercel.app/"
  }
];
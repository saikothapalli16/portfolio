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
    title: "Sporting Event Tracker",
    description: "Built a full-stack Sporting Event Tracker using Spring Boot, React, and PostgreSQL, featuring RESTful APIs, polymorphic game models, and dynamic event tracking with user-specific data. Implemented clean architecture and scalable backend design to support multiple sports and future feature expansion.",
    tags: ["React", "Spring Boot", "PostgreSQL"],
    href: "https://github.com/saikothapalli16/sporting-event-tracker/"
  },
  {
    title: "Oriole",
    description: "Built Oriole, a full-stack social media platform using Next.js, Supabase, Drizzle ORM, and tRPC, featuring user authentication, post creation, likes, follows, and image uploads. Implemented infinite scrolling, type-safe APIs, and real-time data handling with Supabase backend integration and responsive UI via shadcn/ui.",
    tags: ["Next.js", "React", "Supabase", "PostgreSQL"],
    href: "https://chapelthrillescapes.com"
  },
  {
    title: "PokeDex",
    description: "Built an interactive Pokédex web app using Next.js, React Query, and Tailwind CSS, combining SSR, CSR, API caching, and pagination for optimized performance and responsive design.",
    tags: ["TypeScript", "Next.js", "React"],
    href: "https://a04-pokedex-saikothapalli16.vercel.app/"
  },
  {
    title: "NYT Games",
    description: "Recreated Wordle and Connections using React, TypeScript, and Tailwind CSS, integrating external REST APIs for random puzzles and real-time validation. Implemented responsive UI components, asynchronous data fetching, and state management for smooth gameplay.",
    tags: ["TypeScript", "React", "Tailwind.css"],
    href: "https://a03-nyt-games-saik-xp2k.vercel.app/"
  },
  {
    title: "BusTub Database System",
    description: "Developing core components of the in-memory database system in C++, including buffer pool management and B+ tree indexing. Implementing query execution and concurrency control to support efficient data retrieval and transactional integrity. Gaining hands-on experience with database internals, memory management, and systems-level optimization.",
    tags: ["C++", "Database Fundamentals"],
    href: "https://github.com/cmu-db/bustub"
  },
];
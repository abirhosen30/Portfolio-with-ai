export type ProjectCategory = "Full Stack" | "Frontend" | "Backend";

export interface Project {
  id: string;
  title: string;
  image: string;
  tagline: string;
  category: ProjectCategory;
  overview: string;
  fullDescription: string;
  stack: string[];
  challenges: string[];
  futurePlans: string[];
  githubUrl?: string;
  liveUrl?: string;
  keyFeatures: string[];
}

export const projectsData: Project[] = [
  {
    id: "bazar-dor",
    title: "Bazar Dor",
    image: "/projects/bazar-dor.svg",
    tagline: "Browse products, compare market prices, and keep up with price changes.",
    category: "Full Stack",
    overview:
      "A responsive application for exploring Bangladesh's daily market prices.",
    fullDescription:
      "Built as part of the Programming Hero B14-A7 assignment, Bazar Dor lets people browse products, compare prices across markets, and track price changes.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
      "Better Auth",
      "MongoDB",
    ],
    challenges: [
      "Presenting prices from different markets in a clear, comparable format.",
      "Combining protected product details with a responsive browsing experience.",
    ],
    futurePlans: [
      "Add price history visualizations to make market trends easier to understand.",
      "Expand product and market coverage with regularly updated price data.",
    ],
    githubUrl: "https://github.com/abirhosen30/bazar-dor",
    liveUrl: "https://bazar-dor-lime-nine.vercel.app",
    keyFeatures: [
      "Browse products with market-wise prices and price-change indicators.",
      "Explore products by category and sort by price.",
      "View protected product details and sign in with email, Google, or GitHub.",
      "Use a responsive layout on mobile, tablet, and desktop.",
    ],
  },
  {
    id: "book-vibe",
    title: "Book Vibe",
    image: "/projects/book-vibe.svg",
    tagline: "Discover books and keep track of your reading journey.",
    category: "Frontend",
    overview:
      "A responsive book app with personal Read and Wishlist shelves.",
    fullDescription:
      "Book Vibe helps readers browse books, open detailed book pages, organize titles into Read and Wishlist shelves, and visualize pages read.",
    stack: [
      "React",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "Recharts",
      "localStorage",
    ],
    challenges: [
      "Keeping the Read and Wishlist shelves in sync with persistent browser storage.",
      "Presenting reading progress clearly while supporting sorting and book details.",
    ],
    futurePlans: [
      "Add search and filtering to help readers find books more quickly.",
      "Offer optional account-based sync so reading lists can follow users across devices.",
    ],
    githubUrl: "https://github.com/abirhosen30/Book-vibe",
    liveUrl: "https://book-vibe-five-phi.vercel.app/",
    keyFeatures: [
      "Browse book cards and open detailed book pages.",
      "Organize titles in Read and Wishlist lists.",
      "Sort saved books and visualize pages read.",
      "Persist reading lists in the browser.",
    ],
  },
  {
    id: "dev-fit",
    title: "Dev-Fit",
    image: "/projects/dev-fit.svg",
    tagline: "A Node.js assignment project with a REST API built using Express.js.",
    category: "Backend",
    overview:
      "A REST API project built with Node.js and Express.js.",
    fullDescription:
      "Dev-Fit is a Node.js assignment project. Its public GitHub profile description identifies it as a RESTful API built with Express.js.",
    stack: ["Node.js", "Express.js", "TypeScript"],
    challenges: [
      "Enforcing the five-exercise daily plan limit while keeping workout data consistent.",
      "Persisting workout plans safely in the browser and keeping analytics up to date.",
    ],
    futurePlans: [
      "Add user accounts and server-side storage for cross-device workout history.",
      "Expand workout tracking with progress trends and configurable goals.",
    ],
    githubUrl: "https://github.com/abirhosen30/Dev-fit-node-js-assignment",
    liveUrl: "https://dev-fit-node-js-assignment.vercel.app/",
    keyFeatures: [
      "Curated Workout Library & In-Depth Details",
      "'Today's Plan' with 5-Lift Cap Logic",
      "Hydration-Safe LocalStorage Persistence",
      "Real-Time Workout Analytics Dashboard",
      "Instant Plan Sorting & Routine Management"
    ],
  },
  {
    id: "bangla-news-24",
    title: "Bangla News 24",
    image: "/projects/bangla-news-24.svg",
    tagline: "A Next.js project by Abir Hosen.",
    category: "Frontend",
    overview:
      "A Next.js project published on GitHub and deployed on Vercel.",
    fullDescription:
      "Bangla News 24 is a Next.js project. Its public repository currently has the default Next.js starter README, so this portfolio keeps the project description brief.",
    stack: ["Next.js", "React", "TypeScript"],
    challenges: [
      "The public repository does not yet document the project requirements or feature set.",
    ],
    futurePlans: [
      "Document the features and data sources, then expand the project with a clear news-browsing experience.",
      "Add category browsing and responsive article pages as the project develops.",
    ],
    githubUrl: "https://github.com/abirhosen30/bangla-news-24",
    liveUrl: "https://bangla-news-24-six-iota.vercel.app",
    keyFeatures: [],
  },
];

export function getProjectById(id: string) {
  return projectsData.find((project) => project.id === id);
}

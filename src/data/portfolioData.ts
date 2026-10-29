export type SkillCategory = "Languages" | "Frontend" | "Backend" | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year?: string;
  result?: string;
  highlights?: string[];
}

export const portfolioData = {
  personal: {
    name: "Abir Hosen",
    designation: "Frontend Developer",
    shortTagline:
      "Computer Science undergraduate from Bangladesh exploring full-stack web development and AI/ML, building practical projects with modern technologies.",
    profilePhoto: "/profile.jpeg",
    location: "Dhaka, Bangladesh",
  },
  contact: {
    email: "abir30hosen2005@gmail.com",
  },
  socialLinks: {
    github: "https://github.com/abirhosen30",
    linkedin: "https://www.linkedin.com/in/abirhosen30/",
  },
  about: {
    heading: "Learning by building useful things for the web.",
    paragraphs: [
      "I’m a Computer Science undergraduate from Bangladesh building a strong foundation in software development. I’m currently learning full-stack web development and exploring artificial intelligence and machine learning.",
      "I enjoy turning what I learn into practical projects, exploring new tools, and growing as a frontend developer.",
    ],
  },
  skills: [
    { name: "Python", category: "Languages" },
    { name: "C", category: "Languages" },
    { name: "C++", category: "Languages" },
    { name: "Java", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "TypeScript", category: "Languages" },
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "MongoDB", category: "Backend" },
    { name: "Mongoose", category: "Backend" },
    { name: "Better Auth", category: "Backend" },
    { name: "Git", category: "Tools" },
    { name: "GitHub", category: "Tools" },
    { name: "Figma", category: "Tools" },
  ] satisfies Skill[],
  education: [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "Dhaka International University",
      year: "2026-2030",
    },
  ] satisfies EducationItem[],
};

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  createdAt: string;
  isActive: boolean;
  isVerified: boolean;
  isDeleted: boolean;
  role: "admin" | "user" | "contributor" | "alumni" | "staff";
  batch: string;
  phone: string;
  address?: string;
  interests?: string[];
  bio?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
  career?: {
    role: string;
    company: string;
    startDate?: string;
    endDate?: string;
  }[];
  academics?: {
    degree: string;
    institution: string;
    startDate?: string;
    endDate?: string;
  }[];
  achievements?: {
    title: string;
    description: string;
    date: string;
  }[];
  projects?: {
    title: string;
    description: string;
    repoUrl?: string;
    liveUrl?: string;
    techStack?: string[];
    startDate?: string;
    endDate?: string;
  }[];
  skills?: {
    name: string;
    proficiency: "beginner" | "intermediate" | "expert";
  }[];
  donated?: {
    amount: number;
    date: string;
  }[];
  received?: {
    amount: number;
    date: string;
  }[];
};

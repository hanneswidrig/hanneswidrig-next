export interface Root {
  me: string;
  experience: Experience;
}
export interface Experience {
  technical: Chip[];
  // portfolio: PortfolioItem[];
  // work: WorkItem[];
  // education: EducationItem[];
}

export interface Chip {
  name: string;
  items: string[];
}

export type Root = {
  experience: Experience;
};

export type Experience = {
  technical: TechnicalItem[];
  portfolio: PortfolioItem[];
  work: WorkItem[];
  education: EducationItem[];
};

export type TechnicalItem = {
  name: string;
  items: string[];
};
export type PortfolioItem = {};
export type WorkItem = {};
export type EducationItem = {};

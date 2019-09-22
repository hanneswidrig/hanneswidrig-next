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
export type WorkItem = {
  key: string;
  title: string;
  companyName: string;
  companyLocation: string;
  companyDuration: string;
};
export type EducationItem = {};

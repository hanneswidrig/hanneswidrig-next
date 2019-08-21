export interface Root {
  me: Me;
  experience?: Experience;
}
export interface Me {
  details: Details;
  contact: ContactItem[];
}
export interface Experience {
  technical: Technical;
  portfolio: PortfolioItem[];
  work: WorkItem[];
  education: EducationItem[];
}
export interface Technical {
  frontend: Chip[];
  backend: Chip[];
  other: Chip[];
  toolbox: Chip[];
}
export interface PortfolioItem extends Item {}
export interface WorkItem extends Item {}
export interface EducationItem extends Item {}
export interface Details {
  fullName: string;
  profilePhotoUrl: string;
}
export interface ContactItem extends Item {
  color: string;
  colorOnHover: string;
  iconUrl: string;
}
export interface Chip extends Item {
  color: string;
  colorOnHover: string;
  iconUrl?: string;
}
export interface Item {
  id: number;
  name: string;
}

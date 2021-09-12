export type AppjamTeam_T = {
  name: string;
  desc: string;
  imageURL: string;
  serviceDesc: string;
  subData: Array<{ name: string; link: string; }>;
};

export type Appjam_T = {
  name: string;
  generation: number;
  teams: Array<AppjamTeam_T>;
};


export type Generation_T = {
  image: string,
  period: string,
  name: string,
  generation: number;
  display: boolean;
};

export type Executive_T = {
  role: string,
  name: string,
  desc: string,
  imageURL: string;
};

export type History_T = {
  name: string,
  generation: number,
  executives: Array<Executive_T>;
};

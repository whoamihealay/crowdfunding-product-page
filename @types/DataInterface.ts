export interface DataInterface {
  main: MainInterface;
  stats: StatsInterface;
  about: AboutInterface;
  pledges: PledgeType;
  selection: SelectionInterface;
  thanks: ThanksInterface;
}

export interface MainInterface {
  images: {
    logo: string;
    open: string;
    close: {
      menu: string;
    };
    master: string;
    bookmark: string;
  };
  title?: string;
  description?: string[];
}

export interface StatsInterface {
  currency: string;
  objective: string;
  pledged: string;
  backers: string;
  days: {
    left: string;
  };
}

export interface AboutInterface {
  title: string;
  description: string[];
}

export interface PledgesInterface {
  name: string;
  title: string;
  pledge: number;
  description: string[];
  amount: number;
}

export type PledgeType = PledgesInterface[];

export interface SelectionInterface {
  header: {
    title: string;
    hook: string;
  };
}

export interface ThanksInterface {
  title: string;
  description: string[];
  cta: string;
  images: {
    check: string;
  };
}

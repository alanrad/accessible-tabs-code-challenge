// sharabale interfaces defined for the application

export interface IappData {
  appName: string;
  examples: Iexample[];
  tabGroup: ItabContent[];
}

export interface Iexample {
  id: string;
  title: string;
  description: string;
  activeTab?: string;
}

export interface ItabContent {
  id: string;
  label: string;
  content: string;
}

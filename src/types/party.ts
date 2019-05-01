export interface PartyItem {
  name: string;
  phone: number;
  email: string;
  address: string;
  grade: string;
  gender: string;
  importTime: string;
  age: number;
  remake: number;
}

export interface PartyData {
  data: PartyItem[];
  success: boolean;
}

export interface State {
  data: PartyItem[] | never[];
}

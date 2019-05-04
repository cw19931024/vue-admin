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

export interface CityItem {
  value: string,
  lable: string,
  children: Array<object>
}

export interface PartyData {
  data: PartyItem[];
  success: boolean;
}

export interface CityData {
  data: CityItem[];
  success: boolean;
}

export interface State {
  data: PartyItem[] | never[];
  city: CityItem[] | never[];
}

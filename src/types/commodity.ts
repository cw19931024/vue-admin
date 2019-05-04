export interface CommodityItem {
  name: string;
  money: number;
  lastCount: number;
  soldCount: number;
  type: string;
  status: string;
}


export interface CommidityData {
  data: CommodityItem[];
  success: boolean;
}


export interface State {
  data: CommodityItem[] | never[];
}

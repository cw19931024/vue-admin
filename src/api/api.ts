import axios from 'axios';
export const getData = async (url: string): Promise<any> => {
  return axios.get(url);
};

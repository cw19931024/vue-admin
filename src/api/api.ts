import axios from 'axios';
const api = 'https://www.easy-mock.com/mock/590493587a878d73716e22e5';
export const getData = async (url: string): Promise<any> => {
  return axios.get(api + url);
};

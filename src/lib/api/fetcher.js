import axios from 'axios';

export const fetcher = async (url) => {
  const res = await axios.get(url, { withCredentials: true });
  return res.data;
};

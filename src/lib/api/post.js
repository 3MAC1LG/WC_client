import axios from 'axios';

export const post = async ({ url, data }) => {
  const res = await axios.post(url, data, { withCredentials: true });
  return res.data;
};

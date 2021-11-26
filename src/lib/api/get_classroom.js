import axios from 'axios';

export const get_classroom = async (url) => {
  const res = await axios.post(url, null, { withCredentials: true });
  return res.data;
};

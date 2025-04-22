import axios from "axios";

export const getProducts = async () => {
  const res = await axios.get("https://admin.refabry.com/api/all/product/get");
  return res.data.data.data;
};

import axios from "axios";

export const createOrder = async (orderData) => {
  const res = await axios.post(
    "https://admin.refabry.com/api/public/order/create",
    orderData
  );
  return res.data;
};

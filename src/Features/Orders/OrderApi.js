import axios from "axios";

export const createOrder = async (orderData) => {
  try {
    const res = await axios.post(
      "https://admin.refabry.com/api/public/order/create",
      orderData
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(
      "Error while creating order:",
      error.response || error.message
    );
    throw error;
  }
};

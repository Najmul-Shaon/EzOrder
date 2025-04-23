import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Features/Products/productsSlice";

const OrderForm = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const { quantities } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const orderedProducts = products.filter((product) => quantities[product.id]);

  // const desiredProduct = products.filter(
  //   (singleProduct) => singleProduct.id === idNum
  // );

  // const product = desiredProduct[0];
  // const discountDate = desiredProduct[0]?.discount_date;

  const isValidDiscount = (discountDate) => {
    if (!discountDate) return false;
    const today = new Date();
    return new Date(discountDate) > today;
  };

  // const hasValidDiscount = isValidDiscount(discountDate);

  let subTotal = 0;

  const rows = orderedProducts.map((product, i) => {
    const quantity = quantities[product.id] || 1;
    const hasValidDiscount = isValidDiscount(product.discount_date);
    const actualPrice = hasValidDiscount
      ? parseInt(product.price) - parseInt(product.discount_amount)
      : parseInt(product.price);
    const total = actualPrice * quantity;
    subTotal += total;

    return (
      <tr key={product.id}>
        <th>{i + 1}</th>
        <th>{product.name}</th>
        <th>{actualPrice}</th>
        <th>{quantity}</th>
        <th>80</th>
        <th>{total}</th>
      </tr>
    );
  });

  // const actualPrice = hasValidDiscount
  //   ? parseInt(product?.price) - parseInt(product?.discount_amount)
  //   : parseInt(product?.price);

  // const totalPrice = actualPrice * quantity;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="py-24 max-w-3xl mx-auto px-4 font-open-sans">
      <div className="divider divider-center divider-secondary">
        <h3 className="text-2xl md:text-3xl font-semibold">Checkout Order</h3>
      </div>
      <div className="mt-12 mb-2">
        <h3 className="text-xl font-semibold">Order Summary</h3>
      </div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Delivery Charge</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
          <tfoot>
            <tr>
              <td></td>
              <td colSpan="3" className="font-bold">
                Subtotal
              </td>
              <td className="font-bold">80</td>
              <td className="font-bold">{subTotal + 80}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="mt-12 mb-2">
        <h3 className="text-xl font-semibold">Customar Details</h3>
      </div>
      <div className="p-6 border rounded-lg border-gray-300">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* take user name  */}
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Name</legend>
                <input
                  {...register("userName", { required: "Name is required." })}
                  type="text"
                  className="input"
                  placeholder="Najmul Hasan"
                />
                {errors.userName && (
                  <p className="text-[#d62928] text-xs mt-1">
                    {errors.userName.message}
                  </p>
                )}
              </fieldset>
            </div>
            {/* take user phone number */}
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Phone</legend>
                <input
                  {...register("userPhone", {
                    required: "Phone number is required.",
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  type="text"
                  className="input"
                  placeholder="01721933810"
                />
                {errors.userPhone && (
                  <p className="text-[#d62928] text-xs mt-1">
                    {errors?.userPhone?.message}
                  </p>
                )}
              </fieldset>
            </div>
            {/* take  address  */}
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Address</legend>
                <input
                  {...register("userAddress", {
                    required: "Address is required",
                  })}
                  type="text"
                  className="input"
                  placeholder="Basila, Mohammadpur, Dhaka"
                />
                {errors.userAddress && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.userAddress.message}
                  </p>
                )}
              </fieldset>
            </div>

            {/* courier  */}
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Courier</legend>
                <select
                  {...register("courier", {
                    validate: (value) =>
                      value !== "Pick a courier" || "Please select a courier",
                  })}
                  defaultValue="Pick a courier"
                  className="select"
                >
                  <option disabled={true}>Pick a courier</option>
                  <option>Steedfast</option>
                  <option>Sundarban</option>
                  <option>Pathao</option>
                </select>
                {errors.courier && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.courier.message}
                  </p>
                )}
              </fieldset>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <button
              type="submit"
              className="text-white uppercase tracking-widest text-xs border-0 btn btn-sm bg-[#d62928] hover:bg-[#FFB237]"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;

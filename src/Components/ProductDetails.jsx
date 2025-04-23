import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProducts } from "../Features/Products/productsSlice";
import { useEffect } from "react";
import { TbCurrencyTaka, TbHanger } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaFacebookF, FaFacebookMessenger } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import {
  decrementQuantity,
  incrementQuantity,
  setQuantity,
} from "../Features/Orders/OrderSlice";

const ProductDetails = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const { quantities } = useSelector((state) => state.order);

  const dispatch = useDispatch();
  const { id } = useParams();
  const idNum = parseInt(id);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (quantities[idNum] === undefined) {
      dispatch(setQuantity({ productId: idNum, quantity: 1 }));
    }
  }, [quantities, idNum, dispatch]);

  const desiredProduct = products.filter(
    (singleProduct) => singleProduct.id === idNum
  );

  const discountDate = desiredProduct[0]?.discount_date;

  const isValidDiscount = (discountDate) => {
    if (!discountDate) return false;
    const today = new Date();
    return new Date(discountDate) > today;
  };
  const hasValidDiscount = isValidDiscount(discountDate);

  const decrease = () => {
    dispatch(decrementQuantity(idNum));
  };

  const increase = () => {
    dispatch(incrementQuantity(idNum));
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      dispatch(setQuantity({ productId: idNum, quantity: value })); // Dispatch set quantity action
    } else if (e.target.value === "") {
      dispatch(setQuantity({ productId: idNum, quantity: "" })); // Handle empty input
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-24 font-open-sans px-4">
      {isLoading && <h1>Loading...</h1>}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 ">
        {/* product image  */}
        <figure className="md:col-span-2">
          <img
            src={`https://admin.refabry.com/storage/product/${desiredProduct[0]?.product_images[0]?.name}`}
            alt="prduct img"
            className="rounded-xl bg-[#FBE9DF]"
          />
        </figure>
        {/* details section  */}
        {!isLoading && (
          <div className="md:col-span-3 space-y-3">
            {/* title section  */}
            <div>
              <h3 className="text-3xl font-semibold">
                {desiredProduct[0]?.name}
              </h3>
            </div>
            <div className="divider"></div>

            <div className="flex items-center gap-2">
              {hasValidDiscount && (
                <p className="flex items-center text-base font-normal line-through">
                  <TbCurrencyTaka />
                  {desiredProduct[0]?.price}
                </p>
              )}
              <p className="flex items-center text-[#d62928] text-2xl font-semibold">
                <TbCurrencyTaka />
                {hasValidDiscount
                  ? parseInt(desiredProduct[0]?.price) -
                    parseInt(desiredProduct[0]?.discount_amount)
                  : desiredProduct[0]?.price}
              </p>
            </div>
            <div className="divider"></div>
            <div className="space-y-2">
              <p className="flex items-center">
                <TiTick className="text-xl" />
                Category: {desiredProduct[0]?.category?.name}
              </p>
              <div>
                <p className="flex items-center">
                  <TiTick className="text-xl" />
                  Stock: {desiredProduct[0]?.stock}
                  <span
                    className={`px-2 py-0.5 text-white ms-2 rounded-xl ${
                      parseInt(desiredProduct[0]?.stock) > 0
                        ? "bg-[#FFB237]"
                        : "bg-[#d62928]"
                    }`}
                  >
                    {desiredProduct[0]?.stock &&
                    parseInt(desiredProduct[0]?.stock) > 0
                      ? "In-stock"
                      : "Out-of-stock"}
                  </span>
                </p>
              </div>
            </div>
            <div className="divider"></div>
            {/* quantity section  */}
            <div className="flex flex-col space-y-2">
              <label className="font-semibold">Quantity</label>
              <div className="flex items-center border border-gray-300 rounded-md w-fit">
                <button
                  onClick={decrease}
                  className="w-10 h-10 bg-gray-100 text-lg font-semibold hover:bg-gray-200"
                >
                  −
                </button>
                <input
                  type="text"
                  value={quantities[idNum] || ""}
                  onChange={handleInputChange}
                  className="w-12 text-center border-l border-r border-gray-300 outline-none"
                />
                <button
                  onClick={increase}
                  className="w-10 h-10 bg-gray-100 text-lg font-semibold hover:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="">
                <button className="text-white w-full btn btn-sm uppercase tracking-widest text-xs bg-[#FFB237] border-0 hover:bg-[#d62928]">
                  Add to Cart <HiOutlineShoppingBag className="text-lg ml-1" />
                </button>
              </div>
              <div>
                <Link to={"/product/order"}>
                  <button className="text-white uppercase tracking-widest text-xs border-0 btn btn-sm w-full bg-[#d62928] hover:bg-[#FFB237]">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <p className="flex items-center gap-2 cursor-pointer">
                <CiHeart className="text-xl" />{" "}
                <span className="text-base font-light">Wishlist</span>
              </p>
              <p className="flex items-center gap-2 cursor-pointer">
                <MdOutlineCompareArrows className="text-xl" />{" "}
                <span className="text-base font-light">Compare</span>
              </p>
              <p className="flex items-center gap-2 cursor-pointer">
                <TbHanger className="text-xl" />{" "}
                <span className="text-base font-light">Size Chart</span>
              </p>
            </div>
            <div className="divider"></div>
            <div className="flex items-start gap-4">
              <p className="flex items-center gap-2 cursor-pointer">
                <FaFacebookF /> <span>facebook</span>
              </p>
              <p className="flex items-center gap-2 cursor-pointer">
                <FaFacebookMessenger /> <span>messenger</span>
              </p>
              <p className="flex items-center gap-2 cursor-pointer">
                <FaSquareInstagram /> <span>instagram</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;

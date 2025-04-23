import { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const discountDate = product?.discount_date;

  const isValidDiscount = (discountDate) => {
    if (!discountDate) return false;
    const today = new Date();
    return new Date(discountDate) > today;
  };

  const hasValidDiscount = isValidDiscount(discountDate);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="rounded-xl shadow-sm hover:border hover:border-[#d62928]"
    >
      <div className="relative">
        <Link to={`/product-details/${product?.id}`}>
          <figure className="px-2 pt-2 ">
            <img
              src={`https://admin.refabry.com/storage/product/${product?.product_images[0]?.name}`}
              alt="prduct img"
              className="rounded-xl bg-[#FBE9DF]"
            />
          </figure>
        </Link>
        {isHovered && (
          <>
            <Zoom duration={500}>
              {/* <div className="hidden absolute md:flex items-center justify-center bottom-8 left-8">
                <button className="w-full text-white btn btn-sm uppercase tracking-widest text-xs bg-[#FFB237] border-0 hover:bg-[#d62928]"> */}
              <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <button className="text-white btn btn-sm uppercase tracking-widest text-xs bg-[#FFB237] border-0 hover:bg-[#d62928]">
                  Add to Cart <HiOutlineShoppingBag className="text-lg ml-1" />
                </button>
              </div>
            </Zoom>
          </>
        )}
      </div>
      <div className="px-2 py-4">
        <Link to={`/product-details/${product?.id}`}>
          <h2 className="font-medium">{product?.name}</h2>
        </Link>

        <div className="flex items-center justify-between gap-4 pt-4 px-2">
          <div>
            {hasValidDiscount && (
              <p className="flex items-center text-sm font-normal line-through">
                <TbCurrencyTaka />
                {product?.price}
              </p>
            )}
            <p className="flex items-center text-[#d62928] text-base font-semibold">
              <TbCurrencyTaka />
              {hasValidDiscount
                ? parseInt(product?.price) - parseInt(product?.discount_amount)
                : product?.price}
            </p>
          </div>
          <div>
            <button className="text-white uppercase tracking-widest text-xs border-0 btn btn-sm bg-[#d62928] hover:bg-[#FFB237]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;

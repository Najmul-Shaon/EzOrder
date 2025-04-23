const ProductsCard = ({ product }) => {
  return (
    <div className="shadow-sm hover:border hover:border-red-200">
      <figure className="px-2 pt-2">
        <img
          src={`https://admin.refabry.com/storage/product/${product?.product_images[0]?.name}`}
          alt="prduct img"
          className="rounded-xl"
        />
      </figure>
      <div className="">
        <h2 className="">{product?.name}</h2>

        <div className="">
          <button className="mt-6 text-white uppercase py-6 tracking-widest text-xs border-0 btn btn-wide bg-[#d62928] hover:bg-[#FFB237]">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;

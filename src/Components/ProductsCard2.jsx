const ProductsCard2 = ({ product }) => {
  console.log(product);
  return (
    <div className="card bg-base-100 shadow-sm hover:border hover:border-red-200">
      <figure className="px-2 pt-2">
        <img
          src={`https://admin.refabry.com/storage/product/${product?.product_images[0]?.name}`}
          alt="prduct img"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product?.name}</h2>

        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard2;

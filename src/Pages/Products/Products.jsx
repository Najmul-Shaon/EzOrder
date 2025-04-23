// import axios from "axios";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Features/Products/productsSlice";
import ProductsCard from "../../Components/ProductsCard";
import SectionTitle from "../../Components/SectionTitle";
import { Link, useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  const { products, isLoading, isError, error } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  let content;

  if (isLoading) {
    content = <h1>Loading...</h1>;
  }

  if (!isLoading && isError) {
    content = <h1>{error}</h1>;
  }
  if (!isLoading && !isError && products.length === 0) {
    content = <h1>No post found...</h1>;
  }
  if (!isLoading && !isError && products.length > 0) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    );
  }

  return (
    <div className="font-open-sans max-w-screen-xl mx-auto py-24 px-4">
      <div className="pb-4">
        <SectionTitle header={"Explore from best items"} />
      </div>
      {content}
      {location.pathname === "/" && (
        <div className="divider divider-center divider-secondary py-12">
          <Link to="/products">
            <button className="text-white uppercase tracking-widest text-xs border-0 btn btn-sm bg-[#d62928] hover:bg-[#FFB237]">
              View All
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Products;

// import axios from "axios";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Features/productsSlice";
import ProductsCard from "../../Components/ProductsCard";

const Products = () => {
  const { products, isLoading, isError, error } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products);

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

  return <>{content}</>;
};

export default Products;

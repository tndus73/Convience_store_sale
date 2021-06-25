import { useEffect, useState } from "react";
import fetch_cu from "../Fetch/fetch_cu";
import Product from "./Product";
import "./ProductList.scss";

const ProductList = ({ comp }) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, []);

  if (loading) {
    return <div>품목 불러오는 중...</div>;
  }

  if (!products) {
    return null;
  }

  return (
    <div className="productList">
      <Product></Product>
      <Product></Product>
    </div>
  );
};

export default ProductList;

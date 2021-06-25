import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";
import "./ProductList.scss";

const ProductList = ({ comp }) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProd = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/${comp}`);
        setProducts(response.data.prod);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchProd();
  }, [comp]);

  if (loading) {
    return <div>품목 불러오는 중...</div>;
  }

  if (!products) {
    return null;
  }

  return (
    <ul className="productList">
      {products.map((product) => (
        <li>
          <Product product={product} key={product.img} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;

import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import "./ProductList.scss";
import ProductPage from "./ProductPage";

const ProductList = ({ comp }) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  // pagination 관련
  const [currPage, setCurrPage] = useState(1);
  const maxProductList = 15;

  const indexOfLast = currPage * maxProductList;
  const indexOfFirst = indexOfLast - maxProductList;
  const currProductList = (temp) => {
    const currProduct = temp.slice(indexOfFirst, indexOfLast);
    return currProduct;
  };

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
    <div>
      <div>
        <div className="productList">
          <ProductPage currProductList={currProductList(products)} />
        </div>
      </div>
      <div className="paging">
        <Pagination
          maxProductList={maxProductList}
          totalProduct={products.length}
          setCurrPage={setCurrPage}
        />
      </div>
    </div>
  );
};

export default ProductList;

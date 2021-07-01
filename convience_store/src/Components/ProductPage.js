import Product from "./Product";
import "./ProductPage.scss";

const ProductPage = ({ currProductList }) => {
  return (
    <div className="productPage">
      {currProductList.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default ProductPage;

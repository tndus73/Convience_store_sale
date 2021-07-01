import "./Product.scss";
import { BiWon } from "react-icons/bi";

const Product = ({ product }) => {
  const { idx, name, price, img, etc } = product;
  if (idx) {
    console.log(idx);
  }
  return (
    <div className="product">
      {img && (
        <div className="product_img">
          <img src={img} alt="prod_img"></img>
        </div>
      )}
      <div className="content">
        <p className="product_name">
          <strong>{name}</strong>
        </p>
        <p className="product_price">
          <BiWon className="won" />
          {price}
        </p>
        <p className="product_etc">{etc}</p>
      </div>
    </div>
  );
};

export default Product;

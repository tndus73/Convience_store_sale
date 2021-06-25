import "./Product.scss";

const Product = ({ product }) => {
  const { name, price, img, etc } = product;
  return (
    <div className="product">
      {img && (
        <div className="prod_img">
          <img src={img} alt="prod_img"></img>
        </div>
      )}
      <div className="content">
        <p>{name}</p>
        <p>{price}</p>
        <p>{etc}</p>
      </div>
    </div>
  );
};

export default Product;

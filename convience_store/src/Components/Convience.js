import Header from "./Header";
import ProductList from "./ProductList";

const Convience = ({ match }) => {
  const comp = match.params.comp || "";

  return (
    <div>
      <Header />
      <hr />
      <ProductList comp={comp} />
    </div>
  );
};

export default Convience;

import Header from "./Header";
// import ProductList from "./ProductList";

const Convience = ({ match }) => {
  //   const comp = match.params.comp || "all";

  return (
    <div>
      <Header />
      <hr />
      {/* <ProductList comp={comp} /> */}
      <button
        type="button"
        onClick={() => {
          // /data로부터 fetch
          fetch("/data", {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              console.log(data);
            });
        }}
      >
        getData
      </button>
    </div>
  );
};

export default Convience;

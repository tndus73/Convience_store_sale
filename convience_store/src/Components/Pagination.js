import "./Pagination.scss";

const Pagination = ({ maxProductList, totalProduct, setCurrPage }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProduct / maxProductList); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="pagination">
      <ul onClick={(e) => setCurrPage(e.target.closest("li").innerText)}>
        {pageNumber.map((page) => {
          return <li key={page}>{page}</li>;
        })}
      </ul>
    </div>
  );
};

export default Pagination;

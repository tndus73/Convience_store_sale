import "./Pagination.scss";

const Pagination = ({ maxProductList, totalProduct, setCurrPage }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProduct / maxProductList); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="pagination">
      <ul>
        {pageNumber.map((page) => {
          return (
            <li key={page} onClick={() => setCurrPage(page)}>
              {page}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;

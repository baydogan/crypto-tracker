const Pagination = ({ coinPerPage, totalList, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalList / coinPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="flex justify-center mt-5">
        {pageNumbers.map((number) => (
          <li key={number} className="mx-2">
            <button
              onClick={() => paginate(number)}
              className={`w-8 h-8 p-1 bg-gray-200  rounded-full text-sm hover:bg-cyan-500 hover:dark:bg-slate-600 hover:text-white transition-all duration-300 ${
                currentPage === number ? "bg-cyan-500 dark:bg-slate-600   text-white" : ""
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;

import { useSearchParams } from "react-router-dom";

interface PaginationType {
  count: number;
}
const Pagination: React.FC<PaginationType> = ({ count }) => {
  const PAGE_SIZE = 5;
  const [searchParam, setSearchParam] = useSearchParams();
  const currentPage = !searchParam.get("page")
    ? 1
    : Number(searchParam.get("page"));
  const pageCount = Math.ceil(count / PAGE_SIZE);
  const handlePrev = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParam.set("page", prev.toString());
    setSearchParam(searchParam);
  };
  const handleNext = () => {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParam.set("page", next.toString());
    setSearchParam(searchParam);
  };
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= pageCount) {
      searchParam.set("page", page.toString());
      setSearchParam(searchParam);
    }
  };
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > pageCount) {
      endPage = pageCount;
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button
        className={`px-3 py-1 w-10 h-10 rounded-full text-2xl ${
          currentPage === 1 ? "text-gray-400" : "text-yellow-600"
        }`}
        onClick={handlePrev}
        disabled={currentPage === 1}
        id="pagination-prev-button"
      >
        &lt;
      </button>
      {getPageNumbers().map((page) => (
        <button
          key={page}
          className={`px-3 py-1 rounded-full w-10 h-10 hover:bg-yellow-500 ${
            currentPage === page
              ? "bg-yellow-500 text-white"
              : "bg-white text-yellow-600 border"
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={`px-3 py-1 rounded-full text-2xl w-10 h-10 ${
          currentPage === pageCount ? "text-gray-400" : "text-yellow-600"
        }`}
        onClick={handleNext}
        disabled={currentPage === pageCount}
        id="pagination-next-button"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;

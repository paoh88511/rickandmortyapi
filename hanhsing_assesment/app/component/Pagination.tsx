import { PaginProp, PageInfo } from "../component/url"; // const API_BASE_URL = "https://rickandmortyapi.com/api/character";

export default function Pagination({
  pageInfo,
  currentPage,
  handleNext,
  handlePrev,
  handleClick,
}: PaginProp) {
  const getPageNumbers = () => {
    const startPage = Math.floor((currentPage - 1) / 20) * 20 + 1;
    const endPage = Math.min(startPage + 19, pageInfo?.pages || 0);
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };
  return (
    <div className="pagi-container">
      <div>
        <button
          className="prev-btn"
          onClick={handlePrev}
          disabled={!pageInfo?.prev}
        >
          &lt;
        </button>

        {getPageNumbers().map((page, index) => (
          <button
            className={currentPage === page ? "current" : "page_btn"}
            key={index}
            onClick={() => handleClick(page)}
            disabled={currentPage === page}
          >
            {page}
          </button>
        ))}

        <button
          className="next-btn"
          onClick={handleNext}
          disabled={!pageInfo?.next}
        >
          {"\u003E"}
        </button>
      </div>
    </div>
  );
}

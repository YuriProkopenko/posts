import { useEffect, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { RxDoubleArrowLeft } from "react-icons/rx";

import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, pagesQuantity, onChangePage }) => {
  const [pageNumber, setPageNumber] = useState(currentPage);

  useEffect(() => {
    setPageNumber(currentPage);
  }, [currentPage]);

  const handleOnChange = (number) => {
    if (number === "" || (number > 0 && number <= pagesQuantity)) {
      setPageNumber(number);
    }
  };

  const handleOnKeyDown = () => {
    if (pageNumber) {
      const pageInput = document.getElementById("pageInput");
      pageInput.blur();
      onChangePage(+pageNumber);
    }
  };

  return (
    <div className={styles["wrapper"]}>
      <button
        className={`${styles["arrow-btn"]} ${
          currentPage === 1 ? styles["disabled"] : ""
        }`}
        disabled={currentPage === 1}
        onClick={() => onChangePage(1)}
      >
        <RxDoubleArrowLeft size="20px" />
      </button>
      <button
        className={`${styles["arrow-btn"]} ${
          currentPage === 1 ? styles["disabled"] : ""
        }`}
        disabled={currentPage === 1}
        onClick={() => onChangePage(currentPage - 1)}
      >
        <MdArrowBackIos />
      </button>
      <input
        className={styles["page-input"]}
        id="pageInput"
        type="number"
        value={pageNumber}
        onKeyDown={(e) => e.key === "Enter" && handleOnKeyDown()}
        onChange={(e) => handleOnChange(e.target.value)}
      />
      <div className={styles["page-quantity"]}>/ {pagesQuantity}</div>
      <button
        className={`${styles["arrow-right-btn"]} ${
          currentPage === pagesQuantity ? styles["disabled"] : ""
        }`}
        disabled={currentPage === pagesQuantity}
        onClick={() => onChangePage(currentPage + 1)}
      >
        <MdArrowBackIos />
      </button>
      <button
        className={`${styles["arrow-right-btn"]} ${
          currentPage === pagesQuantity ? styles["disabled"] : ""
        }`}
        disabled={currentPage === pagesQuantity}
        onClick={() => onChangePage(pagesQuantity)}
      >
        <RxDoubleArrowLeft size="20px" />
      </button>
    </div>
  );
};

export default Pagination;

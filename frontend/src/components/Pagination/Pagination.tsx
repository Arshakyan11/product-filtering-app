import styles from "./Pagination.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/store";
import {
  getAllProductsInfo,
  setPage,
  setParams,
} from "../../features/ProductsSlice/ProductsSlice";
import { useEffect } from "react";
import { useWindowWidth } from "../../app/hooks/useWindowWidth";
import { MAX_VISIBLE_PAGES, PAGE_SIZES } from "../../mocksData/mocksData";
const Pagination = () => {
  const dispatch = useAppDispatch();
  const { pagination } = useAppSelector(getAllProductsInfo);

  const width = useWindowWidth();
  const pageSize = PAGE_SIZES.find((each) => width <= each.max)?.size ?? 9;

  useEffect(() => {
    dispatch(setParams({ limit: pageSize }));
  }, [dispatch, pageSize]);

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  if (!pagination) return null;

  const { page, totalPages } = pagination;

  const windowStart =
    page <= MAX_VISIBLE_PAGES ? 1 : page - MAX_VISIBLE_PAGES + 1;

  return (
    <div className={styles.pagination}>
      <button
        className={styles.pagination_btns}
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        {"<"}
      </button>
      {Array.from(
        { length: Math.min(MAX_VISIBLE_PAGES, totalPages - windowStart + 1) },
        (_, id) => windowStart + id,
      ).map((elm) => {
        return (
          <button
            key={elm}
            className={`${styles.pagination_mainPages} ${page === elm ? styles.active : ""}`}
            onClick={() => handlePageChange(elm)}
          >
            {elm}
          </button>
        );
      })}
      <button
        className={styles.pagination_btns}
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;

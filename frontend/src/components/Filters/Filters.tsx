import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store";
import {
  getAllProductsInfo,
  resetParams,
  setParams,
} from "../../features/ProductsSlice/ProductsSlice";
import styles from "./Filters.module.scss";
import { CaretDownFill } from "react-bootstrap-icons";

interface FiltersProps {
  width: number;
}

const Filters = ({ width }: FiltersProps) => {
  const dispatch = useAppDispatch();
  const { filters, params } = useAppSelector(getAllProductsInfo);
  const [openFilters, setOpenFilters] = useState<boolean>(false);

  useEffect(() => {
    if (width >= 768) {
      setOpenFilters(true);
    } else {
      setOpenFilters(false);
    }
  }, [width]);

  if (!filters) return null;

  const { min, max } = filters.priceRange;
  const { min: minRate, max: maxRate } = filters.ratingRange;

  const isActive = (value: string, param?: string) =>
    value === "All" ? !param : value === param;
  return (
    <section className={styles.filters}>
      <div className={styles.filters_titles}>
        <h3 className={styles.filters_mainTitle}>Filters</h3>
        {width <= 768 && (
          <p onClick={() => setOpenFilters((prev) => !prev)}>
            <CaretDownFill />
          </p>
        )}
      </div>
      {openFilters && (
        <div className={styles.filters_all}>
          <div className={styles.filters_each}>
            <h4 className={styles.filters_eachTitle}>Category</h4>
            {["All", ...filters.categories].map((category) => (
              <label
                key={category}
                className={`${styles.filters_eachLabel} ${isActive(category, params.category) ? styles.activeParamStyle : ""}`}
              >
                <input
                  type="radio"
                  name="category"
                  checked={
                    category === "All"
                      ? !params.category
                      : params.category === category
                  }
                  onChange={() =>
                    dispatch(
                      setParams({
                        category: category === "All" ? undefined : category,
                      }),
                    )
                  }
                />
                {category}
              </label>
            ))}
          </div>
          <div className={styles.filters_each}>
            <h4 className={styles.filters_eachTitle}>Brand</h4>
            {["All", ...filters.brands].map((brand) => (
              <label
                key={brand}
                className={`${styles.filters_eachLabel} ${isActive(brand, params.brand) ? styles.activeParamStyle : ""}`}
              >
                <input
                  type="radio"
                  name="brand"
                  checked={
                    brand === "All" ? !params.brand : params.brand === brand
                  }
                  onChange={() =>
                    dispatch(
                      setParams({ brand: brand === "All" ? undefined : brand }),
                    )
                  }
                />
                {brand}
              </label>
            ))}
          </div>
          <div className={`${styles.filters_each} ${styles.filters_priceAll}`}>
            <h4 className={styles.filters_eachTitle}>Price</h4>
            <input
              type="number"
              placeholder={`Min (${min}$)`}
              min={min}
              max={params.maxPrice ?? max}
              value={params.minPrice ?? ""}
              onChange={(e) => {
                const value = e.target.value;
                if (value === "") {
                  dispatch(setParams({ minPrice: undefined }));
                  return;
                }
                if (Number(value) <= max) {
                  dispatch(setParams({ minPrice: Number(value) }));
                }
              }}
            />
            <input
              type="number"
              placeholder={`Max (${max}$)`}
              min={params.minPrice ?? min}
              max={max}
              value={params.maxPrice ?? ""}
              onChange={(e) => {
                const value = e.target.value;
                if (value === "") {
                  dispatch(setParams({ maxPrice: undefined }));
                  return;
                }
                if (Number(value) <= max) {
                  dispatch(setParams({ maxPrice: Number(value) }));
                }
              }}
            />
          </div>
          <div className={`${styles.filters_each} ${styles.filters_rateAll}`}>
            <h4 className={styles.filters_eachTitle}>Rating</h4>
            <select
              value={params.minRating ?? ""}
              onChange={(e) =>
                dispatch(
                  setParams({
                    minRating: e.target.value
                      ? Number(e.target.value)
                      : undefined,
                  }),
                )
              }
            >
              <option value="">All</option>
              <option value={minRate}>{minRate}+</option>
              <option value={4}>4+</option>
              <option value={maxRate}>{maxRate}+</option>
            </select>
          </div>
          <button
            className={styles.filters_reset}
            onClick={() => dispatch(resetParams())}
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};

export default Filters;

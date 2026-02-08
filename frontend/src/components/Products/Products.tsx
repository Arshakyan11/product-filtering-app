import { StarFill } from "react-bootstrap-icons";
import { useAppSelector } from "../../app/store";
import { getAllProductsInfo } from "../../features/ProductsSlice/ProductsSlice";
import Filters from "../Filters/Filters";
import styles from "./Products.module.scss";
import Pagination from "../Pagination/Pagination";
import { useWindowWidth } from "../../app/hooks/useWindowWidth";
import notfoundIcon from "../../assets/images/notFoundInput.png";
const Products = () => {
  const { items } = useAppSelector(getAllProductsInfo);
  const width = useWindowWidth();
  return (
    <section className={styles.products}>
      <Filters width={width} />
      <div className={styles.productsWithPagination}>
        {items.length > 0 ? (
          <div className={styles.products_all}>
            {items.map((elm) => {
              return (
                <div className={styles.products_each} key={elm.id}>
                  <img
                    src={elm.imageUrl}
                    alt={elm.name}
                    className={styles.products_image}
                  />
                  <div className={styles.products_info}>
                    <h3 className={styles.products_title}>{elm.name}</h3>
                    <p className={styles.products_brand}>{elm.brand}</p>
                    <p className={styles.products_category}>{elm.category}</p>
                    <div className={styles.products_footer}>
                      <span className={styles.products_price}>
                        ${elm.price}
                      </span>
                      <span className={styles.products_rating}>
                        <StarFill color="#ffb400" />
                        {elm.rating}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className={styles.products_notFound}>
            <img src={notfoundIcon} alt="notFound" />
            <p className={styles.products_notFoundTitle}>
              No Item avaliable with these filters
            </p>
            <p className={styles.products_notFoundsubTitle}>
              Please try refining your search.
            </p>
          </div>
        )}
        {items.length > 0 && <Pagination width={width} />}
      </div>
    </section>
  );
};

export default Products;

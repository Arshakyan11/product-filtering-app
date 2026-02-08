import styles from "./Home.module.scss";
import Products from "../../components/Products/Products";
import { useEffect } from "react";
import { getFiltersThunk, getProductsThunk } from "../../features/api/api";
import { useAppDispatch, useAppSelector } from "../../app/store";
import { getAllProductsInfo } from "../../features/ProductsSlice/ProductsSlice";
import { scrolTo } from "../../helpers/scrollToTop";
const Home = () => {
  const dispatch = useAppDispatch();
  const { params } = useAppSelector(getAllProductsInfo);

  useEffect(() => {
    dispatch(getFiltersThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductsThunk(params));
    scrolTo();
  }, [params]);

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.homeContent}>
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;

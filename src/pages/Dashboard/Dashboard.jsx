import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import Statistics from "../../components/Dashboard/Statistics/Statistics";
import NewArticles from "../../components/Dashboard/NewArticles/NewArticles";
import BestProduct from "../../components/Dashboard/BestProduct/BestProduct";
import NewUser from "../../components/Dashboard/NewUser/NewUser";
import Transaction from "../../components/Dashboard/Transaction/Transaction";
import ClosestEvent from "../../components/Dashboard/ClosestEvent/ClosestEvent";
import OrderStatus from "../../components/Dashboard/OrderStatus/OrderStatus";
import useApi from "../../utils/useApi";
import Spinner from "../../components/Spinner/Spinner";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  let successCount = 0;

  data.forEach((transaction) => {
    if (transaction.status === "Sukses") {
      successCount++;
    }
  });

  console.log("Success Count:", successCount);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://647ca813c0bae2880ad10a5f.mockapi.io/balink/transaksiProduk"
      );

      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const {
    response: user,
    loading: loadingUser,
    error: errorUser,
    get: getUser,
  } = useApi();

  const {
    response: event,
    loading: loadingEvent,
    error: errorEvent,
    get: getEvent,
  } = useApi();

  const {
    response: produk,
    loading: loadingProduk,
    error: errorProduk,
    get: getProduk,
  } = useApi();

  const {
    response: artikel,
    loading: loadingArtikel,
    error: errorArtikel,
    get: getArtikel,
  } = useApi();

  const {
    response: webDashboard,
    loading: loadingWebDashboard,
    error: errorWebDashboard,
    get: getWebDashboard,
  } = useApi();

  useEffect(() => {
    getUser("/user?limit=2&order=desc").catch((error) => {
      console.error(error);
    });

    getEvent("/event?limit=3&order=desc").catch((error) => {
      console.error(error);
    });

    getProduk("/produk?limit=5&order=desc").catch((error) => {
      console.error(error);
    });

    getArtikel("/artikel?limit=8&order=desc").catch((error) => {
      console.error(error);
    });

    getWebDashboard("/web_dashboard").catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <>
      {loadingUser ||
      loadingEvent ||
      loadingProduk ||
      loadingArtikel ||
      loadingWebDashboard ||
      loading ? (
        <Spinner />
      ) : errorUser ||
        errorEvent ||
        errorProduk ||
        errorArtikel ||
        errorWebDashboard ||
        error ? (
        <ErrorDisplay
          errorMessage={
            errorUser?.message ||
            errorEvent?.message ||
            errorProduk?.message ||
            errorArtikel?.message ||
            errorWebDashboard?.message ||
            error?.message
          }
        />
      ) : (
        <div className={styles.dashboardContainer} id="dashboardContainer">
          <div
            id="userAmountContainer"
            className={`${styles.userAmount} ${styles.card}`}
          >
            <Statistics
              label="Jumlah Pengguna"
              total={user?.data.total_data}
              newAmount={webDashboard?.data.countUserSebulan}
              id="jumlah-pengguna"
            />
          </div>
          <div
            id="ticketSoldContainer"
            className={`${styles.ticketSold} ${styles.card}`}
          >
            <Statistics
              label="Ticket Terjual"
              total={successCount}
              newAmount="0"
              id="ticket-terjual"
            />
          </div>
          <div
            id="productSoldContainer"
            className={`${styles.productSold} ${styles.card}`}
          >
            <Statistics
              label="Barang Terjual"
              total={successCount}
              newAmount="0"
              id="barang-terjual"
            />
          </div>
          <div
            id="articleTotalContainer"
            className={`${styles.articleTotal} ${styles.card}`}
          >
            <Statistics
              label="Jumlah Artikel"
              total={artikel?.data.total_data}
              newAmount={webDashboard?.data.countArtikelSebulan}
              id="jumlah-artikel"
            />
          </div>
          <div
            id="articlesContainer"
            className={`${styles.articlesContainer} ${styles.card}`}
          >
            <NewArticles articles={artikel?.data.data} />
          </div>
          <div
            id="productsContainer"
            className={`${styles.productsContainer} ${styles.card}`}
          >
            <BestProduct products={produk?.data?.data} />
          </div>
          <div
            id="usersContainer"
            className={`${styles.usersContainer} ${styles.card}`}
          >
            <NewUser users={user?.data.data} />
          </div>
          <div
            id="transactionsContainer"
            className={`${styles.transactionsContainer} ${styles.card}`}
          >
            <Transaction data={data} />
          </div>
          <div
            id="orderStatusContainer"
            className={`${styles.orderStatusContainer} ${styles.card}`}
          >
            <OrderStatus data={data} />
          </div>
          <div
            id="eventContainer"
            className={`${styles.eventContainer} ${styles.card}`}
          >
            <ClosestEvent events={event?.data?.data} />
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;

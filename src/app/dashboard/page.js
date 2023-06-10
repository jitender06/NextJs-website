"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
// import Image from "next/image";
const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isloading, setLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     if (!res.ok) {
  //       err(true);
  //     }
  //     const data = await res.json();
  //     setData(data);
  //     setLoading(false);
  //   };
  //   getData();
  // }, []);

  // ////////./////./././.././/////  fetching data by swr method././././//////

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  console.log(data);

  return (
    <div className={styles.container}>
      <div>
        <h1>hellow</h1>
      </div>
    </div>
  );
};

export default Dashboard;

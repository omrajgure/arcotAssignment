import React, { useEffect, useState } from "react";
import styles from "./hero.module.css";
import { Sidebar } from "../sidebar/sidebar";
import { Linechart } from "../Charts/linechart/linechart";
import { Barchart } from "../Charts/barchart/barchart";
import { Piechart } from "../Charts/piechart/piechart";
import { Insights } from "../Insights/insights";
import data_raw from "../../ai-data.json";
export const Hero = ({ hamburgerClicked }) => {
  const [data, set_data] = useState([]);
  useEffect(() => {
    performfetch();
  }, []);

  // mocking fetch from API

  const performfetch = () => {
    setTimeout(() => {
      set_data(data_raw);
    }, 200);
  };
  return (
    <div className={styles.wrapper}>
      <div className={!hamburgerClicked ? styles.SideDiv : styles.newDiv}>
        <Sidebar hamburgerClicked={hamburgerClicked} />
      </div>

      <div className={styles.Charts}>
        <div className={styles.topCharts}>
          <Insights data={data} />
          <Barchart data={data} />
        </div>
        <div className={styles.topCharts}>
          <Piechart data={data} />
          <Linechart data={data} />
        </div>
      </div>
    </div>
  );
};

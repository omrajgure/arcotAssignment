import React from "react";
import styles from "./barchart.module.css";

import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
export const Barchart = ({ data }) => {
  if (data.length === 0) {
    return null;
  }
  return (
    <div className={styles.wrapper}>
      <h4 style={{ marginTop: 0 }}>Ratings</h4>

      <div className={styles.barChart}>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            width={500}
            height={300}
            data={data[0].user_satisfaction.ratings}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="rating" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar
              dataKey="count"
              fill="rgb(69, 69, 255)"
              activeBar={<Rectangle fill="#2E2EAB" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

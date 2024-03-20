import React, { useState } from "react";
import styles from "./linechart.module.css";

import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
export const Linechart = ({ data }) => {
  const [weekday, set_weekday] = useState(false);
  const handleToggle = () => {
    set_weekday((prevVal) => !prevVal);
  };
  if (data.length === 0) {
    return null;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.headingDiv}>
        <h4 style={{ margin: 0 }}>Response time</h4>
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="weekday"
              control={
                <Switch
                  color="primary"
                  checked={weekday}
                  onChange={handleToggle}
                />
              }
              label="Week Days"
              labelPlacement="start"
            />
          </FormGroup>
        </FormControl>
      </div>

      <div className={styles.lineChart}>
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
            data={
              !weekday
                ? data[0].response_times.day_wise
                : data[0].response_times.week_wise
            }
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={!weekday ? "date" : "week"} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="average_time"
              stroke="rgb(69, 69, 255)"
              activeDot={{ r: 8 }}
            />
            {/* <Line type="monotone" dataKey="" stroke="#82ca9d" /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

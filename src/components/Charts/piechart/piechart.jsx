import React, { useState } from "react";
import styles from "./piechart.module.css";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
export const Piechart = ({ data }) => {
  const COLORS = [
    "rgb(69, 69, 255)",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#FFD07A",
  ];

  // setting the platform as true or false based on toggle
  const [platform, set_platform] = useState(false);
  const handleToggle = () => {
    set_platform((prevval) => !prevval);
  };

  if (data.length === 0) {
    return null;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.headingDiv}>
        <h4 style={{ margin: 0 }}>Usage Statistics</h4>
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="platform"
              control={
                <Switch
                  color="primary"
                  checked={platform}
                  onChange={handleToggle}
                />
              }
              label="Platform"
              labelPlacement="start"
            />
          </FormGroup>
        </FormControl>
      </div>

      <div className={styles.pieChart}>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              // setting the data based on toggle
              data={Object.entries(
                !platform
                  ? data[0].usage_statistics.by_country
                  : data[0].usage_statistics.by_platform
              )}
              dataKey="1"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {Object.entries(
                !platform
                  ? data[0].usage_statistics.by_country
                  : data[0].usage_statistics.by_platform
              ).map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend
              payload={Object.entries(
                !platform
                  ? data[0].usage_statistics.by_country
                  : data[0].usage_statistics.by_platform
              ).map((entry, index) => ({
                value: entry[0],
                color: COLORS[index % COLORS.length],
              }))}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

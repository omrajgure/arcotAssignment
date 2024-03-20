import React, { useState } from "react";
import styles from "./insights.module.css";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
export const Insights = ({ data }) => {
  // setting category as true or false based on toggle
  const [category, set_category] = useState(false);

  const handleToggle = () => {
    set_category((prevval) => !prevval);
  };

  if (data.length === 0) {
    return null;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.headingDiv}>
        <h4 style={{ margin: 0 }}>Insight Summary</h4>
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="category"
              control={
                <Switch
                  color="primary"
                  checked={category}
                  onChange={handleToggle}
                />
              }
              label="Category"
              labelPlacement="start"
            />
          </FormGroup>
        </FormControl>
      </div>

      {/* data is conditionally rendered based on value of category */}
      <div className={styles.Insights}>
        <div
          className={`${!category ? styles.colour_one : styles.colour_four} ${
            styles.card
          }`}
        >
          {!category ? "Total Queries" : "Customer Service"}{" "}
          <div>
            {!category
              ? data[0].insight_summary.total_queries
              : data[0].category_distribution.customer_service}
          </div>
        </div>
        <div
          className={`${!category ? styles.colour_two : styles.colour_four} ${
            styles.card
          }`}
        >
          {!category ? "Successful Queries" : "Sales Inquiries"}
          <div>
            {!category
              ? data[0].insight_summary.successful_queries
              : data[0].category_distribution.sales_inquiries}
          </div>
        </div>
        <div
          className={`${!category ? styles.colour_three : styles.colour_four} ${
            styles.card
          }`}
        >
          {!category ? "Failed Queries" : "Small Talk"}{" "}
          <div>
            {!category
              ? data[0].insight_summary.failed_queries
              : data[0].category_distribution.small_talk}
          </div>
        </div>
        <div className={`${styles.colour_four} ${styles.card}`}>
          {!category ? "Average Response Time" : "Technical Support"}{" "}
          <div>
            {!category
              ? data[0].insight_summary.average_response_time
              : data[0].category_distribution.technical_support}
          </div>
        </div>
      </div>
    </div>
  );
};

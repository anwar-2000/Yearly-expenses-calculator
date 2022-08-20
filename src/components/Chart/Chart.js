import React from "react";

import ChartBars from "./ChartBars";
import "./Chart.css";

const Chart = (props) => {
    const dataPointvalues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointvalues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBars
        key={dataPoint.label} //or ID 
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label} 
        />
      ))}
    </div>
  );
};

export default Chart;

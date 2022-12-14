import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  // console.log(props.dataPoints);
    const dataPointValue = props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMax = Math.max(...dataPointValue)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMax}
        />
      ))}
    </div>
  );
};

export default Chart;

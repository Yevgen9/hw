import React from "react";
import Statistics from "./Statistics";

function StatisticsList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Statistics label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
  );
}

export default StatisticsList;

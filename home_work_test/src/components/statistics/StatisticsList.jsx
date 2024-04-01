import React from "react";
import Statistics from "./Statistics";

function StatisticsList({ stats }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul>
        {stats.map((item) => (
          <li key={item.id}>
            <Statistics label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StatisticsList;

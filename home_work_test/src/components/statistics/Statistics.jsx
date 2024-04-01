import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ id, label, percentage }) => {
  return (
    <ul className="stat-list">
      <li className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;

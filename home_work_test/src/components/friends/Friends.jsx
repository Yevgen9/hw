import React from "react";
import PropTypes from "prop-types";

const Friends = ({ id, name, avatar, isOnline }) => {
  
  return (
    <ul>
      <li className="item">
        <span className={isOnline ? "Online" : "Offline"}></span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className={name}></p>
      </li>
    </ul>
  );
};

Friends.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default Friends;

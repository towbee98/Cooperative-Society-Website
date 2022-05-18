import React from "react";
import "./menu-container-option.css";
import {
  FaTv,
  FaCalendarTimes,
  FaHourglassStart,
  FaMoneyCheckAlt,
  FaUserAlt,
} from "react-icons/fa";

const MenuContainerOption = ({ text, active }) => {
  return (
    <div
      className={
        active ? "menu-container-option active" : "menu-container-option"
      }
    >
      <span className="menu-option-logo">
        {text === "DASHBOARD" ? (
          <FaTv color={"#407BFF"} size={"1em"} />
        ) : text === "RECENTLY" ? (
          <FaCalendarTimes color={"#407BFF"} size={"1em"} />
        ) : text === "ALL TRANSACTIONS" ? (
          <FaHourglassStart color="#407BFF" size={"1em"} />
        ) : text === "BALANCES" ? (
          <FaMoneyCheckAlt color="#407BFF" size={"1em"} />
        ) : (
          <FaUserAlt color="#407BFF" size={"1em"} />
        )}
      </span>

      <span className="title">{text}</span>
    </div>
  );
};

export default MenuContainerOption;

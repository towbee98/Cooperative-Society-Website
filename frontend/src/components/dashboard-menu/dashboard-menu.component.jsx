import React from "react";

import "./dashboard-menu.styles.css";
import MenuContainerOption from "../menu-container-option/menu-container-option.component";

const MenuContainer = () => {
  return (
    <div className="menu-container">
      <h5>MAIN MENU</h5>
      <div className="menu-container-options">
        <MenuContainerOption text={"DASHBOARD"} active />
        <MenuContainerOption text={"RECENTLY"} />
        <MenuContainerOption text={"ALL TRANSACTIONS"} />
        <MenuContainerOption text={"BALANCES"} />
        <MenuContainerOption text={"PROFILE"} />
      </div>
    </div>
  );
};

export default MenuContainer;

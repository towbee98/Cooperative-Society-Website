import React from "react";
import "./dashboard.styles.css";
import MenuContainer from "../../components/dashboard-menu/dashboard-menu.component";
import Summary from "../../components/Summary/summary.component";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <MenuContainer />
      <Summary />
    </div>
  );
};

export default Dashboard;

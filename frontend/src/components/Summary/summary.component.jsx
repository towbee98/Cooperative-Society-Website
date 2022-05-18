import React from "react";
import "./summary.styles.css";
import TransactionCard from "../transcation-card/transaction-card.component";
const Summary = () => {
  return (
    <div className="summary-container">
      <h2>Welcome,{"Tobi"}</h2>
      <div className="summary-transactions-container">
        <h4>Transactions</h4>
        <div className="summary-transactions">
          <div className="summary-holder">
            <TransactionCard
              type={"total-share"}
              name={"TOTAL SHARES"}
              amount={180000}
            />
            <TransactionCard type={"loan"} name={"LOAN"} amount={40000} />
            <TransactionCard
              type={"loan-balance"}
              name={"LOAN BALANCE"}
              amount={30000}
            />
            <TransactionCard
              type={"loan-interest"}
              name={"LOAN INTEREST"}
              amount={8000}
            />
          </div>
          <div className="total-savings-graph">
            <TransactionCard
              type={"total-savings"}
              name={"TOTAL SAVINNGS"}
              amount={120000}
            />
            <div className="graph"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;

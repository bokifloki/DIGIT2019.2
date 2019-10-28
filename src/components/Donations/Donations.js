import React from "react";
import styles from "./Donations.css";
function Donations() {
  const donationAmounts = [2, 5, 10, 20, 25, 50, 100, 120];
  return (
    <div>
      <div className="container">
        <div className="body">
          <div className="centerContainer">
            <h1>DONATE TODAY</h1>
            <h3>Select an amount</h3>
            {donationAmounts.map((donation, index) => (
              <button key={index}>{donation}</button>
            ))}
            Other amount:<input type="text" placeholder="$"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donations;

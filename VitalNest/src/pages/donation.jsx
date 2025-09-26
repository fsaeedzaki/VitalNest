import React from "react";
import "../styles/DonationPage.css";

export default function DonationPage() {
  const handleDonate = (amount) => {
    const baymobLink = `https://donate.baymob.com/YOUR_PROJECT_ID?amount=${amount}&currency=EGP`;
    window.open(baymobLink, "_blank");
  };

  return (
    <div className="donation-container">
      <div className="donation-card">
        <h1>Support our Initiative!</h1>
        <p>Donation for a better future</p>

        <div className="amounts">
          <button onClick={() => handleDonate(50)}>50 EGP</button>
          <button onClick={() => handleDonate(100)}>100 EGP</button>
          <button onClick={() => handleDonate(200)}>200 EGP</button>
        </div>

        <button className="donate-btn" onClick={() => handleDonate(0)}>
         Donate now!
        </button>
      </div>
    </div>
  );
}
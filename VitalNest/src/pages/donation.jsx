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
        <h1>support our initiative</h1>
        <p>donation for better future</p>

        <div className="amounts">
          <button onClick={() => handleDonate(50)}>50 EGP</button>
          <button onClick={() => handleDonate(100)}>100 EGP</button>
          <button onClick={() => handleDonate(200)}>200 EGP</button>
        </div>

        <button className="donate-btn" onClick={() => handleDonate(0)}>
         donate now
        </button>
      </div>
    </div>
  );
}
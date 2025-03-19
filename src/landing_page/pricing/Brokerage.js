import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        {/* Brokerage Calculator Section */}
        <div className="col-8 p-4">
          <div className="text-center">
            <a href="" style={{ textDecoration: "none" }}>
              <h3 className="fs-5">Brokerage Calculator</h3>
            </a>
          </div>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "16px" }}>
            <li>Call & Trade and RMS auto-square off: ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        <div className="col-4 p-4">
          <div className="text-center">
            <a href="" style={{ textDecoration: "none" }}>
              <h3 className="fs-5">List of Charges</h3>
            </a>
          </div>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "16px" }}>
            <li>Equity Delivery: ₹0 (Free)</li>
            <li>Equity Intraday: ₹20 or 0.03% (whichever is lower) per executed order.</li>
            <li>Futures: ₹20 or 0.03% (whichever is lower) per executed order.</li>
            <li>Options: ₹20 per executed order.</li>
            <li>Commodity & Currency: ₹20 per executed order.</li>
            <li>DP (Depository Participant) Charges: ₹13.5 per transaction.</li>
            <li>Account Maintenance Charge (AMC): ₹300 per year.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;

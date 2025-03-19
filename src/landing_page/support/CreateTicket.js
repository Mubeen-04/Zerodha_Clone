import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">To create a ticket, select a relevant topic</h1>

        {/* Account Opening */}
        <div className="col-md-4 col-sm-6 p-4">
          <h4 className="mb-3">
            <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
          </h4>
          <a href="#" className="d-block text-decoration-none text-primary">Resident individual</a>
          <a href="#" className="d-block text-decoration-none text-primary">Minor</a>
          <a href="#" className="d-block text-decoration-none text-primary">Non Resident Indian (NRI)</a>
          <a href="#" className="d-block text-decoration-none text-primary">Company, Partnership, HUF and LLP</a>
          <a href="#" className="d-block text-decoration-none text-primary">Glossary</a>
        </div>

        {/* Your Zerodha Account */}
        <div className="col-md-4 col-sm-6 p-4">
          <h4 className="mb-3">
            <i className="fa fa-user-circle" aria-hidden="true"></i> Your Zerodha Account
          </h4>
          <a href="#" className="d-block text-decoration-none text-primary">Your Profile</a>
          <a href="#" className="d-block text-decoration-none text-primary">Account modification</a>
          <a href="#" className="d-block text-decoration-none text-primary">Client Master Report (CMR) and DP</a>
          <a href="#" className="d-block text-decoration-none text-primary">Nomination</a>
          <a href="#" className="d-block text-decoration-none text-primary">Transfer and conversion of securities</a>
        </div>

        {/* Kite */}
        <div className="col-md-4 col-sm-6 p-4">
          <h4 className="mb-3">
            <i className="fa fa-bar-chart" aria-hidden="true"></i> Kite
          </h4>
          <a href="#" className="d-block text-decoration-none text-primary">IPO</a>
          <a href="#" className="d-block text-decoration-none text-primary">Trading FAQs</a>
          <a href="#" className="d-block text-decoration-none text-primary">Margin Trading Facility (MTF) and Margins</a>
          <a href="#" className="d-block text-decoration-none text-primary">Charts and orders</a>
          <a href="#" className="d-block text-decoration-none text-primary">Alerts and Nudges</a>
          <a href="#" className="d-block text-decoration-none text-primary">General</a>
        </div>

        {/* Funds */}
        <div className="col-md-4 col-sm-6 p-4">
          <h4 className="mb-3">
            <i className="fa fa-money" aria-hidden="true"></i> Funds
          </h4>
          <a href="#" className="d-block text-decoration-none text-primary">Add money</a>
          <a href="#" className="d-block text-decoration-none text-primary">Withdraw money</a>
          <a href="#" className="d-block text-decoration-none text-primary">Add bank accounts</a>
          <a href="#" className="d-block text-decoration-none text-primary">eMandates</a>
        </div>

        {/* Console */}
        <div className="col-md-4 col-sm-6 p-4">
          <h4 className="mb-3">
            <i className="fa fa-pie-chart" aria-hidden="true"></i> Console
          </h4>
          <a href="#" className="d-block text-decoration-none text-primary">Portfolio</a>
          <a href="#" className="d-block text-decoration-none text-primary">Corporate actions</a>
          <a href="#" className="d-block text-decoration-none text-primary">Funds statement</a>
          <a href="#" className="d-block text-decoration-none text-primary">Reports</a>
          <a href="#" className="d-block text-decoration-none text-primary">Profile</a>
          <a href="#" className="d-block text-decoration-none text-primary">Segments</a>
        </div>

        {/* Coin */}
        <div className="col-md-4 col-sm-6 p-4">
          <h4 className="mb-3">
            <i className="fa fa-circle-o" aria-hidden="true"></i> Coin
          </h4>
          <a href="#" className="d-block text-decoration-none text-primary">Understanding mutual funds and Coin</a>
          <a href="#" className="d-block text-decoration-none text-primary">Coin app</a>
          <a href="#" className="d-block text-decoration-none text-primary">Coin web</a>
          <a href="#" className="d-block text-decoration-none text-primary">Transactions and reports</a>
          <a href="#" className="d-block text-decoration-none text-primary">National Pension Scheme (NPS)</a>
        </div>

      </div>
    </div>
  );
}

export default CreateTicket;

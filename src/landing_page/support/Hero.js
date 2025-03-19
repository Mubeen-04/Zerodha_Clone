import React from "react";

function Hero() {
  return (
    <section className="container-fluid text-white" id="supportHero" style={{ backgroundColor: "#3b78c2" }}>
      <div className="d-flex justify-content-between align-items-center p-4">
        <h4 className="m-0">Support Portal</h4>
        <a href="#" className="text-white text-decoration-none border-bottom">Track tickets</a>
      </div>

      <div className="row p-4">
        {/* Left Side - Search & Quick Links */}
        <div className="col-md-8 col-lg-6 p-4">
          <h1 className="fs-4 mb-3">Search for an answer or browse help topics to create a ticket</h1>
          <div className="position-relative">
            <input
              type="text"
              className="form-control p-3"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
              style={{ borderRadius: "5px" }}
            />
            <i className="fa fa-search position-absolute top-50 end-0 translate-middle-y me-3 text-secondary"></i>
          </div>

          {/* Quick Links */}
          <div className="mt-3">
            <a href="#" className="text-white text-decoration-none border-bottom me-3">Track account opening</a>
            <a href="#" className="text-white text-decoration-none border-bottom me-3">Track segment activation</a>
            <a href="#" className="text-white text-decoration-none border-bottom">Intraday margins</a>
          </div>
          <div className="mt-2">
            <a href="#" className="text-white text-decoration-none border-bottom">Kite user manual</a>
          </div>
        </div>

        {/* Right Side - Featured Articles */}
        <div className="col-md-4 col-lg-6 p-4">
          <h1 className="fs-4 mb-3">Featured</h1>
          <ol className="p-0">
            <li className="mb-2">
              <a href="#" className="text-white text-decoration-none border-bottom">
                Revision in tick size for NSE derivatives and cash segment from April 15, 2025
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-decoration-none border-bottom">
                Surveillance measure on scrips - March 2025
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;

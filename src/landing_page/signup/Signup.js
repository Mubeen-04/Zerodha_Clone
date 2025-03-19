import React from "react";

function Signup() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold">
          Open a free demat and trading account online
        </h1>
        <p>
          Start investing brokerage free and join a community of 1.5+ crore investors and traders
        </p>
      </div>

      <div className="row align-items-center justify-content-between">
        <div className="col-md-6 text-center">
          <img
            src="/media/images/signup.png"
            alt="Trading Dashboard"
            className="img-fluid"
          />
        </div>

        <div className="col-md-5">
          <div className="p-4 rounded shadow bg-white">
            <h2 className="text-center" style={{ color: "black"}}>Signup now</h2>
            <p className="text-muted text-center">Or track your existing application</p>

            <div className="border rounded d-flex align-items-center p-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png"
                alt="India Flag"
                className="me-2"
                width="25"
              />
              <span className="me-2" style={{ color: "black"}}>+91</span>
              <input
                type="text"
                className="form-control border-0"
                placeholder="Enter your mobile number"
              />
            </div>

            <button className="btn btn-primary w-100 mt-3">Get OTP</button>

            <p className="mt-3 text-muted text-center">
              By proceeding, you agree to the Zerodha{" "}
              <a href="#" className="text-decoration-none">terms</a> &{" "}
              <a href="#" className="text-decoration-none">privacy policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

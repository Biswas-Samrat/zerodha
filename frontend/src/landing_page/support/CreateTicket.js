import React from "react";

function CreateTicket() {
  return (
    <div className="container">
  <div className="row py-5">
    <h1 className="fs-2 mb-4 text-center">To create a ticket, select a relevant topic</h1>

    {[...Array(6)].map((_, i) => (
      <div className="col-12 col-sm-6 col-lg-4 mb-4" key={i}>
        <div className="p-4 border rounded shadow-sm h-100">
          <h4 className="mb-3">
            <i className="fa fa-plus-circle me-2" aria-hidden="true"></i> Account Opening
          </h4>
          <a href="#" className="d-block mb-2 text-decoration-none">Online Account Opening</a>
          <a href="#" className="d-block mb-2 text-decoration-none">Offline Account Opening</a>
          <a href="#" className="d-block mb-2 text-decoration-none">Company, Partnership and HUF Account</a>
          <a href="#" className="d-block mb-2 text-decoration-none">Opening</a>
          <a href="#" className="d-block mb-2 text-decoration-none">NRI Account Opening</a>
          <a href="#" className="d-block mb-2 text-decoration-none">Charges at Zerodha</a>
          <a href="#" className="d-block mb-2 text-decoration-none">Zerodha IDFC FIRST Bank 3-in-1 Account</a>
          <a href="#" className="d-block text-decoration-none">Getting Started</a>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default CreateTicket;

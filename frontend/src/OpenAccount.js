import React from 'react';

function OpenAccount() {
    return ( 
        <div className="container p-5 mb-5">
  <div className="row text-center">
    <div className="col-12">
      <h1 className="mt-5">Open a Zerodha account</h1>
      <p className="lead">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
    </div>
    <div className="col-md-4 mx-auto">
      <a href='/signup' className="p-3 btn btn-primary fs-5 mb-5 w-100">
        Sign up Now
      </a>
    </div>
  </div>
</div>
     );
}

export default OpenAccount;
import React from 'react';

function Education() {
    return ( 
<div className="container mt-5">
  <div className="row align-items-center">
    <div className="col-md-6 text-center">
      <img src="media/images/education.svg" className="img-fluid" style={{ maxWidth: "70%" }} alt="Education" />
    </div>
    <div className="col-md-6 mt-md-0 mt-4">
      <h1 className="mb-3 fs-3">Free and open market education</h1>
      <p className="lead">
        Varsity, the largest online stock market education book in the world
        covering everything from the basics to advanced trading.
      </p>
      <a href="" className="text-decoration-none">
        Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
      </a>
      <p className="mt-4 lead">
        TradingQ&A, the most active trading and investment community in India
        for all your market related queries.
      </p>
      <a href="" className="text-decoration-none">
        TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</div>
     );
}

export default Education;
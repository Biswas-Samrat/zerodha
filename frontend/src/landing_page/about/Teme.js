import React from 'react';

function Teme() {
    return (  
    
    <div className="container">
  <div className="row p-3 mt-5 border-top">
    <div className="col-12 text-center">
      <h1 className="fs-2">People</h1>
    </div>
  </div>

  <div
    className="row p-md-3 text-muted align-items-center"
    style={{ lineHeight: "1.8", fontSize: "1.2em" }}
  >
    <div className="col-md-6 p-3 text-center">
      <img
        src="media/images/nithinKamath.jpg"
        className="img-fluid rounded-circle"
        style={{ maxWidth: "50%" }}
        alt="Nithin Kamath"
      />
      <h4 className="mt-3">Nithin Kamath</h4>
      <h6 className="text-muted">Founder, CEO</h6>
    </div>
    <div className="col-md-6 p-3">
      <p>
        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles
        he faced during his decade-long stint as a trader. Today, Zerodha has
        changed the landscape of the Indian broking industry.
      </p>
      <p>
        He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
        and the Market Data Advisory Committee (MDAC).
      </p>
      <p>Playing basketball is his zen.</p>
      <p>
        Connect on <a href="" className="text-decoration-none text-muted">Homepage</a> /{" "}
        <a href="" className="text-decoration-none text-muted">TradingQnA</a> /{" "}
        <a href="" className="text-decoration-none text-muted">Twitter</a>
      </p>
    </div>
  </div>
</div>

    );
}

export default Teme;
import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="fs-2">The Zerodha Universe</h1>
        <p className="lead">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-6 col-md-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" className="img-fluid" alt="Smallcase" style={{maxWidth: '100px'}}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-6 col-md-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" className="img-fluid" alt="Smallcase" style={{maxWidth: '100px'}}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-6 col-md-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" className="img-fluid" alt="Smallcase" style={{maxWidth: '100px'}}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-6 col-md-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" className="img-fluid" alt="Smallcase" style={{maxWidth: '100px'}}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-6 col-md-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" className="img-fluid" alt="Smallcase" style={{maxWidth: '100px'}}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-6 col-md-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" className="img-fluid" alt="Smallcase" style={{maxWidth: '100px'}}/>
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>

   <Link to="/signup" className="p-3 btn btn-primary fs-5 mb-5 w-100"> 
              Sign Up
            </Link>
      </div>
    </div>
  );
}

export default Universe;

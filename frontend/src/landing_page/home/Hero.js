import React from 'react';

function Hero() {
    return ( 
            <div className="container p-5 mb-5">
  <div className="row text-center">
    <div className="col-12">
      <img
        src="media/images/homeHero.png"
        alt="Hero Image"
        className="img-fluid mb-4"
      />
    </div>
    <div className="col-12">
      <h1 className="mt-3">Invest in everything</h1>
      <p className="lead">
        Online platform to invest in stocks, derivatives, mutual funds, and more
      </p>
    </div>
    <div className="col-md-4 mx-auto">               
            
            <Link to="/signup" className="p-3 btn btn-primary fs-5 mb-5 w-100"> 
              Sign Up
            </Link>
    </div>
  </div>
</div>
   );
}

export default Hero;

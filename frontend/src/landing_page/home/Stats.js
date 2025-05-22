import React from 'react';

function Stats() {
    return ( 
<div className="container py-5">
  <div className="row py-md-5">
    <div className="col-md-6 p-4">
      <h1 className="fs-2 mb-4">Trust with confidence</h1>
      <h2 className="fs-4">Customer-first always</h2>
      <p className="text-muted lead mb-3">
        That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
        worth of equity investments.
      </p>
      <h2 className="fs-4 mt-4">No spam or gimmicks</h2>
      <p className="text-muted lead mb-3">
        No gimmicks, spam, "gamification", or annoying push notifications. High
        quality apps that you use at your pace, the way you like.
      </p>
      <h2 className="fs-4 mt-4">The Zerodha universe</h2>
      <p className="text-muted lead mb-3">
        Not just an app, but a whole ecosystem. Our investments in 30+ fintech
        startups offer you tailored services specific to your needs.
      </p>
      <h2 className="fs-4 mt-4">Do better with money</h2>
      <p className="text-muted lead">
        With initiatives like Nudge and Kill Switch, we don't just facilitate
        transactions, but actively help you do better with your money.
      </p>
    </div>
    <div className="col-md-6 p-4 mt-md-0 mt-5">
      <img
        src="media/images/ecosystem.png"
        className="img-fluid mb-3"
        style={{ maxWidth: "90%" }}
        alt="Ecosystem"
      />
      <div className="text-center">
        <a href="" className="mx-md-3 mx-2 text-decoration-none">
          Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
        <a href="" className="mx-md-3 mx-2 text-decoration-none">
          Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
</div>
     );
}

export default Stats;
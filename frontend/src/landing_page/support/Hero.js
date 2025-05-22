import React from "react";

function Hero() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "rgb(56, 125, 209)", color: "white" }}
    >
      <div className="row p-5">
        <div className="col-7 ">
          <h5 className="mt-5 mb-5">Support Portal</h5>
          <h5 className="mb-3">
            Search for an answer or browse help topics to create a <br /> ticket
          </h5>
          <input placeholder="Eg:How do I active FN&O? "  style={{width:"29rem" ,height:"3rem"}} />
     
        </div>
        <div className="col-5">
          <h5 className="mt-5 mb-5">Featured</h5>
          <ol>
            <li>BSE StAR mutual fund platform downtime</li>
            <li>Offer for sale (OFS) – May 2025</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;

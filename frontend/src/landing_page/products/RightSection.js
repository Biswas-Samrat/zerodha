import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 order-md-2">
          <img src={imageURL} className="img-fluid" alt={productName} />
        </div>
        <div className="col-md-6 p-md-5 order-md-1">
          <h1>{productName}</h1>
          <p className="lead">{productDesription}</p>
          <div className="mt-3">
            <a href={learnMore} className="text-blue-500 hover:text-blue-700 font-semibold">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSection;

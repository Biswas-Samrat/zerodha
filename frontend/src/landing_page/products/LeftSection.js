import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src={imageURL} className="img-fluid" alt={productName} />
        </div>
        <div className="col-md-6 p-md-5">
          <h1>{productName}</h1>
          <p className="lead">{productDesription}</p>
          <div className="mt-3">
            <a href={tryDemo} className="me-3">Try Demo</a>
            <a href={learnMore}>Learn More</a>
          </div>
          <div className="mt-3">
            <a href={googlePlay} className="me-3">
              <img src="media/images/googlePlayBadge.svg" className="img-fluid" alt="Google Play"/>
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                className="img-fluid"
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;

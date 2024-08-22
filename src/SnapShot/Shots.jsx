import React from "react";

const Shots = ({ shots }) => {
  return (
    <div className="container">
      <div className="row">
      {shots.map((shots) => {
        const { id, image, desc } = shots;
        return (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={id}>
             <div className="border text-center p-4">
              <img src={image} className="img-fluid fixed-size" style={fixedsize}  />
              <h6>{desc}</h6>
             </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};
const fixedsize =  {
  width: "250px",
  height: "250px",
  objectfit: "cover"
};

export default Shots;

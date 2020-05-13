import React from "react";

const TotalMileage = (props) => {
  let total = props.data.reduce((sum, current) => sum + current.distance, 0);
  return (
    <div>
      <h1 className="text-center">Total Mileage</h1>
      <p className="text-center">{total.toFixed(2)} miles</p>
    </div>
  );
};

export default TotalMileage;

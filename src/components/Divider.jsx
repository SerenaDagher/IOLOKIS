import React from "react";

const Divider = ({ color = "#cccccc60", thickness = "1px", margin = "40px auto", width = "100%" }) => {
  return (
    <div
      style={{
        borderBottom: `${thickness} solid ${color}`,
        width: width, 
        margin: margin,
      }}
    ></div>
  );
};

export default Divider;
import React from "react";
// Wrapper primarily to help with animation, position-absolute to avoid cascading elements
const Wrapper = ({ children }) => {
  return (
    <>
      <div className="position-absolute w-100">{children}</div>
    </>
  );
};

export default Wrapper;

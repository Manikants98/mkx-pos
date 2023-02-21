import React from "react";

const Text = ({ children,className="text-white" }) => {
  return <p className={className}>{children}</p>;
};

export default Text;

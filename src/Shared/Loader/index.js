import { CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center h-[86.3vh] gap-5">
      <CircularProgress className="!h-20 !w-20" />
    </div>
  );
};

export default Loader;

import { Avatar } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-end w-full item-center !border-r-2 !border-white !border-opacity-20 p-3 bg-white bg-opacity-10 backdrop-blur rounded">
        <Avatar>M</Avatar>
      </div>
    </div>
  );
};

export default Header;

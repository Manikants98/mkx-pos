import React from "react";
import Header from "../Shared/Header";
import Sidebar from "../Shared/Sidebar";

const Layout = ({ component }) => {
  return (
    <div
      className="h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("https://source.unsplash.com/random")`,
      }}
    >
      <div className="flex backdrop-blur bg-white bg-opacity-10">
        <Sidebar />
        <div className="flex flex-col w-full p-2 !pr-4">
          <Header />
          <div className="w-full mt-4 max-h-[86.3vh] overflow-y-auto backdrop-blur rounded bg-white !border-r-2 border-white !border-opacity-10 bg-opacity-10 ">{component}</div>
        </div>
      </div>
    </div>
  );
};
export default Layout;

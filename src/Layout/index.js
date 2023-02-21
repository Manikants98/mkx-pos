import React from "react";
import Header from "../Shared/Header";
import SidebarNew from "../Shared/SidebarNew";

const Layout = ({ component }) => {
  return (
    <div
      className="h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("https://png.pngtree.com/background/20210712/original/pngtree-stylish-red-blue-smoky-abstract-background-picture-image_1172530.jpg")`,
      }}
    >
      <div className="flex backdrop-blur bg-white bg-opacity-10">
        <SidebarNew />
        <div className="flex flex-col w-full p-2 !pr-4">
          <Header />
          <div className="w-full mt-4 max-h-[86.2vh] overflow-y-auto backdrop-blur rounded bg-white !border-r-2 border-white !border-opacity-10 bg-opacity-10 ">{component}</div>
        </div>
      </div>
    </div>
  );
};
export default Layout;

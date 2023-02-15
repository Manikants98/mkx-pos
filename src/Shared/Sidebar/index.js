import {
  ArrowBackIosTwoTone,
  ArrowForwardIosTwoTone,
} from "@mui/icons-material";
import { Avatar, Button, List, ListItem } from "@mui/material";
import classNames from "classnames";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { navItems } from "../../Mock";
import Text from "../Text";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();

  return (
    <div
      className={classNames(
        "h-screen p-2",
        collapsed
          ? "!w-24 transition-all duration-500"
          : "!w-64 transition-all duration-500"
      )}
    >
      <List className="!p-2 rounded bg-white bg-opacity-10 !z-[990] backdrop-blur !border-r-2 border-white !border-opacity-10 shadow h-full">
        <ListItem className="!p-2 mb-4">
          <Avatar alt="M" src="broken.jpg" />
          {!collapsed ? (
            <Text className="text-2xl ml-2 font-bold">MKXERP</Text>
          ) : null}
        </ListItem>
        {navItems.map((nav, index) => (
          <>
            <ListItem
              key={nav.id}
              onClick={() => navigate(nav.navLink)}
              className={classNames(
                "bg-white bg-opacity-0 !pr-0.5 hover:!bg-opacity-5 my-1 border cursor-pointer border-white border-opacity-0 hover:border-opacity-[12%] hover:rounded p-2",
                window.location.pathname === nav.navLink
                  ? "!border-opacity-[15%] hover:!bg-opacity-10 shadow rounded !bg-opacity-10 hover:!border-opacity-30"
                  : ""
              )}
            >
              <span
                className={classNames(
                  "!text-white !text-opacity-70",
                  !collapsed
                    ? "scale-[1] transition-all duration-500"
                    : "scale-[1.3] transition-all duration-500"
                )}
              >
                {nav.navIcon}
              </span>
              <span className="ml-3">{!collapsed ? nav.navItem : null}</span>
            </ListItem>
          </>
        ))}

        <ListItem
          className="!fixed !bottom-0 my-1 p-2 !text-white cursor-pointer !text-opacity-50 hover:!text-opacity-100 cu !w-full flex items-center justify-center"
          onClick={() => setCollapsed(!collapsed)}
        >
          {!collapsed ? <ArrowBackIosTwoTone /> : <ArrowForwardIosTwoTone />}
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;

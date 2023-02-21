import {
  ArrowBackIosTwoTone,
  ArrowForwardIosTwoTone,
} from "@mui/icons-material";
import { Avatar, List, ListItem, Divider } from "@mui/material";
import classNames from "classnames";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { navItems } from "../../Mock";
import Text from "../Text";
import favicon from "../../Assets/Home/favimg.png";

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
      <List className="!p-2 rounded !z-[990] backdrop-blur !border-2 border-white !border-opacity-5 shadow h-full">
        <ListItem className="!p-2 mb-5 flex items-center">
          <Avatar alt="M" src={favicon} />
          {!collapsed ? (
            <Text className="text-2xl ml-2 font-bold">MKXERP</Text>
          ) : null}
        </ListItem>

        <ListItem className="!p-2 flex items-centser">
          <Avatar alt="M" src="broken.jpg" variant="rounded" />
          {!collapsed ? (
            <div className="flex flex-col whitespace-nowrap">
              <Text className="ml-2 font-semibold">Mani Kant Sharma</Text>
              <Text className="ml-2 text-xs">Super Admin</Text>
            </div>
          ) : null}
        </ListItem>
        <Divider />
        {navItems.map((nav, index) => (
          <>
            <ListItem
              key={nav.id}
              onClick={() => navigate(nav.navLink)}
              className={classNames(
                "!pr-0.5 my-1 border cursor-pointer whitespace-nowrap border-white border-opacity-0 hover:border-opacity-20 hover:rounded p-2",
                window.location.pathname === nav.navLink
                  ? "!border-opacity-20 shadow rounded backdrop-blur hover:!border-opacity-30"
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

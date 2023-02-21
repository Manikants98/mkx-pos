import { Avatar, Divider } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import Text from "../Text";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="">
      <div className="flex justify-end w-full item-center !border-2 !border-white !border-opacity-5 p-3 backdrop-blur rounded">
        <div>
          <Avatar src="broken.jpg" alt="M" onClick={handleClick} className="cursor-pointer"/>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            className="!top-4 !-left-1 !p-3"
          >
            <div className="backdrop-blur-sm">
              <div className="flex flex-col justify-center items-center py-2 !w-40">
                <Avatar src="broken.jpg" alt="M" className="h-16 w-16" />
                <Text className="">Mani Kant Sharma</Text>
                <Text className="text-xs">mkx@mkx.com</Text>
              </div>
              <Divider />
              <MenuItem onClick={handleClose} className="!m-1 !rounded">
                Profile
              </MenuItem>
              <MenuItem onClick={handleClose} className="!m-1 !rounded">
                My Account
              </MenuItem>
              <MenuItem onClick={handleClose} className="!m-1 !rounded">
                Logout
              </MenuItem>
            </div>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;

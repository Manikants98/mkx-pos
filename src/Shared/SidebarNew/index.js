import * as React from "react";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Avatar, IconButton } from "@mui/material";
import Text from "../Text";
import classNames from "classnames";
import { ArrowBackIos } from "@mui/icons-material";

const SidebarNew = () => {
  const [open, setOpen] = React.useState(false);
  const [collapse, setCollapse] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      className={classNames(
        "p-2 !w-full max-w-[230px] bg-white transition-all duration-500 bg-opacity-20 !m-2 rounded",
        collapse ? "!max-w-[20px] transition-all duration-500" : ""
      )}
    >
      <ListItem className="flex items-center gap-2 !text-black">
        {collapse ? null : (
          <>
            <Avatar className="!rounded" />
            <span>
              <Text className="whitespace-nowrap"> Mani Kant Sharma</Text>
              <Text className="whitespace-nowrap"> Super Admin</Text>
            </span>
          </>
        )}
        <IconButton
          size="small"
          onClick={() => setCollapse(!collapse)}
          className={classNames("!bg-white !bg-opacity-300 z-20 !relative !p-px left-[13px]", collapse?"!-left-[10px]":"")}
        >
          <ArrowBackIos />
        </IconButton>
      </ListItem>
      {collapse ? null : (
        <>
          <ListItemButton>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Boards" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Members" />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Workspace" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Update" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </List>
          </Collapse>
        </>
      )}
    </List>
  );
};
export default SidebarNew;

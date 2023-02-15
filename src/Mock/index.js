import {
  ContactPageTwoTone,
  HomeTwoTone,
  InfoTwoTone,
} from "@mui/icons-material";
import { CircularProgress } from "@mui/material";

export const navItems = [
  {
    id: 1,
    navItem: "Home",
    navLink: "/Home",
    navIcon: <HomeTwoTone />,
  },
  {
    id: 2,
    navItem: "ContactUs",
    navLink: "/ContactUs",
    navIcon: <ContactPageTwoTone />,
  },
  {
    id: 3,
    navItem: "AboutUs",
    navLink: "/AboutUs",
    navIcon: <InfoTwoTone />,
  },
];

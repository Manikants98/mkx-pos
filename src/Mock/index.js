import {
  ContactPageTwoTone,
  HomeTwoTone,
  InfoTwoTone,
} from "@mui/icons-material";
import { CircularProgress } from "@mui/material";

export const navItems = [
  {
    id: 1,
    navItem: "Dashboard",
    navLink: "/Home",
    navIcon: <HomeTwoTone />,
  },
  {
    id: 2,
    navItem: "All Products",
    navLink: "#",
    navIcon: <ContactPageTwoTone />,
  },
  {
    id: 2,
    navItem: "In-Stock",
    navLink: "#",
    navIcon: <ContactPageTwoTone />,
  },
  {
    id: 2,
    navItem: "Out-Of-Stock",
    navLink: "#",
    navIcon: <ContactPageTwoTone />,
  },
  {
    id: 2,
    navItem: "Customers",
    navLink: "#",
    navIcon: <ContactPageTwoTone />,
  },
  {
    id: 2,
    navItem: "Order History",
    navLink: "#",
    navIcon: <ContactPageTwoTone />,
  },

  {
    id: 3,
    navItem: "ContactUs",
    navLink: "/ContactUs",
    navIcon: <ContactPageTwoTone />,
  },
  {
    id: 4,
    navItem: "AboutUs",
    navLink: "/AboutUs",
    navIcon: <InfoTwoTone />,
  },
];

import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Home from "../Pages/Home";
import Loader from "../Shared/Loader";

export const routes = [
  {
    id: 1,
    component: <Home />,
    path: "/Home",
  },
  {
    id: 2,
    component: <ContactUs />,
    path: "/ContactUs",
  },
  {
    id: 3,
    component: <AboutUs />,
    path: "/AboutUs",
  },
  {
    id: 4,
    component: <Loader />,
    path: "/Loader",
  },
];

import {
    FaTachometerAlt,
    FaRegUserCircle,
    FaBook,
    FaRegCalendarAlt,
    FaInbox,
    FaRegClock,
  } from "react-icons/fa";
  import { CgScreen } from "react-icons/cg";
  import { FaArrowRightToBracket, FaQuestion } from "react-icons/fa6";

const links = [
    {
      label: "",
      link: "http://northeastern.edu",
      fullLink: true,
      icon: (
        <img
          src="/images/n.jpg"
          className="card-img-top"
          alt="Northeastern Logo"
        />
      ),
    },
    {
      label: "Account",
      link: "Account",
      fullLink: false,
      icon: <FaRegUserCircle className="fs-2 wd-kanbas-navigation-icons" />,
    },
    {
      label: "Dashboard",
      link: "Dashboard",
      fullLink: false,
      icon: <FaTachometerAlt className="fs-2 wd-kanbas-navigation-icons" />,
    },
    {
      label: "Courses",
      link: "Courses",
      fullLink: false,
      icon: <FaBook className="fs-2 wd-kanbas-navigation-icons" />,
    },
    {
      label: "Calendar",
      link: "Calendar",
      fullLink: false,
      icon: <FaRegCalendarAlt className="fs-2 wd-kanbas-navigation-icons" />,
    },
    {
      label: "Inbox",
      link: "Inbox",
      fullLink: false,
      icon: <FaInbox className="fs-2 wd-kanbas-navigation-icons" />,
    },
    {
      label: "History",
      link: "History",
      fullLink: false,
      icon: <FaRegClock className="fs-2 wd-kanbas-navigation-icons" />,
    },
    {
      label: "Studio",
      link: "Studio",
      fullLink: false,
      icon: <CgScreen className="fs-2 wd-kanbas-navigation-icons" />,
    },
    {
      label: "Commons",
      link: "Commons",
      fullLink: false,
      icon: (
        <FaArrowRightToBracket className="fs-2 wd-kanbas-navigation-icons" />
      ),
    },
    {
      label: "Help",
      link: "Help",
      fullLink: false,
      icon: <FaQuestion className="fs-2 wd-kanbas-navigation-icons" />,
    },
  ];

export default links;
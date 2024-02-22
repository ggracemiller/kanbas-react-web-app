import { FaFileImport } from "react-icons/fa";
import { PiExportFill } from "react-icons/pi";
import { FaPeopleRoof } from "react-icons/fa6";
import { VscGraph } from "react-icons/vsc";
import { TfiAnnouncement } from "react-icons/tfi";
import { BsGraphUp } from "react-icons/bs";
import { IoMdNotificationsOff } from "react-icons/io";
import { Link } from "react-router-dom";

function CourseStatus() {
  const items = [
    {
      text: "Import Existing Content",
      icon: <FaFileImport />,
      link: "#"
    },
    {
      text: "Import From Commons",
      icon: <PiExportFill />,
      link: "#"
    },
    {
      text: "Choose Home Page",
      icon: <FaPeopleRoof />,
      link: "#"
    },
    {
      text: "View Course Stream",
      icon: <VscGraph />,
      link: "#"
    },
    {
      text: "New Announcement",
      icon: <TfiAnnouncement />,
      link: "#"
    },
    {
      text: "New Analytics",
      icon: <BsGraphUp />,
      link: "#"
    },
    {
      text: "View Course Notifications",
      icon: <IoMdNotificationsOff />,
      link: "#"
    },
  ];

  return (
    <>
      <button type="button" className="btn btn-outline-secondary">
        Unpublish
      </button>
      <button type="button" className="btn btn-outline-success">
        Published
      </button>
      <div className='black-links'>
        { items.map((item) => (
            <>
            <Link to={`/Kanbas/${item.link}`}>
                <button type="button" className="btn btn-outline-secondary">
                    {item.icon} {item.text}
                </button>
            </Link>
            <br></br>
            </>
        ))}
      </div>
    </>
  );
}
export default CourseStatus;

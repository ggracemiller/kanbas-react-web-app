import { Link, useLocation } from "react-router-dom";
import links from "./links";

function KanbasNavigation() {
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li
          key={index}
          className={pathname.includes(link.link) ? "wd-active" : ""}
        >
          {link.fullLink ? <a href={link.link}>{" "}
            {link.icon} {link.label}{" "}</a> : <Link to={`/Kanbas/${link.label}`}>
            {" "}
            {link.icon} {link.label}{" "}
          </Link>}
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;

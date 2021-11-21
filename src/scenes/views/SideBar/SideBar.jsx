import {
  BiChevronDown,
  BiCollection,
  BiGridAlt,
  BiHomeSmile,
} from "react-icons/bi";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className="viewsSection ">
      <div class="sidebar close">
        <ul className="nav-links">
          <li>
            <Link className="nav-links-item" to="/">
              <BiHomeSmile className="link-icon"></BiHomeSmile>
              <span className="link-name">Home</span>
            </Link>
          </li>
          <li>
            <button className="nav-links-item">
              <BiHomeSmile className="link-icon"></BiHomeSmile>
              <span className="link-name">Notification</span>
            </button>
          </li>
          <li>
            <button href="#" className="nav-links-item">
              <BiGridAlt className="link-icon"></BiGridAlt>
              <span className="link-name">Dashboard</span>
            </button>
          </li>
          <li>
            <div className="iconLink">
              <button href="#" className="nav-links-item">
                <BiCollection className="link-icon"></BiCollection>
                <span className="link-name">Tickets</span>
              </button>
              <BiChevronDown className="link-icon arrow"></BiChevronDown>
            </div>
            <ul className="sub-menu">
              <li>
                <Link className="link-name">Tickets</Link>
              </li>
              <li>
                <Link className="sub-menu-link">Projects</Link>
              </li>
              <li>
                <Link className="sub-menu-link" to="/taskview">
                  Tasks
                </Link>
              </li>
              <li>
                <Link className="sub-menu-link">Board</Link>
              </li>
            </ul>
          </li>
          {/* <li>
<div className="iconLink">
<Link href="#" className="nav-links-item">
    <BiBookAlt className="link-icon"></BiBookAlt> 
    <span className="link-name">Posts</span>
</Link>
<BiChevronDown className="link-icon arrow"></BiChevronDown>
</div>
<ul className="sub-menu">
<li><Link className="link-name">Posts</Link></li>
<li><Link className="sub-menu-link">Projects</Link></li>
<li><Link className="sub-menu-link">List</Link></li>
<li><Link className="sub-menu-link">Board</Link></li>
</ul>
</li> */}
        </ul>
      </div>
    </div>
  );
}
export default SideBar;

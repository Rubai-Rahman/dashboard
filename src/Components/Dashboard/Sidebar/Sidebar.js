import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { BsMenuDown } from "react-icons/bs";
import { IoMapSharp } from "react-icons/io5";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineLiveHelp } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="frame">
          <div className="menu">
            <span>MENU</span>
            <Link to='/dashboard'><button className="button">
              <MdOutlineDashboard /> <span>DashBoard</span>
            </button></Link>
            <Link to="/maps"><button className="button">
              <IoMapSharp />
              <span>Maps</span>
            </button></Link>
            <Link to="/menu"><button className="button">
              <BsMenuDown /> <span>Menu</span>
            </button></Link>
            <Link to="/message"><button className="button">
              <AiOutlineMessage />
              <span>Message</span>
            </button></Link>
          </div>

          <div className="others">
            <span>OTHERS</span>
            <Link to="/setting"><button className="button">
              <AiOutlineSetting /> <span>Setting</span>
            </button></Link>
            <Link to="/account"><button className="button">
              <MdOutlineAccountCircle /> <span>Account</span>
            </button></Link>
            <Link to="/help"><button className="button">
              <MdOutlineLiveHelp /> <span>Help</span>
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

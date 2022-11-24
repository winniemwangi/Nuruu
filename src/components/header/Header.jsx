import { IoSettings } from "react-icons/io5";
import prof from "../../image/profile.jpeg";
import { VscBell } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
  return (
    <div>
      <h1>header</h1>
      <nav className="nav">
      <div className="title">
        <h1>
            <span></span>
        </h1>
        <div className="search">  
          <input type="text" placeholder="Search" />
        </div>
      </div>
        <div className="notification">
            <VscBell />
        </div>
        
        <div className="icon">
            <IoSettings />
        </div>
        <Link to="/profile">
          <div className="image">
            <a href="/profile">
              <img src={prof} alt="" />
              </a>
          </div>
        </Link>
      </nav>
  
    </div>
  )
}

export default Header;
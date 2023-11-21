import {Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faSearch,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import Styles from "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchquery } from "../Reducer";
import { setAuth } from "../Reducer";


function Header(props) {
  let [dropdown, setDropdown] = useState(false);

  let navigate = useNavigate();
  const dispatch = useDispatch()

var handleChange=(e)=>{
  const query = e.target.value;
  dispatch(setSearchquery(query))

}

  var Dropdowndiv = () => {
    setDropdown(!dropdown);
  };

  var Logout = () => {
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
    dispatch(setAuth(false))
    navigate("/");
  };

  return (
    <>
      <div className="maincontainer container-fluid">
        <div className="navbar container-fluid">
          <div id="logo">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt="logo"
            />
          </div>
          <div className='navbar-links d-flex'
          >
            <div>
            <NavLink activeclassname="active" className="nav" to={"/home"}>
              Home
            </NavLink>
          </div>
          <div className="dash ">
            <Link  className="nav" to={""}>
              TvShows
            </Link>
          </div>
          <div className="dash">
            <NavLink activeclassname="active" className="nav" to={"/videos"}>
              Trailers
            </NavLink>
          </div>

          <div className="dash ">
            <Link  className="nav" to={""}>
              My List
            </Link>
          </div>
          </div>
        </div>
        <div className="navbar container-fluid">
          <input
            className="search-input"
            type="text"
            
            placeholder="Search for Title"
            autoCorrect="on"
            onChange={(e)=>handleChange(e)}
          />
          <FontAwesomeIcon
            className="fabell text-white"
            style={{cursor: "pointer"}}
            icon={faBell}
          />
           {dropdown && (
    <div className='dropdown show'>
      <button onClick={Logout} className='logoutbtn'>LogOut</button>
      <button onClick={() => navigate('/accounts')} className='accountsbtn'>Accounts</button>
    </div>
  )}
          <div className='userprofile-container d-flex align-items-center'>
  <FontAwesomeIcon className='caretdown px-3' onClick={Dropdowndiv} icon={faCaretDown} />
  <img className='userlogo' src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' alt='userlogo' />
</div>
  
        </div>
      </div>
     
    </>
  );
}

export default Header;

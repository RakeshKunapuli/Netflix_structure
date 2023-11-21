import React, { useState } from "react";
import styles from "./Accounts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Accounts() {
  let navigate = useNavigate();

  const userData = [
    {
      name: "Rakesh",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    },
    {
      name: "Mahesh",
      image:
        "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg",
    },
    {
      name: "Karthik",
      image:
        "https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg",
    },
    {
      name: "Kids",
      image:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/7d691b26-1a61-411b-b388-1328863d0cc0-profile_image-300x300.png",
    },
  ];
let [scale, setScale] = useState(1)
  var Navigate = () => {
    navigate("/home");
  };

  var renderData = () => {
    return userData.map((profile, i) => (
      <div className="users" key={i} onClick={Navigate}>
        <img  src={profile.image} alt={profile.name} />
        <p>{profile.name}</p>
      </div>
    ));
  };
  return (
    <>
      <div className="acconuts-maincontainer">
        <div>
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="Netflix logo"
          />
        </div>
        <div className=" profiles container text-center">
          <h4>Who's Watching ?</h4>
          <div className="userscontainer">
            {renderData()}
            <div className="users">
              <FontAwesomeIcon className="addprofile" icon={faPlus} />
              <p>Add Profiles</p>
            </div>
          </div>
          <div className="manage">
            <h4 onMouseEnter={()=>setScale(1.1)}
      onMouseLeave={()=>setScale(1)} style={{transform:`scale(${scale})`,cursor:'pointer'}} className="manageprofiles">MANAGE PROFILES</h4>
            </div>
        </div>
      </div>
    </>
  );
}

export default Accounts;
